import styled from 'styled-components';

export const Container = styled.main`
  width: 100vw;
  height: 100vh;

  background-size: cover;
  box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    height: 100vh;
  }

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

  
  h1 {
    font-size: clamp(2.5rem, 5vw, 3.5rem);
    color: ${props => props.theme.colors.text};
    text-transform: uppercase;
    letter-spacing: 1.5px;
  }

  p {
    font-size: clamp(1rem, 1.5vw, 1.25rem);
    color: ${props => props.theme.colors.text};
  }

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const GridAbout = styled.section`
    display: grid;
    gap: 20px;

    padding: 30px;
    background: ${props => props.theme.colors.text};

    h2 {
      text-align: center;
      font-size: clamp(2rem, 3vw, 3rem);
      color: ${props => props.theme.colors.background};

      &::before {
        content: "";
        display: block;
        width: 50px;
        height: 5px;
        background: ${props => props.theme.colors.primary};
        margin: 0 auto;
      }
    }

    p {
      text-align: center;
      font-size: clamp(.8rem, 1vw, 1rem);
      color: ${props => props.theme.colors.background};
    }

    .grid {
      display: grid;
      align-items: center;
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

export const Agents = styled.section`
  display: flex;
  width: 100%;
`;


export const AgentText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3rem;


  flex: 1;
  padding: 30px;
  background: ${props => props.theme.colors.tertiary};
  
  h2 {
    font-size: clamp(2rem, 5vw, 3rem);
    color: ${props => props.theme.colors.primary};
  }

  p {
    font-size: clamp(1rem, 1.5vw, 1.25rem);
    color: ${props => props.theme.colors.text};
    letter-spacing: 1px;
    
  }

`;

export const AgentImage = styled.div`
  flex: .8;
  background: url("https://media.valorant-api.com/agents/601dbbe7-43ce-be57-2a40-4abd24953621/background.png") no-repeat center center;
  background-color: ${props => props.theme.colors.primary};

  img {
    width: 100%;
    height: 600px;
    object-fit: contain;
  }
`;

export const GameModes = styled.section`
  display: flex;
  width: 100%;

`;

export const GameModesText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 3rem;

  flex: 1;
  padding: 30px;
  background: ${props => props.theme.colors.tertiary};

`;
