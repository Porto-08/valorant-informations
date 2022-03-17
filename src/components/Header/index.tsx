import React from 'react';
import Link from 'next/link';
import { Container, Hamburger, NavBar } from './styles';
import { GiChaingun } from 'react-icons/gi';

const Header: React.FC = () => {
  return (
    <Container>
      <img src="#" alt="Valorant" />

      <NavBar>
        <Link href="/">Home</Link>
        <Link href="/">Agents</Link>
        <Link href="/">Game Modes</Link>
        <Link href="/">Maps</Link>
        <Link href="/">About</Link>
      </NavBar>

      <Hamburger type='button'>
        <GiChaingun />
      </Hamburger>
    </Container>
  );
};

export default Header;
