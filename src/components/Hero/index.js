import React from 'react'

import { HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn } from './styles';

import Navbar from '../Navbar';

const Hero = () => {
  return (
    <HeroContainer>
      <Navbar/>
      <HeroContent>
        <HeroItems>
          <HeroH1>Greatest Pizza Ever</HeroH1>
          <HeroP>Ready in 60 seconds</HeroP>
          <HeroBtn>Place Order</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero;
