import Link from 'next/link'
import React from 'react'
import { Container } from './styles'

const AsideMenu = () => {
  return (
    <Container role='aside'>
        <Link href="/agents">Agents</Link>
        <Link href="/arsenal">Arsenal</Link>
        <Link href="/maps">Maps</Link>
        {/* <Link href="/">Buddies</Link>
        <Link href="/">Bundles</Link>
        <Link href="/">Cerimonies</Link>
        <Link href="/">Competitive Tiers</Link>
        <Link href="/">Content Tiers</Link>
        <Link href="/">Contracts</Link>
        <Link href="/">Currencies</Link>
        <Link href="/">Events</Link> */}
        {/* <Link href="/">Game Modes</Link> */}
        {/* <Link href="/">Gear</Link>
        <Link href="/">Player Cards</Link>
        <Link href="/">Player Titles</Link>
        <Link href="/">Seasons</Link>
        <Link href="/">Sprays</Link>
        <Link href="/">Themes</Link>
      <Link href="/">Version</Link> */}
    </Container>
  )
}

export default AsideMenu