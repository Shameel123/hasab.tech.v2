'use client';
import { MaskText } from '@/components';
import Image from 'next/image';
import { useState } from 'react';
import { useIsMobile } from '../../../../libs/useIsMobile';
import ic_arrow_left from '../../../../public/svgs/ic_arrow_left.svg';
import ic_arrow_right from '../../../../public/svgs/ic_arrow_right.svg';
import { Props, desktopHeaderPhrase, testimonials } from './constants';
import {
  Avatar,
  Header,
  Inner,
  Name,
  Next,
  PaginationButtonContainer,
  Previous,
  Testimonial,
  TestimonialWrapper,
  Testimony,
  UserInfo,
  Wrapper,
} from './styles';

const MeetTheTeam = () => {
  const [testimonialsArr, setTestimonialsArr] = useState<Props[]>(testimonials);

  const next = () => {
    const newArr = [...testimonialsArr.slice(1), testimonialsArr[0]];
    setTestimonialsArr(newArr);
  };

  const previous = () => {
    const newArr = [
      ...testimonialsArr.slice(-1),
      ...testimonialsArr.slice(0, -1),
    ];
    setTestimonialsArr(newArr);
  };

  const isMobile = useIsMobile();

  const mappedTestimonials = isMobile
    ? testimonialsArr.slice(0, 1)
    : testimonialsArr.slice(0, 3);
  return (
    <Wrapper id='team'>
      <Inner>
        <Header>
          <MaskText phrases={desktopHeaderPhrase} tag="h1" />
        </Header>
        <TestimonialWrapper>
          {mappedTestimonials.map((t, i) => (
            <Testimonial key={i}>
              <Testimony>{t.testimony}</Testimony>
              <UserInfo>
                <Name>
                  <MaskText phrases={new Array(t.person)} tag="h3" />
                  <MaskText phrases={new Array(t.designation)} tag="h4" />
                  <a href={t.linkedin} target='_blank' rel='noopener noreferrer' style={{fontSize: '0.9rem', color: '#222222', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#005885" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                    </svg>
                    Visit LinkedIn
                  </a>
                </Name>
                <Avatar>
                  <Image src={t.avatar} alt="user avatar" />
                </Avatar>
              </UserInfo>
            </Testimonial>
          ))}
        </TestimonialWrapper>
        <PaginationButtonContainer>
          <Previous onClick={previous}>
            <Image src={ic_arrow_left} alt="arrow_left" />
          </Previous>
          <Next onClick={next}>
            <Image src={ic_arrow_right} alt="arrow_right" />
          </Next>
        </PaginationButtonContainer>
      </Inner>
    </Wrapper>
  );
};

export default MeetTheTeam;
