import React from 'react';
import Link from 'next/link';
import { Container, Hamburger, NavBar } from './styles';
import { GiChaingun } from 'react-icons/gi';
import {VscChromeClose } from 'react-icons/vsc';

interface Props {
  openMenu: () => void;
  isOpen: boolean;
}

const Header = ({ openMenu, isOpen }: Props) => {
  return (
    <Container>
      <img src="#" alt="Valorant" />

      <NavBar>
        <Link href="/">Home</Link>
        <Link href="/">Agents</Link>
        <Link href="/">Game Modes</Link>
      </NavBar>

      <Hamburger type='button' onClick={openMenu}>
        {isOpen ? <VscChromeClose size={20}/> : <GiChaingun size={20}/>}
      </Hamburger>
    </Container>
  );
};

export default Header;
