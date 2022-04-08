import styled from 'styled-components';
import { fadeIn } from '../animations';

export const Container = styled.main`
  width: 100vw;
  background-size: cover;
  box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.5);

  
  animation: ${fadeIn} .7s ease;
`

export const Introduction = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`

export const BackgroundImage = styled.div`
  width: 100%;
  height: 87vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;

  background: url("/images/main-background.jpg") no-repeat center top;
  background-size: cover;
  box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.6);

  
  p {
    font-size: clamp(1rem, 1.5vw, 1.25rem);
    color: ${props => props.theme.colors.white};
    animation: ${fadeIn} .7s ease both .3s;
  }
  
  h1 {
    font-size: clamp(2.5rem, 5vw, 3.5rem);
    color: ${props => props.theme.colors.white};
    text-transform: uppercase;
    letter-spacing: 1.5px;
    animation: ${fadeIn} .7s ease both .5s;
  }

  button {
    animation: ${fadeIn} .7s ease both .7s;
  }

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const GridAbout = styled.section`
    display: grid;
    gap: 20px;
    padding: 30px;
    background: ${props => props.theme.colors.background};
    
    .grid {
      display: grid;
      justify-content: space-evenly;
      grid-template-columns: repeat(auto-fit, minmax(25rem, 500px));
      gap: 2.5rem;
      
      @media (max-width: 1366px) {
        grid-template-columns: repeat(auto-fit, minmax(25rem, 300px));
        gap: 1rem;
      }

      @media (max-width: 768px) {
        grid-template-columns: 1fr;
      }
    }

`;


