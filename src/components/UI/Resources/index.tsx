'use client';
import { Card, CardDescription, CardIcon, Cards, CardTitle, Description, Heading, Inner, Wrapper } from './styles';

const ResourcesSection = () => {
  return (
    <Wrapper>
      <Inner>
        <Heading>Our Resources</Heading>
        <Description>
          We share what we already know and what we are learning.
        </Description>

        <Cards>
          <Card href="https://hasabtech.hashnode.dev" target="_blank" rel="noopener noreferrer">
            <CardTitle>Blogs</CardTitle>
            <CardIcon>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="48" height="48" fill="#265FF7">
                <path d="M99.7 235.1C52.8 281.1 52.8 358 99.7 404.9L235.6 540.8C281.6 587.7 358.5 587.7 405.4 540.8L541.3 404.9C588.2 358 588.2 281.1 541.3 235.1L405.4 99.2C358.5 52.3 281.6 52.3 235.6 99.2L99.7 235.1zM260 260.5C292.9 227.4 346.4 227.1 379.5 260C412.6 292.9 412.9 346.4 380 379.5C347.1 412.6 293.6 412.9 260.5 380C227.4 347.1 227.1 293.6 260 260.5z"/>
              </svg>
            </CardIcon>
            <CardDescription>
              Read our latest articles on tech, development practices, and industry insights.
            </CardDescription>
          </Card>
          <Card href="https://www.youtube.com/@hasabtech" target="_blank" rel="noopener noreferrer">
            <CardTitle>Youtube</CardTitle>
            <CardIcon>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="#FF0000" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </CardIcon>
            <CardDescription>
              Watch tutorials, walkthroughs, and latest tech trends on our YouTube channel.
            </CardDescription>
          </Card>
        </Cards>
      </Inner>
    </Wrapper>
  );
};

export default ResourcesSection;


