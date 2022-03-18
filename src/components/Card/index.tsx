import React from 'react'
import Button from '../Button'
import { Container } from './styles'

interface Props {
    title: string
    description: string
    image: string
    buttonTitle: string
}


const Card = ({ title, description, image, buttonTitle }: Props) => {
    return (
        <Container>
            <img src={image} alt="" />

            <h3>{title}</h3>

            <p>
                {description}
            </p>

            <Button title='Learn more' padding='10px' fontSize='clamp(1rem, 1vw, 1.25rem)'>
                {buttonTitle}
            </Button>
        </Container>
    )
}

export default Card