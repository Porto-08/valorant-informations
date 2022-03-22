import styled from "styled-components";

export const Container = styled.footer`
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: ${props => props.theme.colors.background};
    padding: 20px;


    a {
        color: ${props => props.theme.colors.primary};
        text-decoration: none;

        &:hover {
            color: ${props => props.theme.colors.text};
            text-decoration: underline;
        }
    }
`;