import { GetStaticProps } from 'next';
import React from 'react';
import Card from 'src/components/Card';
import { Container, GridAgents } from './styles';
import { api } from '../../service/api';
import { Agent } from './interface';

interface Props {
  agents: {
    status: number;
    data: Agent[];
  }
}

const Agents = ({ agents }: Props) => {
  console.log(agents);
  return (
    <Container>
      <div>
        <h1>Agents</h1>
        <span>Look all the agents, choose the one most combine with you!</span>
      </div>

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

export default Agents