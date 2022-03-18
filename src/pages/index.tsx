import React from 'react'
import Head from 'next/head'
import { AgentImage, Agents, AgentText, BackgroundImage, Container, GridAbout, Introduction } from '../styles/pages/Home'
import Header from 'src/components/Header'
import Background from "../assets/images/main-background.jpg"
import Image from 'next/image'
import Button from 'src/components/Button'
import Card from 'src/components/Card'

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

          <Button title='Learn more'>
            Learn more
          </Button>
        </BackgroundImage>
      </Introduction>

      <GridAbout>
        <Card
          image='https://media.valorant-api.com/maps/7eaecc1b-4337-bbf6-6ab9-04b8f06b3319/splash.png'
          title='Maps'
          description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur facere iste sequi totam nostrum enim optio in exercitationem ipsum! Iure distinctio consequatur quia esse sint odio dignissimos explicabo commodi porro.'
          buttonTitle='Learn more'
        />

        <Card
          image='https://media.valorant-api.com/maps/7eaecc1b-4337-bbf6-6ab9-04b8f06b3319/splash.png'
          title='Maps'
          description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur facere iste sequi totam nostrum enim optio in exercitationem ipsum! Iure distinctio consequatur quia esse sint odio dignissimos explicabo commodi porro.'
          buttonTitle='Learn more'
        />

        <Card
          image='https://media.valorant-api.com/maps/7eaecc1b-4337-bbf6-6ab9-04b8f06b3319/splash.png'
          title='Maps'
          description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur facere iste sequi totam nostrum enim optio in exercitationem ipsum! Iure distinctio consequatur quia esse sint odio dignissimos explicabo commodi porro.'
          buttonTitle='Learn more'
        />


      </GridAbout>

      <Agents>
        <AgentText>
          <h2>
            Agents
          </h2>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Pariatur numquam repellendus ratione molestias, itaque nesciunt deserunt praesentium sunt ab, tempora, accusantium alias dolorem.
            Tenetur officia pariatur quod obcaecati, necessitatibus veniam!

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus pariatur harum provident aut itaque ducimus labore fugiat voluptatem eaque commodi animi quo sed dolor, asperiores doloremque delectus neque impedit at!

            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit fugit provident quas id ab delectus quae tempora. Totam eveniet mollitia alias non ipsa nesciunt consequatur optio itaque repudiandae corrupti? Quaerat!
          </p>



          <Button title='See the agents' hoverBackground='#fff'>
            See all the agents
          </Button>
        </AgentText>

        <AgentImage>
          <img src="https://media.valorant-api.com/agents/601dbbe7-43ce-be57-2a40-4abd24953621/fullportrait.png" alt="Agent Kayo" />
        </AgentImage>
      </Agents>

    </Container>
  )
}

export default Home
