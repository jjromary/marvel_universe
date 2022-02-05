/* eslint-disable react/jsx-key */
import api from "../services/api";
import Head from "next/head";
import { GetStaticProps } from "next";
import Image from "next/image";
import { Container } from "./styles";
import Link from "next/link";

interface HomeProps {
  characters: {
    id: string;
    name: string;
    description: string;
    thumbnail: {
      path: string;
      extension: string;
    };
  }[];
}

export default function Home({ characters }: HomeProps) {
  console.log(characters[1]);

  return (
    <div>
      <Head>
        <title>Marvel Universe</title>
      </Head>

      <main>
        <Container>
          <div className="content">
            {characters.map((characters) => {
              return (
                <div key={characters.id} className="cards">
                  <Image
                    src={
                      characters.thumbnail.path +
                      "." +
                      characters.thumbnail.extension
                    }
                    alt="imagem character"
                    width={216}
                    height={324}
                  />
                  <div className="infoCharacters">
                    <strong className="name">{characters.name}</strong>
                    <span className="description">
                      {characters.description
                        ? characters.description
                        : "Information not available about the character"}
                    </span>
                  </div>
                    <Link href={`/characters/${characters.id}`}>More Info</Link>
                </div>
              );
            })}
          </div>
        </Container>
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get("/characters");

  return {
    props: {
      characters: data.data.results,
    },
    revalidate: 60 * 60 * 24, //24 horas
  };
};
