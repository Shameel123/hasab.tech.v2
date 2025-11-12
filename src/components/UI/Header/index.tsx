'use client';

import AnimatedLink from '@/components/Common/AnimatedLink';
import Button from '@/components/Common/Button';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { useIsMobile } from '../../../../libs/useIsMobile';
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
  SubNavItemExternal,
  Wrapper
} from './styles';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [openSubNav, setOpenSubNav] = useState<string | null>(null);
  const isMobile = useIsMobile();
  
  const closeMenu = () => {
    setIsOpen(false);
    setOpenSubNav(null);
  };

  const toggleSubNav = (linkTo: string) => {
    if (isMobile) {
      setOpenSubNav(openSubNav === linkTo ? null : linkTo);
    }
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
          {links.map((link, i) => {
            const hasSubNav = ['Community', 'Resources'].includes(link.linkTo);
            const isSubNavVisible = isMobile 
              ? openSubNav === link.linkTo 
              : hoveredItem === link.linkTo;

            return (
              <NavItem
                key={i}
                className={hoveredItem === link.linkTo || openSubNav === link.linkTo ? 'active' : ''}
                onMouseEnter={() => !isMobile && setHoveredItem(link.linkTo)}
                onMouseLeave={() => !isMobile && setHoveredItem(null)}
              >
                <div>
                  <AnimatedLink
                    title={link.linkTo}
                    href={link.url}
                    disableNavigation={hasSubNav && isMobile}
                    onClick={hasSubNav && isMobile ? () => toggleSubNav(link.linkTo) : closeMenu}
                    offset={link.linkTo === 'FAQs' ? -100 : undefined}
                  />
                </div>

                {/* {link.linkTo === 'Programs' && isSubNavVisible && (
                  <SubNav
                    className={isMobile ? 'mobile-open' : ''}
                    onMouseEnter={() => !isMobile && setHoveredItem('Programs')}
                    onMouseLeave={() => !isMobile && setHoveredItem(null)}
                  >
                    <SubNavItemExternal
                      href="https://accelerator.hasab.tech/"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => {
                        setHoveredItem(null);
                        setOpenSubNav(null);
                        closeMenu();
                      }}
                    >
                      Career Accelerator Program
                    </SubNavItemExternal>
                    <SubNavItem to="programs" smooth={true} offset={-190} duration={600}>Mock Interviews & Prep Guides</SubNavItem>
                    <SubNavItem to="programs" smooth={true} offset={-190} duration={600}>Hackathons</SubNavItem>
                  </SubNav>
                )} */}

                {link.linkTo === 'Community' && isSubNavVisible && (
                  <SubNav
                    className={isMobile ? 'mobile-open' : ''}
                    onMouseEnter={() => !isMobile && setHoveredItem('Community')}
                    onMouseLeave={() => !isMobile && setHoveredItem(null)}
                  >
                    {/* <SubNavItem to="events" smooth={true} offset={-190} duration={600}>Events</SubNavItem> */}
                    <SubNavItemExternal
                      href="https://discord.gg/NEAymRPP"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => {
                        setHoveredItem(null);
                        setOpenSubNav(null);
                        closeMenu();
                      }}
                    >
                      Discord
                    </SubNavItemExternal>
                    <SubNavItemExternal
                      href="https://chat.whatsapp.com/LZ0CuvnovXnHF7xhwd9poD?mode=wwt"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => {
                        setHoveredItem(null);
                        setOpenSubNav(null);
                        closeMenu();
                      }}
                    >
                      WhatsApp
                    </SubNavItemExternal>
                  </SubNav>
                )}

                {link.linkTo === 'Resources' && isSubNavVisible && (
                  <SubNav
                    className={isMobile ? 'mobile-open' : ''}
                    onMouseEnter={() => !isMobile && setHoveredItem('Resources')}
                    onMouseLeave={() => !isMobile && setHoveredItem(null)}
                  >
                    <SubNavItemExternal
                      href="https://hashnode.com/@hasabtech"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => {
                        setHoveredItem(null);
                        setOpenSubNav(null);
                        closeMenu();
                      }}
                    >
                      Blogs
                    </SubNavItemExternal>
                    <SubNavItemExternal
                      href="https://www.youtube.com/@hasabTech"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => {
                        setHoveredItem(null);
                        setOpenSubNav(null);
                        closeMenu();
                      }}
                    >
                      Youtube
                    </SubNavItemExternal>
                  </SubNav>
                )}
              </NavItem>
            );
          })}
        </Nav>
        <CallToActions className={isOpen ? 'active' : ''}>
          <Button padding="0.5rem 0.75rem" text={'Get Involved!'} link={'#contribute'} />
        </CallToActions>
      </Inner>
    </Wrapper>
  );
};

export default Header;