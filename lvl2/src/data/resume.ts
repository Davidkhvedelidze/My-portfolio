export interface SocialLink {
  label: string;
  href: string;
}

export interface Profile {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  summary: string;
  social: SocialLink[];
}

export interface HeroHighlight {
  title: string;
  subtitle: string;
}

export interface ProjectHighlight {
  name: string;
  stack: string[];
  highlights: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  projects: ProjectHighlight[];
}

export interface ProjectCaseStudy {
  name: string;
  description: string;
  stack: string[];
  impact: string;
}

export type SkillBuckets = Record<'expertise' | 'tooling' | 'design', string[]>;

export interface EducationItem {
  school: string;
  program: string;
  period: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
}

export interface Language {
  name: string;
  level: string;
}

export const heroHighlights: HeroHighlight[] = [
  {
    title: 'Impactful civic platforms',
    subtitle: 'Ship public services like POLICE.GE, PSH.GOV.GE, and SPS.GOV.GE with clarity and trust.'
  },
  {
    title: 'Motion-led storytelling',
    subtitle: 'Blend Framer Motion, GSAP, and Tailwind to craft accessible, animated product journeys.'
  },
  {
    title: 'Multi-platform delivery',
    subtitle: 'Build responsive web and React Native apps from Uber Eats clones to bespoke photo tools.'
  }
];

export const profile: Profile = {
  name: 'Davit Khvedelidze',
  title: 'Frontend Developer',
  location: 'Tbilisi, Georgia',
  email: 'davit.khvedelidze.11@gmail.com',
  phone: '+995 551 18 13 58',
  summary:
    'Frontend developer specializing in accessible, animated, and responsive web experiences across web and mobile platforms.',
  social: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/davit-khvedelidze' },
    { label: 'GitHub', href: 'https://github.com/DavitKhvedelidze' }
  ]
};

export const experience: ExperienceItem[] = [
  {
    company: 'Digital Governance Agency (Georgia)',
    role: 'React Developer',
    period: 'Jun 2023 - Present',
    projects: [
      {
        name: 'POLICE.GE',
        stack: ['Next.js', 'TypeScript', 'Tailwind', 'Valtio'],
        highlights: [
          'Delivered the public-facing website with accessible and responsive UI components.',
          'Integrated REST APIs to surface dynamic content across critical public services.',
          'Implemented Valtio for global state management enabling seamless content updates.'
        ]
      },
      {
        name: 'PSH.GOV.GE',
        stack: ['Next.js', 'TypeScript', 'Tailwind', 'Framer Motion'],
        highlights: [
          'Built the About and Statistics experiences to showcase agency impact.',
          'Crafted animated narratives using Framer Motion for engaging storytelling.',
          'Delivered responsive data visualizations for key metrics.'
        ]
      },
      {
        name: 'SPS.GOV.GE',
        stack: ['Next.js', 'TypeScript', 'Tailwind'],
        highlights: [
          'First production Next.js project establishing reusable UI foundations.',
          'Elevated design fidelity through modern layout systems and component APIs.'
        ]
      },
      {
        name: 'Signature Verification',
        stack: ['React', 'TypeScript', 'Tailwind'],
        highlights: [
          'Collaborated on confidential verification tooling leveraging complex API workflows.',
          'Built resilient components for navigating deeply nested data structures.'
        ]
      }
    ]
  }
];

export const projects: ProjectCaseStudy[] = [
  {
    name: 'Uber Eats App Clone',
    description:
      'React Native application replicating Uber Eats experiences with authentication, restaurant listings, and real-time order tracking.',
    stack: ['React Native', 'Firebase', 'Styled Components'],
    impact: 'Developed during Digital Institute coursework to strengthen mobile-first design principles.'
  },
  {
    name: 'First Mobile Photo Editor',
    description:
      'Cross-platform photo editing app providing cropping, emoji overlays, and filter effects from a unified codebase.',
    stack: ['React Native', 'Expo'],
    impact: 'Shipped to both iOS and Android to explore native device APIs and asset pipelines.'
  },
  {
    name: 'E-Commerce Platform',
    description:
      'Responsive storefront with shopping cart, authentication, and inventory synchronization.',
    stack: ['React', 'TypeScript', 'Firebase'],
    impact: 'Demonstrated end-to-end product thinking from UI to backend integrations.'
  }
];

export const skills: SkillBuckets = {
  expertise: ['TypeScript', 'React', 'Next.js', 'React Native', 'Tailwind CSS', 'Framer Motion', 'GSAP', 'Valtio'],
  tooling: ['Git', 'npm', 'Agile Delivery'],
  design: ['Accessibility', 'Responsive Design', 'Interaction Design']
};

export const education: EducationItem[] = [
  {
    school: 'Georgian Technical University',
    program: "Master's Degree in Progress",
    period: '2023 - Current'
  },
  {
    school: 'Digital Institute',
    program: 'React Native & Frontend Development Course',
    period: 'Dec 2022 - May 2023'
  },
  {
    school: 'Business and Technology University',
    program: 'Bachelor of Business Management',
    period: 'May 2022'
  }
];

export const certifications: Certification[] = [
  {
    name: 'Sales MBA',
    issuer: 'International Sales Institute',
    year: 'Jun 2022'
  },
  {
    name: 'Fundamentals of Digital Marketing',
    issuer: 'Google Digital Garage',
    year: 'Oct 2021'
  }
];

export const languages: Language[] = [
  { name: 'Georgian', level: 'Native' },
  { name: 'English', level: 'Professional working proficiency' },
  { name: 'Russian', level: 'Limited working proficiency' }
];
