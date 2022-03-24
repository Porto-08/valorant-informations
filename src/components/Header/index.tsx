import React, { useEffect } from 'react';
import Link from 'next/link';
import { Container, Hamburger, NavBar } from './styles';
import { GiChaingun } from 'react-icons/gi';
import {VscChromeClose } from 'react-icons/vsc';
import AsideMenu from '../AsideMenu';
import { useState } from 'react';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const path = typeof window !== 'undefined' ? window.location.pathname : '';


  useEffect(() => {
    setIsOpen(false);
  }, [path]);

  return (
    <Container>
      <img src="#" alt="Valorant" />

      <NavBar>
        <Link href="/">Home</Link>
        <Link href="/agents">Agents</Link>
        <Link href="/maps">Maps</Link>
      </NavBar>

      <Hamburger type='button' onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <VscChromeClose size={20}/> : <GiChaingun size={20}/>}
      </Hamburger>

      {isOpen && <AsideMenu />}
    </Container>
  );
};

export default Header;
