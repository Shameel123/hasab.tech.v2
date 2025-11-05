'use client';
import MaskText from '@/components/Common/MaskText';
import {
    CardContent,
    Header,
    Inner,
    LearnMoreButton,
    StepCard,
    StepDescription,
    StepHeading,
    StepNumber,
    StepsContainer,
    Wrapper,
} from './styles';

const steps = [
  {
    number: '01',
    heading: 'Contribute as a Sponsor',
    description:
      'Empower aspiring developers by sponsoring their educational journey through our student fund. Your contribution helps bridge the gap between potential and opportunity.',
    link: 'https://forms.gle/tVmUynK88RFqopcX8',
  },
  {
    number: '02',
    heading: 'Contribute as a Mentor',
    description:
      'Share your expertise and guide the next generation of tech talent. Join our mentorship program and make a lasting impact on learners\' career development.',
    link: 'https://forms.gle/tVmUynK88RFqopcX8',
  },
  {
    number: '03',
    heading: 'Contribute as a Team Member',
    description:
      'Leverage your skills in development, design, social media, or other areas to help grow our mission. Become part of a team dedicated to transforming tech education.',
    link: 'https://forms.gle/tVmUynK88RFqopcX8',
  },
];

const Contribute = () => {
  return (
    <Wrapper id="contribute">
      <Inner>
        <Header>
          <MaskText phrases={['Want to contribute to hasabTech Education?']} tag="h1" />
        </Header>

        <StepsContainer>
          {steps.map((step, index) => (
            <StepCard key={index}>
              <StepNumber>{step.number}</StepNumber>
              <CardContent
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  e.currentTarget.style.setProperty('--x', `${x}px`);
                  e.currentTarget.style.setProperty('--y', `${y}px`);
                }}
              >
                <StepHeading>{step.heading}</StepHeading>
                <StepDescription>{step.description}</StepDescription>
                <LearnMoreButton href={step.link} target="_blank" rel="noopener noreferrer">I'm Interested!</LearnMoreButton>
              </CardContent>
            </StepCard>
          ))}
        </StepsContainer>
      </Inner>
    </Wrapper>
  );
};

export default Contribute;

