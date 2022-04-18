import { GetStaticProps } from "next";
import React from "react";
import Card from "src/components/Card";
import Intro from "src/components/Intro";
import { Weapons } from "src/interfaces/arsenal";
import { api } from "src/service/api";
import { Container, GridArsenal } from "../../styles/pages/Arsenal";
import { useRouter } from "next/router";
import Head from "next/head";

interface Props {
  arsenal: {
    status: number;
    data: Weapons[];
  };
}

const Arsenal = ({ arsenal }: Props) => {
  const router = useRouter();

  return (
    <Container>
      <Head>
        <title>Valorant Informations - Arsenal</title>
      </Head>

      <Intro title="Arsenal" subtitle="Só não vale a Odin em!" />

      <GridArsenal>
        {arsenal &&
          arsenal.data.map((weapon) => (
            <Card
              key={weapon.uuid}
              buttonTitle="Conhecer arma"
              image={weapon.displayIcon}
              title={weapon.displayName}
              onClick={() => {
                router.push(`/weapon/${weapon.uuid}`);
              }}
            />
          ))}
      </GridArsenal>
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get<Weapons[]>("weapons?language=pt-BR");

  return {
    props: {
      arsenal: data,
    },
  };
};

export default Arsenal;
