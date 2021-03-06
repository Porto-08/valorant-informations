import styled from "styled-components";

export const Container = styled.footer`
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;

    background-color: ${props => props.theme.colors.secondaryBackground};
    padding: 20px;

    position: relative;

    p, span {
        font-size: clamp(.8rem, 1.15vw, 1.25rem);
        color: ${props => props.theme.colors.white};
    }

    span {
        font-size: clamp(.7rem, 1vw, .9rem);
    
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