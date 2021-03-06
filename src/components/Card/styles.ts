import { fadeIn } from './../../styles/animations';
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    gap: 10px;

    box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.2);
    border-radius: 30px;
    padding: 1rem 1.5rem;

    min-height: 250px;
    height: 100%;
    background-color: ${props => props.theme.colors.background};

    animation: ${fadeIn} .7s ease both .7s;


    h3 {
      font-size: clamp(1.5rem, 2vw, 1.25rem);
      color: ${props => props.theme.colors.tertiary};
      letter-spacing: 1.5px
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

    img {
      min-height: 150px;
      max-height: 250px;
      object-fit: contain;
    }

    button {
      margin-top: 5px;
    }

    @media (max-width: 768px) {
      min-height: auto;
    }
`;