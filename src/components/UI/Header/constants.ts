export const menu = {
  open: {
    width: '100vw',
    height: '100vh',
    top: '-1.71rem',
    borderRadius: '0',
    marginRight: '-1rem',
    right: 0,
    opacity: 1,
    transition: { duration: 0.6, type: 'tween', ease: [0.76, 0, 0.24, 1] },
  },

  closed: {
    width: '40px',
    height: '40px',
    top: '-1rem',
    right: '-4px',
    opacity: 0.9,
    borderRadius: '20px',
    marginRight: '0.1rem',
    transition: {
      duration: 0.6,
      type: 'tween',
      ease: [0.74, 0, 0.24, 1],
    },
  },
};


export const links = [
  {
    url: '#home',
    linkTo: 'Home',
  },
  {
    url: '#about',    
    linkTo: 'About',
  },
  {
    url: '#programs',  
    linkTo: 'Programs',
  },
  {
    url: '#community',
    linkTo: 'Community',
  },
  {
    url: '#resources',  
    linkTo: 'Resources',
  },
  {
    url: '#faqs',  
    linkTo: 'FAQs',
  },
];