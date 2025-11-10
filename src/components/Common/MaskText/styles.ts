'use client';
import { styled } from 'styled-components';

export const Body = styled.div`
  h1,
  p {
  }
`;

export const LineMask = styled.div`
  overflow: hidden;
  position: relative;
  padding-bottom: 0.15em;
  
  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
    line-height: 1.2;
    display: block;
    padding-bottom: 0.05em;
  }
`;
