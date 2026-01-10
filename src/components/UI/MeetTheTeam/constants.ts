import { StaticImageData } from 'next/image';
import ammad_ahmad from '../../../../public/images/ammad.jpeg';
import munzah_shah from '../../../../public/images/munzah.jpeg';
import muzammil_Channa from '../../../../public/images/muzammil.png';
import shameel_uddin from '../../../../public/images/shameel.jpeg';


export type Props = {
  testimony: string;
  person: string;
  avatar: StaticImageData;
  designation: string;
  linkedin: string;
};

export const testimonials = [
  {
    testimony: "When we started hasabTech, our mission was to bridge the gap between ambition and opportunity in tech. Through our education platform, we're making tech education accessible and practical, focusing on building real skills that matter in the industry. Beyond education, we're dedicated to delivering exceptional services to our clients, ensuring quality solutions that drive success in their businesses.",
    person: 'Shameel Uddin',
    designation: 'Founder & CTO',
    linkedin: 'https://www.linkedin.com/in/shameeluddin/',
    avatar: shameel_uddin,
  },
  {
    testimony: "For me, hasabTech is about creating opportunities – opportunities for learners to grow, connect, and work on real-world projects that truly prepare them for what's ahead. Through our education platform, we're building a community that guides you step by step. Beyond education, we're committed to delivering exceptional services to our clients, ensuring quality and excellence in everything we do.",
    person: 'Munzah Shah',
    designation: 'Co-Founder & CEO',
    linkedin: 'https://www.linkedin.com/in/munzah-shah/',
    avatar: munzah_shah,
  },
  {
    testimony: "Behind every great learning experience is a team that cares. Our job at hasabTech is to make sure your journey is smooth, organized, and valuable. From managing our education programs to ensuring the quality of the content, client services, and our internal products, we're committed to making hasabTech a place you'll love coming back to. Your growth & success is our priority – and we take that seriously.",
    person: 'Ammad Ahmed',
    designation: 'COO',
    linkedin: 'https://www.linkedin.com/in/ammad-ahmed-7466a618b/',
    avatar: ammad_ahmad,
  },
  {
    testimony: "I started my journey as a learner at hasabTech, and I can personally vouch for the quality of our education program. The hands-on approach and real-world projects prepared me for the industry in ways that traditional learning couldn't. Now, as part of the team, I'm committed to ensuring that both our learners and clients receive the same exceptional quality services and performance that transformed my own career.",
    person: 'Muzammil Channa',
    designation: 'Trainer & Internal Team Developer',
    linkedin: 'https://www.linkedin.com/in/muzamil-ahmed-channa/',
    avatar: muzammil_Channa,
  },
];

export const desktopHeaderPhrase = ['Meet the people who', 'make it all work!'];
