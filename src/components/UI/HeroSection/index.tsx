'use client';
import Button from '@/components/Common/Button';
import MaskText from '@/components/Common/MaskText';
import Image from 'next/image';
import { useIsMobile } from '../../../../libs/useIsMobile';
import ic_chevron_right from '../../../../public/svgs/ic_chevron_right.svg';
import {
  mobileParagraphPhrases,
  mobilePhrases,
  paragraphPhrases,
  phrases,
} from './constants';
import { HeroTextContainer, Inner, Pill, Wrapper } from './styles';

const HeroSection = () => {
  const isMobile = useIsMobile();
  return (
    <Wrapper id='home'>
      <Inner>
        <Pill>
          <span>Building Software — and the People Who Build It.</span>
          <Image src={ic_chevron_right} alt="chevron-right" />
        </Pill>
        <HeroTextContainer>
          {isMobile ? (
            <>
              <MaskText phrases={mobilePhrases} tag="h1" />
              <MaskText phrases={mobileParagraphPhrases} tag="p" />
            </>
          ) : (
            <>
              <MaskText phrases={phrases} tag="h1" />
              <MaskText phrases={paragraphPhrases} tag="p" />
            </>
          )}
        </HeroTextContainer>
        <Button padding="1rem 2rem" text={'Explore Our Programs'} link={'#programs'} />
      </Inner>
    </Wrapper>
  );
};

export default HeroSection;
