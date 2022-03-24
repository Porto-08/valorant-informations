import { GetStaticProps } from 'next';
import React from 'react';
import Card from '../../components/Card';
import { Container, GridAgents } from '../../styles/pages/Agent';
import { api } from '../../service/api';
import { Agent } from '../../interfaces/agents/interface';
import Intro from '../../components/Intro';

interface Props {
  agents: {
    status: number;
    data: Agent[];
  }
}

const Agents = ({ agents }: Props) => {
  return (
    <Container>
      <Intro title='Agents' subtitle='Look all the agents, choose the one most combine with you!'/>

      <GridAgents>
        {agents && agents.data.map((agent) => (
          agent.isPlayableCharacter && (
            <Card key={agent.uuid} buttonTitle='Choose this' description={agent.description} image={agent.fullPortraitV2} title={agent.displayName} />
          )
        ))}
      </GridAgents>
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get<Agent[]>('agents');

  return {
    props: {
      agents: data
    }
  }
}

export default Agents;