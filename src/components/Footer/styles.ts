import styled from "styled-components";

export const Container = styled.footer`
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: ${props => props.theme.colors.secondaryBackground};
    padding: 20px;

    p {
        font-size: clamp(.8rem, 1.15vw, 1.25rem);
        color: ${props => props.theme.colors.white};
    }

    a {
        color: ${props => props.theme.colors.primary};
        text-decoration: none;

        &:hover {
            color: ${props => props.theme.colors.secondary};
            text-decoration: underline;
        }
    }
`;