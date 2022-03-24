import { GetStaticProps } from 'next';
import React from 'react';
import Card from '../../components/Card';
import { Container, GridMaps } from '../../styles/pages/Maps';
import { api } from '../../service/api';
import Intro from '../../components/Intro';
import { useRouter } from 'next/router';
import { Map } from 'src/interfaces/maps';

interface Props {
  maps: {
    status: number;
    data: Map[];
  }
}

const Agents = ({ maps }: Props) => {
  const router = useRouter();
  console.log(maps);

  return (
    <Container>
      <Intro title='Maps' subtitle='Look this maps! Which one is the best for you?'/>

      <GridMaps>
        {maps && maps.data.map((map) => (
          <Card key={map.uuid} buttonTitle='For sure This' title={map.displayName} image={map.splash} description="Without description :/"/>
        ))}
      </GridMaps>
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get<Map[]>('maps');
  
  return {
    props: {
      maps: data
    }
  }
}

export default Agents;