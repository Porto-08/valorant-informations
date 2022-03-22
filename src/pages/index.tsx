import React, { useState } from 'react';
import Head from 'next/head'
import { BackgroundImage, Container, GridAbout, Introduction } from '../styles/pages/Home'
import Button from 'src/components/Button'
import Card from 'src/components/Card'
import { useRouter } from 'next/router';

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

          <Button title='Learn more' onClick={() => {
            router.push('#conheca-o-jogo')
          }}>
            Conheça o Jogo
          </Button>
        </BackgroundImage>
      </Introduction>


      <GridAbout id='conheca-o-jogo'>
        <div>
          <h2>Conheça o Jogo</h2>
          <p>Para mais informações acesse o menu a direita.</p>
        </div>


        <div className='grid'>
          <Card
            image='https://media.valorant-api.com/maps/7eaecc1b-4337-bbf6-6ab9-04b8f06b3319/splash.png'
            title='Maps'
            description='Six maps to play with your friends. Each map has a unique style and a unique story.'
            buttonTitle='See maps'
          />

          <Card
            image='https://media.valorant-api.com/maps/7eaecc1b-4337-bbf6-6ab9-04b8f06b3319/splash.png'
            title='Agents'
            description='Find more ways to plant the Spike and style on your enemies with scrappers, strategists, and hunters of every description. '
            buttonTitle='Check the HeadCount'
          />

          <Card
            image='https://media.valorant-api.com/maps/7eaecc1b-4337-bbf6-6ab9-04b8f06b3319/splash.png'
            title='Arsenal'
            description='Choose yout weapon, customize it, and equip it to your team. We have Sidearms, Pistols, Shotguns, SMGS, Spiners, Heavies, Melee and Rifles for you to choose from.'
            buttonTitle='See game modes'
          />
        </div>
      </GridAbout>
    </Container>
  )
}

export default Home;