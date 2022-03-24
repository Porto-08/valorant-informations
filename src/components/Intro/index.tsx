import React from 'react'
import { Props } from './interface'
import { Container, Subtitle, Title } from './styles'




const Intro = ({ title, subtitle }: Props) => {
    return (
        <Container>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
        </Container>
    )
}

export default Intro