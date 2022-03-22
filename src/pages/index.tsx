import React, { useState } from 'react';
import Head from 'next/head'
import { AgentImage, Agents, AgentText, BackgroundImage, Container, GameModes, GameModesText, GridAbout, Introduction } from '../styles/pages/Home'
import Header from 'src/components/Header'
import Background from "../assets/images/main-background.jpg"
import Button from 'src/components/Button'
import Card from 'src/components/Card'
import Footer from 'src/components/Footer'
import AsideMenu from 'src/components/AsideMenu'

const Home: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const openMenu = () => {
    setIsOpen(!isOpen)
  }

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

          <Button title='Learn more'>
            Conheça o Jogo.
          </Button>
        </BackgroundImage>
      </Introduction>


      <GridAbout>
        <div>
          <h2>Conheça o Jogo</h2>
          <p>Para mais informações acesse o menu a direita.</p>
        </div>


        <div className='grid'>
          <Card
            image='https://media.valorant-api.com/maps/7eaecc1b-4337-bbf6-6ab9-04b8f06b3319/splash.png'
            title='Maps'
            description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur facere iste sequi totam nostrum enim optio in exercitationem ipsum! Iure distinctio consequatur quia esse sint odio dignissimos explicabo commodi porro.'
            buttonTitle='See maps'
          />

          <Card
            image='https://media.valorant-api.com/maps/7eaecc1b-4337-bbf6-6ab9-04b8f06b3319/splash.png'
            title='Agents'
            description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur facere iste sequi totam nostrum enim optio in exercitationem ipsum! Iure distinctio consequatur quia esse sint odio dignissimos explicabo commodi porro.'
            buttonTitle='See agents'
          />

          <Card
            image='https://media.valorant-api.com/maps/7eaecc1b-4337-bbf6-6ab9-04b8f06b3319/splash.png'
            title='Game Modes'
            description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur facere iste sequi totam nostrum enim optio in exercitationem ipsum! Iure distinctio consequatur quia esse sint odio dignissimos explicabo commodi porro.'
            buttonTitle='See game modes'
          />
        </div>

      </GridAbout>

      <Footer />
    </Container>
  )
}

export default Home;