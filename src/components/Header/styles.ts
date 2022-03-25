import { fadeIn } from './../../styles/animations';
import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: ${props => props.theme.colors.background};

  width: 100vw;
  padding: 30px 20px;

  position: sticky;
  top: 0;

  z-index: 3;

  animation: ${fadeIn} .6s ease;

  img {
    height: 100%;
    max-height: 60px;
    max-width: 100%;
    object-fit: cover;

    cursor: pointer;

    @media (max-width: 768px) {
      max-height: 40px;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 10px;
  }
`;

export const NavBar = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;

  a {
    text-decoration: none;
    letter-spacing: 1.5px;
    color: ${props => props.theme.colors.text};
    font-size: clamp(1rem, 1.15vw, 1.25rem);

    &:hover {
      color: ${props => props.theme.colors.primary};

      &::after {
        width: 100%;
      }
    }

    &::after {
      content: '';
      display: block;
      width: 0;
      height: 2px;
      background: ${props => props.theme.colors.primary};
      transition: width 0.2s ease-in-out;
    }

    &:active {
      color: ${props => props.theme.colors.primary};
    }
  }
`;

export const Hamburger = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  
  color: ${props => props.theme.colors.text};

  &:hover {
    color: ${props => props.theme.colors.primary};
  }

`
