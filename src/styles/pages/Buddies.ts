import styled from "styled-components";


export const Container = styled.div`
  width: 100%;
  padding: 40px 20px;
  background-color: ${props => props.theme.colors.white};
`;

export const GridBuddies = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;

  margin-top: 40px;
`;