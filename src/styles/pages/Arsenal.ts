import { fadeIn } from './../animations';
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 20px;

    background: ${props => props.theme.colors.text};

    animation: ${fadeIn} .7s ease;
`;

export const GridArsenal = styled.div`
    display: grid;
    grid-template-columns: repeat(4, minmax(300px, 1fr));
    gap: 20px;
`;