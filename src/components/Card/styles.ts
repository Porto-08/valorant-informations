import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    gap: 10px;

    box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.2);
    border-radius: 30px;
    padding: 1rem 1.5rem;

    min-height: 450px;
    background-color: ${props => props.theme.colors.text};


    img {
      width: 100%;
      height: 250px;
      border-radius: 10px;
      object-fit: cover;
    }

    h3 {
      font-size: clamp(1.5rem, 2vw, 1.25rem);
      color: ${props => props.theme.colors.tertiary};
      letter-spacing: 1.5px;

    }

    p {
      display: -webkit-box !important;

      font-size: clamp(.8rem, 1.5vw, 1rem);
      color: ${props => props.theme.colors.tertiary};
      letter-spacing: .5px;
      text-align: left;

      -webkit-line-clamp: 6;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: normal;
    }

`;