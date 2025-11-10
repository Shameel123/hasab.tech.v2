'use client';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';
import { styled } from 'styled-components';

export const LinkTo = styled(Link)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 6.25rem;
  background: var(--primaryOrange);
  color: var(--primaryBlue);
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: background 0.25s ease, transform 0.2s ease, box-shadow 0.2s ease;

  /* Make sure it targets the <a> rendered by Next.js Link */
  & > a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: inherit;
  }

  &:hover {
    background:rgb(250, 138, 78);
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(250, 138, 78, 0.35);
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 200px;
  }
`;

export const ScrollLinkButton = styled(ScrollLink)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 6.25rem;
  background: var(--primaryOrange);
  color: var(--primaryBlue);
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: background 0.25s ease, transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    background:rgb(250, 138, 78);
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(250, 138, 78, 0.35);
  }

  @media (max-width: 768px) {
    width: 90%;
    max-width: 300px;
  }
`;
