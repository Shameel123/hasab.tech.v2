'use client';
import MaskText from '@/components/Common/MaskText';
import React, { useEffect, useState } from 'react';
import { useIsMobile } from '../../../../libs/useIsMobile';
import {
    desktopHeaderPhrases,
    desktopParagraphPhrase,
    mobileParagraphPhrase,
} from './constants';
import {
    Header,
    Inner,
    ProgramCard,
    ProgramsGrid,
    ToastClose,
    ToastContainer,
    ToastIcon,
    ToastMessage,
    Wrapper,
} from './styles';

const programs = [
  {
    title: "Career Accelerator Program",
    description: "Kickstart your career with structured guidance and mentorship.",
    status: "Active",
    icon: "🚀",
    link: "https://accelerator.hasab.tech/",
    isComingSoon: false
  },
  {
    title: "Mock Interviews & Prep Guides",
    description: "Practice with industry experts to ace your tech job interviews.",
    status: "Coming Soon",
    icon: "🌍",
    link: "#",
    isComingSoon: true
  },
  {
    title: "Hackathons",
    description: "Compete, collaborate, and showcase your skills.",
    status: "Coming Soon",
    icon: "💡",
    link: "#",
    isComingSoon: true
  },
];

const ProgramsSection = () => {
  const isMobile = useIsMobile();
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 4000); // Auto-dismiss after 4 seconds

      return () => clearTimeout(timer);
    }
  }, [showToast]);

  const handleShowToast = () => {
    setShowToast(true);
  };

  const handleCloseToast = () => {
    setShowToast(false);
  };

  return (
    <>
      <Wrapper id='programs'>
        <Inner>
          <Header>
            <MaskText phrases={desktopHeaderPhrases} tag="h1" />

            {isMobile ? (
              <MaskText phrases={mobileParagraphPhrase} tag="p" />
            ) : (
              <MaskText phrases={desktopParagraphPhrase} tag="p" />
            )}
          </Header>

          <ProgramsGrid>
            {programs.map((program, index) => {
              const isExternal = program.link?.startsWith('http');
              
              const handleCardClick = (e: React.MouseEvent) => {
                if (program.isComingSoon) {
                  e.preventDefault();
                  handleShowToast();
                }
              };

            if (program.isComingSoon) {
              return (
                <div
                  key={index}
                  onClick={handleCardClick}
                  style={{ textDecoration: 'none', display: 'block', color: 'inherit', cursor: 'pointer' }}
                >
                  <ProgramCard
                    onMouseMove={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const x = e.clientX - rect.left;
                      const y = e.clientY - rect.top;
                      e.currentTarget.style.setProperty("--x", `${x}px`);
                      e.currentTarget.style.setProperty("--y", `${y}px`);
                    }}
                  >
                    <div className="icon">{program.icon}</div>
                    <div className="title">{program.title}</div>
                    <div className="description">{program.description}</div>
                    <span
                      className={`status ${
                        program.status === "Active"
                          ? "active"
                          : program.status === "Planned"
                          ? "planned"
                          : "coming-soon"
                      }`}
                    >
                      {program.status}
                    </span>
                  </ProgramCard>
                </div>
              );
            }

            return (
              <a
                key={index}
                href={program.link}
                target={isExternal ? '_blank' : '_self'}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                style={{ textDecoration: 'none', display: 'block', color: 'inherit' }}
              >
                <ProgramCard
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    e.currentTarget.style.setProperty("--x", `${x}px`);
                    e.currentTarget.style.setProperty("--y", `${y}px`);
                  }}
                >
                  <div className="icon">{program.icon}</div>
                  <div className="title">{program.title}</div>
                  <div className="description">{program.description}</div>
                  <span
                    className={`status ${
                      program.status === "Active"
                        ? "active"
                        : program.status === "Planned"
                        ? "planned"
                        : "coming-soon"
                    }`}
                  >
                    {program.status}
                  </span>
                </ProgramCard>
              </a>
            );
          })}
        </ProgramsGrid>
      </Inner>
    </Wrapper>

    <ToastContainer $show={showToast}>
      <ToastIcon>⏳</ToastIcon>
      <ToastMessage>The following program will be launched soon, please stay tuned!</ToastMessage>
      <ToastClose onClick={handleCloseToast} aria-label="Close toast" />
    </ToastContainer>
    </>
  );
};

export default ProgramsSection;
