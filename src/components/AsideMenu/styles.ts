import { fadeInRight } from "src/styles/animations";
import styled from "styled-components";

export const Container = styled.aside`
    height: 100vh;
    width: 300px;
    margin: 85px 0 40px 0;

    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 20px;
    padding: 0 20px;
    
    position: fixed;
    top: 0;
    right: 0;
    z-index: 1;

    background-color: ${props => props.theme.colors.secondaryBackground};

    animation: ${fadeInRight} 0.5s ease;
    
    overflow: auto;

    a {
        color: ${props => props.theme.colors.primary};
        text-decoration: none;
        font-size: clamp(1rem, 2vw, 1.25rem);

        &:hover {
            color: ${props => props.theme.colors.text};
            text-decoration: underline;
        }
    }

    @media (max-width: 1366px) {
        margin: 80px 0 40px 0;
        padding-bottom: 100px;
    }
`;