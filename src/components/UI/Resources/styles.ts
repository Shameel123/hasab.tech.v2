'use client';
import { styled } from 'styled-components';
import background_tech from '../../../../public/images/9.jpg';

export const Wrapper = styled.section`
  position: relative;
  overflow: hidden;
  color: var(--white);
  padding: 8rem 2rem;
  background: url(${background_tech.src}) center / cover fixed no-repeat;

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
  min-height: 55vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const Heading = styled.h1`
  font-size: 4.75rem;
  font-weight: 400;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.25rem;
  }
`;

export const Description = styled.p`
  margin-top: 0.75rem;
  max-width: 860px;
  color: #bdbdbd;
  font-size: 1.25rem;
  font-weight: 300;
  line-height: 1.7;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.25rem;
  width: 100%;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.a`
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.08);
  border-radius: 0.75rem;
  padding: 2rem;
  color: var(--white);
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.12);
    border-color: rgba(255, 255, 255, 0.3);
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  }
`;

export const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--white);
  margin: 0;
`;

export const CardIcon = styled.div`
  margin: 0.5rem 0;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 48px;
    height: 48px;
  }
`;

export const CardDescription = styled.p`
  color: #bdbdbd;
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.6;
  text-align: center;
  margin: 0;
`;


