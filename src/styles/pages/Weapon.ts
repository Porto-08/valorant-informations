import { fadeIn } from './../animations';
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: ${props => props.theme.colors.tertiary};

`;

export const WeaponHeader = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  
  height: 50vh;
  padding: 10px 0 0 0;

  background-color: ${props => props.theme.colors.background};

  img {
    animation: ${fadeIn} .7s ease;
  }

  h1 {
    font-size: clamp(2.5rem, 3vw, 4rem);
    color: ${props => props.theme.colors.tertiary};
    animation: ${fadeIn} .7s ease both .3s;

    &:hover {
      color: ${props => props.theme.colors.primary};
    }
  }

  span {
    font-size: clamp(1rem, 1.5vw, 1.5rem);
  }


`;

export const WeaponContent = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 20px;

  width: 100%;
  background-color: ${props => props.theme.colors.tertiary};

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
  }

`;

export const WeaponContentSection = styled.article`
  display: flex;
  flex-direction: column;
  
  h2 {
    color: ${props => props.theme.colors.white};
    font-size: clamp(1.5rem, 2vw, 2.5rem);
    animation: ${fadeIn} .7s ease both .6s;
  }


  .weapon-damage, .weapon-stats, .weapon-price {
    display: flex;
    gap: 30px;

    h3 {
      color: ${props => props.theme.colors.primary};
      font-size: clamp(1rem, 1.25vw, 1.5rem);
      animation: ${fadeIn} .7s ease both .9s;
    }

    ul {
      list-style: none;
    }

    li {
      color: ${props => props.theme.colors.white};
      font-size: clamp(1rem, 1vw, 1.5rem);
      animation: ${fadeIn} .7s ease both 1.2s;
    }
  }

  .weapon-damage {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    @media (max-width: 768px) {
      grid-template-columns: repeat(3, 1fr);
      width: 100%;
      justify-content: space-around;
    }
  }
`;

export const WeaponSkins = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  
  .weapon-skin-title {
    padding: 20px;

    h2 {
      color: ${props => props.theme.colors.white};
      font-size: clamp(1.5rem, 2vw, 2.5rem);
      animation: ${fadeIn} .7s ease both 1.5s;
    }

    span {
      color: ${props => props.theme.colors.white};
      font-size: clamp(1rem, 1vw, 1.5rem);
      animation: ${fadeIn} .7s ease both 1.8s;
    }
  }
  

  .weapon-skin {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    color: ${props => props.theme.colors.white};
    margin: 20px;
    padding: 20px;

    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    border-radius: 10px;

    img {
      width: 100%;
      height: 300px;
      object-fit: contain;

      @media (max-width: 1366px) {
        height: 200px;
      }

      
    }
  }
`;