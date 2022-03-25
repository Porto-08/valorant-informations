import { Skeleton } from '@mui/material'
import React, { useState } from 'react'
import Button from '../Button'
import SkeletonImage from '../SkeletonImage'
import { Props } from './interface'
import { Container } from './styles'


const Card = ({ title, description, image, buttonTitle, onClick }: Props) => {
    return (
        <Container>
            <SkeletonImage src={image} alt="Card Image" title={title}/>

            <h3>{title}</h3>

            <p role='paragraph'>
                {description}
            </p>

            {buttonTitle && (
            <Button title='Learn more' padding='10px' fontSize='clamp(1rem, 1vw, 1.25rem)' onClick={onClick}>
                {buttonTitle}
            </Button>
            )}
        </Container>
    )
}

export default Card