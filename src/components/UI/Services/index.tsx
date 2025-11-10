"use client";
import MaskText from '@/components/Common/MaskText';
import {
  Header,
  Inner,
  ProgramCard,
  ProgramsGrid,
  Wrapper,
} from '@/components/UI/Programs/styles';
import { styled } from 'styled-components';
import { useIsMobile } from '../../../../libs/useIsMobile';

const services = [
  {
    title: 'MVP Development',
    description:
      'Rapidly build and validate your product idea with a high-quality MVP.',
    status: 'Service',
    icon: '⚡',
  },
  {
    title: 'Custom Software Development',
    description:
      'End-to-end development of web, mobile and backend systems tailored to your needs.',
    status: 'Service',
    icon: '🛠️',
  },
  {
    title: 'Shopify Store and Apps Development',
    description:
      'Design, build and optimize Shopify stores and custom Shopify apps.',
    status: 'Service',
    icon: '🛒',
  },
  {
    title: 'Cloud Solutions',
    description:
      'Scalable, secure cloud architectures, CI/CD and DevOps best practices.',
    status: 'Service',
    icon: '☁️',
  },
  {
    title: 'UI/UX Designing',
    description:
      'User-centered product design with clean, modern and accessible interfaces.',
    status: 'Service',
    icon: '🎨',
  },
];

const ServicesSection = () => {
  const isMobile = useIsMobile();
  return (
    <Wrapper>
      <Inner style={{ marginTop: '7.5rem', marginBottom: isMobile ? '6rem' : '12rem' }}>
        <Header>
          <MaskText phrases={["Services We Provide"]} tag="h1" />
          {isMobile ? (
            <MaskText
              phrases={[
                'We help founders and teams ship fast with quality and scale.',
              ]}
              tag="p"
            />
          ) : (
            <MaskText
              phrases={[
                'From idea to production — we design, build and ship reliable software.',
              ]}
              tag="p"
            />
          )}
        </Header>

        <ProgramsGrid>
          {services.map((service, index) => (
            <ProgramCard
              key={index}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                e.currentTarget.style.setProperty('--x', `${x}px`);
                e.currentTarget.style.setProperty('--y', `${y}px`);
              }}
            >
              <div className="icon">{service.icon}</div>
              <div className="title">{service.title}</div>
              <div className="description">{service.description}</div>
              <span className={`status active`}>{service.status}</span>
            </ProgramCard>
          ))}
        </ProgramsGrid>

        <WhyWrapper>
          <h2 style={{
            color: 'var(--link-color)',
            fontSize: '1.25rem',
            fontWeight: 500,
            marginBottom: '2rem'
          }}>
            Why work with us?
          </h2>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {[
              'Team with 10+ years of experience',
              'Practice transparency with clients',
              'Cost and time efficient',
              'Longterm support and maintenance'
            ].map((label, i) => (
              <div
                key={i}
                style={{
                  border: '1px solid #2c3e50',
                  background: 'rgba(255, 255, 255, 0.04)',
                  borderRadius: '0.5rem',
                  padding: '0.75rem 1rem',
                  color: 'var(--link-color)',
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                {label}
              </div>
            ))}
            <div>
              <a
                href="mailto:contact@hasab.tech"
                style={{
                  display: 'inline-flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '0.75rem 1rem',
                  borderRadius: '6.25rem',
                  background: 'var(--primaryOrange)',
                  color: 'var(--primaryBlue)',
                  fontSize: '1rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                  cursor: 'pointer',
                  transition: 'background 0.25s ease, transform 0.2s ease, box-shadow 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgb(250, 138, 78)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 16px rgba(250, 138, 78, 0.35)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--primaryOrange)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                Discuss a project
              </a>
            </div>
          </div>
        </WhyWrapper>
      </Inner>
    </Wrapper>
  );
};

export default ServicesSection;

const WhyWrapper = styled.div`
  margin-top: 3rem;
  margin-left: 3.5rem;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;


