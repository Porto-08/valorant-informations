import React from 'react'
import Head from 'next/head'
import { BackgroundImage, Container, Introduction } from '../styles/pages/Home'
import Header from 'src/components/Header'
import Background from "../assets/images/main-background.jpg"
import Image from 'next/image'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Valorant Informations</title>
      </Head>

      <Header />

      <Introduction>

        <BackgroundImage>
          <p>
            Todas as informações em um só lugar.
          </p>

          <h1>
            Valorant Informations
          </h1>

          <button>
            Learn more
          </button>
        </BackgroundImage>


      </Introduction>

    </Container>
  )
}

export default Home
