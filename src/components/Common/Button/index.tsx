import { LinkTo, ScrollLinkButton } from './styles';

interface ButtonProps {
  text: string;
  link: string;
  padding: string;
  openInNewTab?: boolean;
}

const Button = ({ padding, text, link, openInNewTab}: ButtonProps) => {
  // If it's a hash link and not opening in new tab, use smooth scroll
  const isHashLink = link.startsWith('#') && !openInNewTab;
  
  if (isHashLink) {
    return (
      <ScrollLinkButton
        to={link.replace('#', '')}
        smooth={true}
        offset={-10}
        duration={600}
        style={{
          padding: padding,
        }}
      >
        {text}
      </ScrollLinkButton>
    );
  }

  return (
    <LinkTo
      style={{
        padding: padding,
      }}
      href={link}
      target={openInNewTab ? '_blank' : '_self'}
      rel={openInNewTab ? 'noopener noreferrer' : ''}
    >
      {text}
    </LinkTo>
  );
};

export default Button;
