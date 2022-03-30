import styled from "styled-components";
import { fadeIn } from "../animations";

export const Container = styled.div`
    width: 100%;
    background-color: ${props => props.theme.colors.tertiary};
`;

export const HeaderAgent = styled.section`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 450px;

    background: ${props => props.theme.colors.primary};
    box-shadow: inset 0 0 0 330px rgba(0, 0, 0, 0.6);

    text-align: center;

    padding: 25px 0;

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;

        
    }

    img {
        height: 430px;
        object-fit: cover;
        
        animation: ${fadeIn} .7s ease;

        @media (max-width: 768px) {
            height: 300px;
        }
    }

    h1 {
        font-size: clamp(2.5rem, 5vw, 3rem);
        color: ${props => props.theme.colors.text};

        animation: ${fadeIn} .7s ease;
    }

    p {
        font-size: clamp(1rem, 2vw, 1rem);
        animation: ${fadeIn} .7s ease;
    }

    @media(max-width: 768px) {
        height: auto;
        flex-direction: column-reverse;
        gap: 2rem;

    }
`;

export const DescriptionAgent = styled.section`
    width: 100%;
    padding: 20px;

    display: flex;
    justify-content: center;
    gap: 2rem;

    
    max-width: 1280px;
    margin: 0 auto;

    div {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    h3 {
        font-size: clamp(1.5rem, 2vw, 2rem);
        color: ${props => props.theme.colors.primary};
        animation: ${fadeIn} .7s ease both .5s;
    }

    p {
        font-size: clamp(1rem, 2vw, 1rem);
        color: ${props => props.theme.colors.text};
        letter-spacing: .5px;
        animation: ${fadeIn} .7s ease both .6s;
    }

    @media(max-width: 768px) {
        flex-direction: column;
        gap: 2rem;
    }
`;

export const SkillsAgent = styled.section`
    width: 100%;
    padding: 20px;
    
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 20px;

    
    max-width: 1280px;
    margin: 0 auto;

    h3 {
        font-size: clamp(1.5rem, 2vw, 2rem);
        color: ${props => props.theme.colors.primary};
        animation: ${fadeIn} .7s ease both 1s;
    }

    h4 {
        animation: ${fadeIn} .7s ease both 1.4s;
    }

    img {
        animation: ${fadeIn} .7s ease both 1.4s;
    }

    p {
        font-size: clamp(1rem, 2vw, 1rem);
        color: ${props => props.theme.colors.text};
        letter-spacing: .5px;
        animation: ${fadeIn} .7s ease both 1.8s;
    }
`;

export const Skills = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    gap: 20px;

    @media(max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

export const Skill = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;

    > div {
        display: flex;
        align-items: flex-end;
        gap: 10px;

        h4 {
            font-size: clamp(1rem, 2vw, 1.15rem);
            color: ${props => props.theme.colors.text};
        }

        img {
            height: 25px;
        }
    }
`;