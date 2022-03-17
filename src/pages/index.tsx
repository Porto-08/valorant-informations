import React from 'react'
import Head from 'next/head'
import { Container, Introduction } from '../styles/pages/Home'
import Header from 'src/components/Header'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Valorant Informations</title>
      </Head>

      <Header />

      <Introduction>

      </Introduction>

    </Container>
  )
}

export default Home
