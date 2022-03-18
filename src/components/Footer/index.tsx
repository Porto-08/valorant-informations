import Link from 'next/link'
import React from 'react'
import { Container } from './styles'

const Footer = () => {
    return (
        <Container>
            <p>&copy; {new Date().getFullYear} Valorant Informations - All rights reserved</p>

            <p>Feito poo <a href="https://portfolio-nine-rose-40.vercel.app/" target="_blank" rel='noreferrer'>Samuel Porto</a></p>
        </Container>
    )
}

export default Footer