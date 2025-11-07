'use client';
import { AboutContent, AboutText, AboutWrapper, QuotationMark } from './styles';

const About = () => {
  return (
    <AboutWrapper>
      <AboutContent>
        <QuotationMark>"</QuotationMark>
        <AboutText>
          <span style={{color: 'var(--primaryOrange)'}} id="about">hasabTech</span> a small but ambitious software studio focused on building meaningful digital products and scalable solutions along with giving back to the tech community. 
          <br></br><br></br> We’re a tight-knit team of 3–4 developers, designers, and <span style={{color: 'var(--primaryOrange)'}}>dreamers</span> working from different parts of Pakistan, united by one goal: to build <span style={{color: 'var(--primaryOrange)'}}>impactful software</span> and give back to the tech community in every way we can.
          <br></br><br></br> We believe in learning, building, and <span style={{color: 'var(--primaryOrange)'}}>growing together</span>.
        </AboutText>
      </AboutContent>
    </AboutWrapper>
  );
};

export default About;