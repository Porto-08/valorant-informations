import React, { useState } from 'react';
import Head from 'next/head'
import { BackgroundImage, Container, GridAbout, Introduction } from '../styles/pages/Home'
import Button from 'src/components/Button'
import Card from 'src/components/Card'
import { useRouter } from 'next/router';
import Intro from 'src/components/Intro';

const Home: React.FC = () => {
  const router = useRouter();

  return (
    <Container>
      <Head>
        <title>Valorant Informations</title>
      </Head>

      <Introduction>
        <BackgroundImage>
          <p>
            Todas as informações em um só lugar.
          </p>

          <h1>
            Valorant Informations
          </h1>

          <Button 
            title='Learn more' 
            onClick={() => {
              router.push('#conheca-o-jogo')
            }}
          >
            Conheça o Jogo
          </Button>
        </BackgroundImage>
      </Introduction>


      <GridAbout id='conheca-o-jogo'>
        <Intro title='Conheça o Jogo.' subtitle='Para mais informações acesse o menu a direita.'/>



        <div className='grid'>
          <Card
            image='https://media.valorant-api.com/maps/7eaecc1b-4337-bbf6-6ab9-04b8f06b3319/splash.png'
            title='Maps'
            description='Seis mapas aleatórios para você jogar. Cada um com sua peculiaridade.'
            buttonTitle='See maps'
            onClick={() => {
              router.push('/maps')
            }}
          />

          <Card
            image='https://media.valorant-api.com/agents/a3bfb853-43b2-7238-a4f1-ad90e9e46bcc/fullportraitv2.png'
            title='Agentes'
            description='Encontre mais maneiras de plantar o Spike e estilizar seus inimigos com duelistas, controladores, sentinelas e iniciadores de diversos tipos.'
            buttonTitle='Check the HeadCount'
            onClick={() => {
              router.push('/agents')
            }}
          />

          <Card
            image='https://media.valorant-api.com/weaponskinchromas/9667983e-4c8c-e5b2-68d7-be84f9b3d46c/displayicon.png'
            title='Arsenal'
            description='Escolha sua arma e equipe-a para sua equipe. Temos Sidearms, Pistols, Shotguns, SMGS, Spiners, Heavies, Melee e Rifles para você escolher.'
            buttonTitle='Arsenal'
            onClick={() => {
              router.push('/arsenal')
            }}
          />
        </div>
      </GridAbout>
    </Container>
  )
}

export default Home;