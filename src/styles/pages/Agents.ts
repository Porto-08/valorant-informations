import { fadeIn } from '../animations';
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 20px;

    background: ${props => props.theme.colors.background};

    animation: ${fadeIn} .7s ease;

    h1 {
        font-size: clamp(1.5rem, 2.5vw, 3rem);
        font-style: italic;
        color: ${props => props.theme.colors.tertiary};
        text-align: center;

        &:before {
            content: "";
            display: block;
            width: 50px;
            height: 5px;
            margin: 0 auto;
            background: ${props => props.theme.colors.primary};
        }
    }

    span {
        font-size: clamp(1rem, 1.15vw, 1.25rem);
        font-style: italic;
        color: ${props => props.theme.colors.tertiary};
    }
`;


export const GridAgents = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
`;
