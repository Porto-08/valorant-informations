import { GetStaticProps } from 'next';
import React from 'react';
import Card from '../../components/Card';
import { Container, GridBuddies } from '../../styles/pages/Buddies';
import { api } from '../../service/api';
import { IBuddies } from '../../interfaces/buddies';
import Intro from '../../components/Intro';
import Head from 'next/head';
interface Props {
  bundies: IBuddies;
}

const Buddies = ({ bundies }: Props) => {
  console.log(bundies);
  return (
    <Container>
      <Head>
        <title>Valorant Informations - Chaveiros</title>
      </Head>
      
      <Intro title='Chaveiros' subtitle='Pra deixar sua arma com sua cara!'/>

      <GridBuddies>
          {bundies.data.map((buddy) => (
            <Card 
              image={buddy.displayIcon}
              title={buddy.displayName}
            />
          ))}
      </GridBuddies>
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get<IBuddies>('buddies?language=pt-BR');

  return {
    props: {
      bundies: data
    }
  }
}

export default Buddies