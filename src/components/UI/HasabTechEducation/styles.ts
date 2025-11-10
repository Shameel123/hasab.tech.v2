'use client';
import { Link as ScrollLink } from 'react-scroll';
import { styled } from 'styled-components';
import background_tech_girl from '../../../../public/images/9.jpg';

export const Wrapper = styled.section`
  position: relative;
  overflow: hidden;
  color: var(--white);
  padding: 8rem 2rem;
  background: url(${background_tech_girl.src}) center / cover fixed no-repeat;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.55) 0%,
      rgba(0, 0, 0, 0.45) 50%,
      rgba(0, 0, 0, 0.55) 100%
    );
    pointer-events: none;
    z-index: 0;
  }

  @media (max-width: 768px) {
    padding: 5rem 1.5rem;
    background-attachment: scroll;
  }
`;

export const Inner = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1000px;
  width: 90%;
  margin: 0 auto;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media (max-width: 768px) {
    min-height: 80vh;
  }
`;

export const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  z-index: 2;
  position: relative;
  max-width: 900px;
  margin: 0 auto;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h1 {
    font-size: 4.8rem;
    font-weight: 400;
    line-height: 1.15;
    color: var(--white);

    @media (max-width: 1024px) {
      font-size: 4rem;
    }

    @media (max-width: 768px) {
      font-size: 2.25rem;
    }
  }
`;

export const Tagline = styled.p`
  font-size: 1.25rem;
  font-weight: 400;
  color: var(--primaryOrange);
  margin-top: 0.25rem;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const IntroText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 0.25rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

  p, div {
    font-size: 1.25rem;
    font-weight: 300;
    line-height: 1.7;
    color: #bdbdbd; /* match other section descriptions */

    @media (max-width: 768px) {
      font-size: 1rem;
      line-height: 1.6;
    }
  }
`;

export const SupportText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 1rem;

  p {
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.7;
    color: #BDBDBD;

    @media (max-width: 768px) {
      font-size: 0.95rem;
      line-height: 1.6;
    }
  }
`;

export const CTASection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin-top: 0.75rem;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.75rem;
  }
`;

export const PrimaryCTA = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  border-radius: 6.25rem;
  background: var(--primaryOrange);
  color: var(--primaryBlue);
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  width: fit-content;

  &:hover {
    background: rgb(250, 138, 78);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(250, 138, 78, 0.3);
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 0.875rem 1.75rem;
  }
`;

export const PrimaryCTAScroll = styled(ScrollLink)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  border-radius: 6.25rem;
  background: var(--primaryOrange);
  color: var(--primaryBlue);
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  width: fit-content;

  &:hover {
    background: rgb(250, 138, 78);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(250, 138, 78, 0.3);
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 0.875rem 1.75rem;
  }
`;

export const SecondaryCTAs = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.75rem;
  }
`;

export const SecondaryCTA = styled.a`
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

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.4);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 200px;
    padding: 0.75rem 1.5rem;
  }
`;

export const ImageSection = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  border-radius: 1rem;
  overflow: hidden;
  z-index: 2;

  @media (max-width: 768px) {
    order: 1;
    height: 350px;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  overflow: hidden;
  background: linear-gradient(
    135deg,
    rgba(27, 38, 59, 0.3) 0%,
    rgba(61, 84, 107, 0.3) 50%,
    rgba(33, 58, 85, 0.3) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.1);

  img {
    object-fit: cover;
    opacity: 0.9;
  }
`;

export const LogoAccent = styled.div`
  position: absolute;
  top: 2rem;
  right: 2rem;
  opacity: 0.15;
  z-index: 1;
  pointer-events: none;

  @media (max-width: 768px) {
    top: 1rem;
    right: 1rem;
    opacity: 0.1;
  }
`;

export const BackgroundAccent = styled.div`
  position: absolute;
  top: -10rem;
  right: -10rem;
  width: 30rem;
  height: 30rem;
  background: radial-gradient(circle, rgba(250, 138, 78, 0.1) 0%, transparent 70%);
  border-radius: 50%;
  z-index: 0;
  pointer-events: none;

  @media (max-width: 768px) {
    width: 20rem;
    height: 20rem;
    top: -5rem;
    right: -5rem;
  }
`;

