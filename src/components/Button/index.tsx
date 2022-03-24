import React from 'react'
import { Container } from './styles'

interface Props {
    title: string
    background?: string
    hoverBackground?: string
    children: React.ReactNode
    fontSize?: string
    padding?: string
    onClick?: () => void
}

const Button = ({ children, title, background, hoverBackground, fontSize, padding, onClick }: Props) => {
    return (
        <Container title={title} background={background} hoverBackground={hoverBackground} fontSize={fontSize} padding={padding} onClick={onClick}>
            {children}
        </Container>
    )
}

export default Button