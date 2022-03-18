import styled from 'styled-components';


interface ContainerProps {
    background?: string;
    hoverBackground?: string;
    fontSize?: string;
    padding?: string;
}

export const Container = styled.button<ContainerProps>`
    border: none;


    font-size: ${props => props.fontSize || 'clamp(1rem, 1.5vw, 1.5rem)'};
    color: ${props => props.theme.colors.text};
    background: ${props => props.background || props.theme.colors.primary};

    padding: ${props => props.padding || '20px 30px'};

    cursor: pointer;

    &:hover {
        background: ${props => props.hoverBackground || props.theme.colors.background};
        color: ${props => props.theme.colors.primary};
    }
`;