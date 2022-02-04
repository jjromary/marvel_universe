import api from "../services/api";
import Head from "next/head";
import { GetStaticProps } from "next";
import { Characters } from "../components/Characters";

interface HomeProps {
  characters: {
    name: string;
    description: string;
  }[]
}

export default function Home ({characters}: HomeProps) {
  console.log(characters[1].description)

  return (
    <div>
      <Head>
        <title>Marvel Universe</title>
      </Head>

      <main>
        <Characters />
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get('/characters')

  

  return {
    props:{
      characters: data.data.results,
    },
    // revalidate: 60 * 60 * 24, //24 horas
  };
};
