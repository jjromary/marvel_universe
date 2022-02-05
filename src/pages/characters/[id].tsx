import { GetStaticProps, GetStaticPaths } from "next";
import Image from "next/image";
import Link from "next/link";
import api from "../../services/api";
import {  Content } from "./styles";

interface HomeProps {
  character: {
    id: string;
    name: string;
    description: string;
    thumbnail: {
      path: string;
      extension: string;
    };
  };
}

export default function charactersPage({ character }: HomeProps) {
  return (
      <Content>
        <div className="cards">
          <Image
            src={character.thumbnail.path + "." + character.thumbnail.extension}
            alt="imagem character"
            width={216}
            height={324}
          />
          <div className="infoCharacters">
            <strong className="name">{character.name}</strong>
            <span className="description">
              {character.description
                ? character.description
                : "Information not available about the character"}
            </span>
          </div>

          <Link href={`/`}>Back</Link>
        </div>
      </Content>
  );
}

export async function getStaticPaths() {
  const { data } = await api.get("/characters");

  const character: HomeProps["character"][] = data.data.results.slice(0, 20);

  const paths = character.map((character) => ({
    params: { id: character.id.toString() },
  }));

  return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;

  const { data } = await api.get(`/characters/${params!.id}`);

  console.log(data.data.results[0]?.id);
  return {
    props: {
      character: data.data.results[0],
    },
    revalidate: 60 * 60 * 24, //24 horas
  };
};
