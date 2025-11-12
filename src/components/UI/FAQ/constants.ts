type FAQItem = {
  question: string;
  answer: string;
};

export const desktopHeaderPhrase = ['Frequently asked', 'questions'];
export const mobileHeaderPhrase = ['Frequently', 'asked', 'questions'];
export const animate = {
  initial: {
    y: '100%',
    opacity: 0,
  },
  open: (i: number) => ({
    y: '0%',
    opacity: 1,
    transition: { duration: 1, delay: 0.1 * i, ease: [0.33, 1, 0.68, 1] },
  }),
};

export const faqData: FAQItem[] = [
  {
    question: 'What exactly is hasabTech about?',
    answer:
      'hasabTech is a tech company dedicated to bridging the gap between ambition and opportunity in the technology industry. We operate on two main fronts: our education platform, which makes tech education accessible and practical through hands-on learning and real-world projects, and our client services, where we deliver exceptional quality solutions that drive business success. Our mission is to create opportunities for learners to grow, connect, and build meaningful careers in tech, while also providing top-tier services to our clients. We believe in practical, applicable learning that prepares individuals for real industry challenges.',
  },
  {
    question: 'Is hasabTech Education and Career Accelerator Program the same?',
    answer:
      'No. hasabTech Education is a bigger umbrella initiative that includes various educational resources and programs, while the Career Accelerator Program is a specific program under this initiative designed to help individuals kickstart their careers and get their first in tech.',
  },
  {
    question: 'Why do you charge fee for your programs if this is a non-profit initiative?',
    answer:
      'The fees collected from the Career Accelerator Program are reinvested to cover essential operational costs such as learning materials, resources, platform development, and hosting. This allows us to maintain the quality of education and support provided to learners while ensuring the sustainability of the program. Being a non-profit means all funds are used for the initiative—not that it is personally funded.',
  },
  {
    question: 'How much Career Accelerator Program will cost me?',
    answer:
      'The fee of Career Accelerator Program is PKR 1000 per month. This fee covers all the resources, mentorship, and support provided throughout the program. However, we also offer financial aid options for those who may not be able to afford the full fee. Read more about our financial aid options on the Career Accelerator Program page.',
  },
  {
    question: 'Do you provide certifications?',
    answer:
      'Providing certifications depends on the specific program. For the Career Accelerator Program, we do provide a certificate of completion for each track that the participants successfully complete. However, for the study abroad guide programs, we do not provide any certifications as they are more informational and guidance-based.',
  },
  {
    question: 'Do you provide internships/jobs?',
    answer:
      'Yes! We offer internships to the learners who outperform in the program. We also have a dedicated team that helps you find job opportunities in the market. Additionally, interns who show exceptional performance in their internship tenure are provided with a job offer within our own team.',
  },
  {
    question: 'How do I join the hasabTech Education community?',
    answer: 'You can join via our official Discord and WhatsApp communities. All announcements, discussions, and Q&A sessions happen there. However, we are more focused on Discord in terms of running the Career Accelerator Program batches.'
  },
  {
    question: 'Can I contribute to hasabTech Education?',
    answer:
      'Absolutely! If you are an experienced developer or educator, you can volunteer as a mentor, create learning content for the community, or help us in building our internal products. Additionaly, you can also provide financial contributions by funding the fee of learners who cannot afford the monthly cost of our tracks. You can fill out our contributors form here: https://forms.gle/tVmUynK88RFqopcX8',
  },
  {
    question: 'How can I contact hasabTech for client services or other general inquiries?',
    answer: 'You may contact us via email at contact@hasab.tech',
  },
];
