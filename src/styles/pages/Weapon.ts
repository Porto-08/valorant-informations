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

  h1 {
    font-size: clamp(2rem, 3vw, 3rem);
    color: ${props => props.theme.colors.tertiary};

    &:hover {
      color: ${props => props.theme.colors.primary};
    }
  }
`;

export const WeaponContent = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 20px;

  width: 100%;

  background-color: ${props => props.theme.colors.tertiary};
`;

export const WeaponContentSection = styled.article`
  display: flex;
  flex-direction: column;
  
  h2 {
    color: ${props => props.theme.colors.white};
    font-size: clamp(1.5rem, 2vw, 2.5rem);
  }


  .weapon-damage, .weapon-stats, .weapon-price {
    display: flex;
    gap: 30px;

    h3 {
      color: ${props => props.theme.colors.primary};
      font-size: clamp(1.25rem, 1.5vw, 2rem);
    }

    ul {
      list-style: none;
    }

    li {
      color: ${props => props.theme.colors.white};
      font-size: clamp(1rem, 1vw, 1.5rem);
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
    }

    span {
      color: ${props => props.theme.colors.white};
      font-size: clamp(1rem, 1vw, 1.5rem);
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