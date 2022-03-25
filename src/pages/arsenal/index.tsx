import { GetStaticProps } from 'next'
import React from 'react'
import Card from 'src/components/Card'
import Intro from 'src/components/Intro'
import { Weapons } from 'src/interfaces/arsenal'
import { api } from 'src/service/api'
import { Container, GridArsenal } from '../../styles/pages/Arsenal'


interface Props {
    arsenal: {
        status: number;
        data: Weapons[];
    }
}

const Arsenal = ({ arsenal }: Props) => {
    console.log(arsenal)
    return (
        <Container>
            <Intro title='Arsenal' subtitle='Look all this weapons! Which one is the best?' />

            <GridArsenal>
                {arsenal && arsenal.data.map((weapon) => (
                    <Card key={weapon.uuid} buttonTitle='Choose this' image={weapon.displayIcon} title={weapon.displayName} />
                ))}
            </GridArsenal>
        </Container>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const { data } = await api.get<Weapons[]>('weapons');

    return {
        props: {
            arsenal: data
        }
    }
}

export default Arsenal