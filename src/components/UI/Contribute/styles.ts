'use client';
import { styled } from 'styled-components';

export const Wrapper = styled.section`
  background: var(--primaryBlue);
  color: var(--white);
  padding: 8rem 2rem;
  position: relative;

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }
`;

export const Inner = styled.div`
  max-width: 1440px;
  width: 90%;
  margin: 0 auto;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 56rem;
  margin: 0 auto 6rem;

  h1 {
    font-size: 4.75rem;
    font-weight: 400;
  }

  @media (max-width: 768px) {
    margin-bottom: 4rem;
    h1 {
      font-size: 2.25rem;
    }
  }
`;

export const StepsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  position: relative;
  padding-top: 2rem;
  align-items: stretch;

  @media (max-width: 1024px) {
    gap: 2rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
    padding-top: 1.5rem;
  }
`;

export const StepCard = styled.div`
  position: relative;
  overflow: visible;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

export const CardContent = styled.div`
  position: relative;
  background: linear-gradient(
    135deg,
    rgba(27, 38, 59, 0.4) 0%,
    rgba(61, 84, 107, 0.3) 50%,
    rgba(33, 58, 85, 0.4) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  overflow: hidden;
  flex: 1;
  height: 100%;

  /* Shiny overlay that follows cursor */
  &::before {
    content: "";
    position: absolute;
    top: var(--y, 50%);
    left: var(--x, 50%);
    transform: translate(-50%, -50%);
    width: 70%;
    height: 70%;
    background: radial-gradient(
      circle at center,
      rgba(19, 51, 165, 0.60),
      transparent 60%
    );
    opacity: 0;
    transition: opacity 0.2s;
    pointer-events: none;
    z-index: 0;
  }

  &:hover {
    transform: translateY(-8px);
    border-color: rgba(255, 255, 255, 0.2);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);
    background: linear-gradient(
      135deg,
      rgba(27, 38, 59, 0.5) 0%,
      rgba(61, 84, 107, 0.4) 50%,
      rgba(33, 58, 85, 0.5) 100%
    );
  }

  &:hover::before {
    opacity: 1;
  }

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

export const StepNumber = styled.div`
  position: absolute;
  top: -1.5rem;
  left: 2rem;
  width: 3.5rem;
  height: 3.5rem;
  background: var(--primaryOrange);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--primaryBlue);
  border: 3px solid var(--primaryBlue);
  z-index: 2;

  @media (max-width: 768px) {
    width: 3rem;
    height: 3rem;
    font-size: 1.1rem;
    top: -1.25rem;
    left: 1.5rem;
  }
`;

export const StepHeading = styled.h3`
  font-size: 1.75rem;
  font-weight: 600;
  color: var(--white);
  margin: 1rem 0 0 0;
  line-height: 1.3;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const StepDescription = styled.p`
  color: #bdbdbd;
  font-size: 1.1rem;
  font-weight: 300;
  line-height: 1.7;
  margin: 0;
  flex-grow: 1;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const LearnMoreButton = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0.875rem 1.75rem;
  border-radius: 6.25rem;
  background: transparent;
  border: 1.5px solid rgba(255, 255, 255, 0.2);
  color: var(--white);
  font-size: 0.95rem;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  width: fit-content;
  margin-top: 0.5rem;
  position: relative;
  z-index: 1;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.4);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 0.75rem 1.5rem;
  }
`;

