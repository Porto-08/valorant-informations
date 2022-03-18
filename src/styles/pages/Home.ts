import styled from 'styled-components';

export const Container = styled.main`
  width: 100vw;
  height: 100vh;

  background-size: cover;
  box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.5);

`

export const Introduction = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`

export const BackgroundImage = styled.div`
  width: 100%;
  height: 70vh;

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
    max-width: 60%;
  }

  button {
    border: none;


    font-size: clamp(1.25rem, 1.5vw, 1.5rem);
    color: ${props => props.theme.colors.text};
    background: ${props => props.theme.colors.primary};

    padding: 20px 30px;
    
    cursor: pointer;

    &:hover {
      background: ${props => props.theme.colors.background};
      color: ${props => props.theme.colors.primary};
    }
  }


`;
