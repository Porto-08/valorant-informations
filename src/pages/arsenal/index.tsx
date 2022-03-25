import React from 'react'
import Card from 'src/components/Card'
import Intro from 'src/components/Intro'
import { Container, GridArsenal } from '../../styles/pages/Arsenal'


const Arsenal = () => {
    return (
        <Container>
            <Intro title='Arsenal' subtitle='Look all this weapons, which one is the best?' />

            <GridArsenal>
                
            </GridArsenal>
        </Container>
    )
}

export default Arsenal