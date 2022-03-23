import React from 'react'
import Button from '../Button'
import { Props } from './interface'
import { Container } from './styles'


const Card = ({ title, description, image, buttonTitle }: Props) => {
    return (
        <Container>
            <img src={image} alt="Card Image" />

            <h3>{title}</h3>

            <p role='paragraph'>
                {description}
            </p>

            <Button title='Learn more' padding='10px' fontSize='clamp(1rem, 1vw, 1.25rem)'>
                {buttonTitle}
            </Button>
        </Container>
    )
}

export default Card