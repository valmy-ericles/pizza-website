import React from 'react';

import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from 'react-icons/fa';

import { 
  Container, 
  Wrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialLink,
} from './styles';

const Footer = () => {
  return (
    <Container>
      <Wrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">Pizza</SocialLogo>
            <SocialIcons>
              
              <SocialLink href="/" target="_blank" aria-label="Facebook" rel="noopener">
                <FaFacebook/>
              </SocialLink>

              <SocialLink href="/" target="_blank" aria-label="Instagram" rel="noopener">
                <FaInstagram/>
              </SocialLink>

              <SocialLink href="/" target="_blank" aria-label="Facebook" rel="noopener">
                <FaYoutube/>
              </SocialLink>

            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </Wrap>
    </Container>
  )
}

export default Footer;