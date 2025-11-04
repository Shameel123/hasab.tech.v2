'use client';

import AnimatedLink from '@/components/Common/AnimatedLink';
import Button from '@/components/Common/Button';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import logo_white from '../../../../public/images/hasabtech-education-logo.png';
import ic_bars from '../../../../public/svgs/ic_bars.svg';
import { links, menu } from './constants';
import {
  BurgerMenu,
  CallToActions,
  Inner,
  LogoContainer,
  Nav,
  NavItem,
  SubNav,
  SubNavItem,
  Wrapper,
} from './styles';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  
  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleLinkClick = (href: any) => {
    // Close the menu
    closeMenu();
    
    // Handle smooth scrolling for hash links
    if (href.startsWith('#')) {
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // Small delay to allow menu to start closing
    }
  };

  return (
    <Wrapper>
      <Inner>
        <LogoContainer>
          <a href='/' aria-label="hasabtech_logo">
            <Image src={logo_white} alt="hasabtech_logo" priority width={140} />
          </a>
          <BurgerMenu onClick={() => setIsOpen(!isOpen)}>
            <motion.div
              variants={menu}
              animate={isOpen ? 'open' : 'closed'}
              initial="closed"
            ></motion.div>
            <Image src={ic_bars} alt="bars" />
          </BurgerMenu>
        </LogoContainer>
        <Nav
          className={isOpen ? 'active' : ''}
        >
          {links.map((link, i) => (
            <NavItem
              key={i}
              className={hoveredItem === link.linkTo ? 'active' : ''}
              onMouseEnter={() => setHoveredItem(link.linkTo)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div onClick={() => handleLinkClick(link.url)}>
                <AnimatedLink
                  title={link.linkTo}
                  href={link.url}
                  onClick={closeMenu}
                />
              </div>

              {link.linkTo === 'Programs' && hoveredItem === 'Programs' && (
                <SubNav
                  onMouseEnter={() => setHoveredItem('Programs')}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <SubNavItem href="#programs">Career Accelerator Program</SubNavItem>
                </SubNav>
              )}

              {link.linkTo === 'Community' && hoveredItem === 'Community' && (
                <SubNav
                  onMouseEnter={() => setHoveredItem('Community')}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <SubNavItem href="#events">Events</SubNavItem>
                  <SubNavItem href="#discord">Discord</SubNavItem>
                  <SubNavItem href="#whatsapp">WhatsApp</SubNavItem>
                </SubNav>
              )}

              {link.linkTo === 'Resources' && hoveredItem === 'Resources' && (
                <SubNav
                  onMouseEnter={() => setHoveredItem('Resources')}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <SubNavItem href="#blogs">Blogs</SubNavItem>
                  <SubNavItem href="#youtube">Youtube</SubNavItem>
                </SubNav>
              )}
            </NavItem>
          ))}
        </Nav>
        <CallToActions className={isOpen ? 'active' : ''}>
          <Button padding="0.5rem 0.75rem" text={'Get Involved!'} link={'https://forms.gle/kE3L55e7zsN1VZ3j9'} openInNewTab />
        </CallToActions>
      </Inner>
    </Wrapper>
  );
};

export default Header;