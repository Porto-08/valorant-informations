import { GetStaticPaths, GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring'
import React from 'react'
import { IAgents } from 'src/interfaces/agents/interface'
import { Data, IAgent } from 'src/interfaces/agent'
import { api } from 'src/service/api'
import { Container, DescriptionAgent, HeaderAgent, Skill, Skills, SkillsAgent } from '../../styles/pages/Agent'


interface IParams extends ParsedUrlQuery {
    id: string;
}

interface Props {
    agent: Data;
}

const Agent = ({ agent }: Props) => {

    return (
        <Container>
            <HeaderAgent>
                <div>
                    <h1>{agent.displayName}</h1>
                    <p>{agent.role.displayName}</p>
                </div>


                <img src={agent.fullPortraitV2} alt={agent.displayName} />
            </HeaderAgent>

            <DescriptionAgent>
                <div>
                    <h3>Description</h3>
                    <p>
                        {agent.description}
                    </p>
                </div>

                <div>
                    <h3>Game Style</h3>
                    <p>
                        {agent.role.description}
                    </p>
                </div>
            </DescriptionAgent>

            <SkillsAgent>
                <h3>Skills</h3>

                <Skills>
                    {agent.abilities.map((ability) => (
                        <Skill key={ability.displayName}>
                            <div>
                                <h4>{ability.displayName}</h4>
                                <img src={ability.displayIcon} alt={ability.displayName} />
                            </div>

                            <p>{ability.description}</p>
                        </Skill>
                    ))}
                </Skills>
            </SkillsAgent>
        </Container>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const { data } = await api.get<IAgents>('/agents');

    const paths = data.data.map((agent) => ({
        params: {
            id: agent.uuid
        }
    }))

    return {
        paths,
        fallback: "blocking"
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
    const { id } = context.params as IParams;

    const { data } = await api.get<IAgent>(`/agents/${id}`);

    return {
        props: {
            agent: data.data
        }
    }
}

export default Agent