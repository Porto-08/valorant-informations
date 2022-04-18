import { GetStaticProps } from 'next';
import React from 'react';
import Card from '../../components/Card';
import { Container, GridAgents } from '../../styles/pages/Agents';
import { api } from '../../service/api';
import { IAgents, Data } from '../../interfaces/agents/interface';
import Intro from '../../components/Intro';
import { useRouter } from 'next/router';
import Head from 'next/head';

interface Props {
  agents: {
    status: number;
    data: Data[];
  }
}

const Agents = ({ agents }: Props) => {
  const router = useRouter();


  return (
    <Container>
      <Head>
        <title>Valorant Informations - Agentes</title>
      </Head>
      
      <Intro title='Agentes' subtitle='Qual combina mais com você?'/>

      <GridAgents>
        {agents && agents.data.map((agent) => (
          agent.isPlayableCharacter && (
            <Card key={agent.uuid} buttonTitle='Conhecer Agente' description={agent.description} image={agent.fullPortraitV2} title={agent.displayName} onClick={() => {
              router.push(`/agent/${agent.uuid}`)
            }}/>
          )
        ))}
      </GridAgents>
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get<IAgents[]>('agents?language=pt-BR');

  return {
    props: {
      agents: data
    }
  }
}

export default Agents;