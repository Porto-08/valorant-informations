import React from 'react'
import { Container } from './styles'
import { BsSuitHeartFill } from 'react-icons/bs'
import Link from 'next/link'

const Footer: React.FC = () => {
    return (
        <Container>
            <p role='paragraph'>&copy; {new Date().getFullYear} Valorant Informations - All rights reserved</p>

            <p role='paragraph'>Feito com <BsSuitHeartFill /> por <a href="https://portfolio-nine-rose-40.vercel.app/" target="_blank" rel='noreferrer'>Samuel Porto</a></p>

            <span>
                Powered by <Link href="https://valorant-api.com/">VALORANT-API</Link>
            </span>
        </Container>
    )
}

export default Footer