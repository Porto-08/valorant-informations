import { fadeIn } from './animations';
import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
      width: 5px;
      height: 0;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.colors.primary};
    }

  }

  body {
    width: 100vw;
    height: 100vh;
    
    background: ${({ theme }) => theme.colors.secondaryBackground};
    color: ${({ theme }) => theme.colors.text};
    font: 400 16px "Poppins", sans-serif;
  }
  
`
