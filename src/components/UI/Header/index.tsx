'use client';

import AnimatedLink from '@/components/Common/AnimatedLink';
import Button from '@/components/Common/Button';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import logo_white from '../../../../public/images/logos/logo-white.gif';
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
  SubNavItemExternal,
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
                  offset={link.linkTo === 'FAQs' ? -100 : undefined}
                />
              </div>

              {link.linkTo === 'Programs' && hoveredItem === 'Programs' && (
                <SubNav
                  onMouseEnter={() => setHoveredItem('Programs')}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <SubNavItem 
                    to="programs"
                    smooth={true}
                    offset={-190}
                    duration={600}
                    onClick={() => setHoveredItem(null)}
                  >
                    Career Accelerator Program
                  </SubNavItem>
                  {/* <SubNavItem to="programs" smooth={true} offset={-190} duration={600}>Mock Interviews & Prep Guides</SubNavItem> */}
                  {/* <SubNavItem to="programs" smooth={true} offset={-190} duration={600}>Hackathons</SubNavItem> */}
                </SubNav>
              )}

              {link.linkTo === 'Community' && hoveredItem === 'Community' && (
                <SubNav
                  onMouseEnter={() => setHoveredItem('Community')}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {/* <SubNavItem to="events" smooth={true} offset={-190} duration={600}>Events</SubNavItem> */}
                  <SubNavItemExternal
                    href="https://discord.gg/NEAymRPP"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setHoveredItem(null)}
                  >
                    Discord
                  </SubNavItemExternal>
                  <SubNavItemExternal
                    href="https://chat.whatsapp.com/LZ0CuvnovXnHF7xhwd9poD?mode=wwt"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setHoveredItem(null)}
                  >
                    WhatsApp
                  </SubNavItemExternal>
                </SubNav>
              )}

              {link.linkTo === 'Resources' && hoveredItem === 'Resources' && (
                <SubNav
                  onMouseEnter={() => setHoveredItem('Resources')}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <SubNavItemExternal
                    href="https://hashnode.com/@hasabtech"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setHoveredItem(null)}
                  >
                    Blogs
                  </SubNavItemExternal>
                  <SubNavItemExternal
                    href="https://www.youtube.com/@hasabTech"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setHoveredItem(null)}
                  >
                    Youtube
                  </SubNavItemExternal>
                </SubNav>
              )}
            </NavItem>
          ))}
        </Nav>
        <CallToActions className={isOpen ? 'active' : ''}>
          <Button padding="0.5rem 0.75rem" text={'Get Involved!'} link={'#contribute'} />
        </CallToActions>
      </Inner>
    </Wrapper>
  );
};

export default Header;