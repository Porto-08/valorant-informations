import { GetStaticProps } from "next";
import React from "react";
import Card from "../../components/Card";
import { Container, GridMaps } from "../../styles/pages/Maps";
import { api } from "../../service/api";
import Intro from "../../components/Intro";
import { useRouter } from "next/router";
import { Map } from "src/interfaces/maps";
import Head from "next/head"; 

interface Props {
  maps: {
    status: number;
    data: Map[];
  };
}

const Agents = ({ maps }: Props) => {
  const router = useRouter();
  console.log(maps);

  return (
    <>
      <Head>
        <title>Valorant Informations - Mapas</title>
      </Head>

      <Container>
        <Intro title="Mapas" subtitle="Mapas de vários tipos. Qual o seu?" />

        <GridMaps>
          {maps &&
            maps.data.map((map) => (
              <Card key={map.uuid} title={map.displayName} image={map.splash} />
            ))}
        </GridMaps>
      </Container>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get<Map[]>("maps?language=pt-BR");

  return {
    props: {
      maps: data,
    },
  };
};

export default Agents;
