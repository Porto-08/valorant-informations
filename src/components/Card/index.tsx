import { Skeleton } from '@mui/material'
import React, { useState } from 'react'
import Button from '../Button'
import { Props } from './interface'
import { Container } from './styles'


const Card = ({ title, description, image, buttonTitle }: Props) => {
    const [skeleton, setSkeleton] = useState<boolean>(true);


    return (
        <Container>
            {skeleton
                ?
                <Skeleton variant='rectangular' animation='wave'>
                    <img onLoad={() => setSkeleton(false)} src={image} alt="Card Image" />
                </Skeleton>
                : (
                    <img src={image} alt="Card Image" />
                )
            }

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