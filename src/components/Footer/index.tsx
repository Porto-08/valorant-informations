import React from 'react'
import { Container } from './styles'
import { BsSuitHeartFill } from 'react-icons/bs'

const Footer: React.FC = () => {
    return (
        <Container>
            <p>&copy; {new Date().getFullYear} Valorant Informations - All rights reserved</p>

            <p>Feito com <BsSuitHeartFill /> por <a href="https://portfolio-nine-rose-40.vercel.app/" target="_blank" rel='noreferrer'>Samuel Porto</a></p>
        </Container>
    )
}

export default Footer