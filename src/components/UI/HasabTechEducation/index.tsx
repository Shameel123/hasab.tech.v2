'use client';
import MaskText from '@/components/Common/MaskText';
import React from 'react';
import { useIsMobile } from '../../../../libs/useIsMobile';
import {
    desktopHeaderPhrases,
    desktopIntroPhrase,
    desktopTaglinePhrase,
    mobileHeaderPhrases,
    mobileIntroPhrase,
    mobileTaglinePhrase,
} from './constants';
import {
    CTASection,
    ContentSection,
    Header,
    Inner,
    IntroText,
    PrimaryCTA,
    SecondaryCTA,
    Tagline,
    Wrapper,
} from './styles';

const HasabTechEducation = () => {
  const isMobile = useIsMobile();

  return (
    <Wrapper id="education">
      <Inner>
        <ContentSection>
          <Header>
            {isMobile ? (
              <MaskText phrases={mobileHeaderPhrases} tag="h1" />
            ) : (
              <MaskText phrases={desktopHeaderPhrases} tag="h1" />
            )}
            <Tagline>
              {isMobile ? mobileTaglinePhrase[0] : desktopTaglinePhrase[0]}
            </Tagline>
          </Header>

          <IntroText>
            {isMobile ? (
              mobileIntroPhrase.map((text, index) => {
                if (text.includes('<br/>')) {
                  const parts = text.split('<br/>');
                  return (
                    <React.Fragment key={index}>
                      <p>{parts[0]}</p>
                      {parts[1] && <div><br></br>{parts[1]}</div>}
                    </React.Fragment>
                  );
                }
                return <p key={index}>{text}</p>;
              })
            ) : (
              desktopIntroPhrase.map((text, index) => {
                if (text.includes('<br/>')) {
                  const parts = text.split('<br/>');
                  return (
                    <React.Fragment key={index}>
                      <p>{parts[0]}</p>
                      {parts[1] && <div>{parts[1]}</div>}
                    </React.Fragment>
                  );
                }
                return <p key={index}>{text}</p>;
              })
            )}
          </IntroText>

          <CTASection>
            <PrimaryCTA href="#programs">
              Join the team
            </PrimaryCTA>
            <SecondaryCTA href="https://forms.gle/kE3L55e7zsN1VZ3j9" target="_blank" rel="noopener noreferrer">
              Apply Now!
            </SecondaryCTA>
          </CTASection>
        </ContentSection>

        {/* Background image is handled via CSS on Wrapper with overlay */}
      </Inner>
    </Wrapper>
  );
};

export default HasabTechEducation;

