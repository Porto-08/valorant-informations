import React from 'react'
import { Container } from './styles'

interface Props {
    title: string
    background?: string
    hoverBackground?: string
    children: React.ReactNode
    fontSize?: string
    padding?: string
}

const Button = ({ children, title, background, hoverBackground, fontSize, padding}: Props) => {
    return (
        <Container title={title} background={background} hoverBackground={hoverBackground} fontSize={fontSize} padding={padding}>
            {children}
        </Container>
    )
}

export default Button