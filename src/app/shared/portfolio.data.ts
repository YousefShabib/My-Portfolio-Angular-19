export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  iconClass: string;
}

export interface ContactMethod {
  label: string;
  value: string;
  href?: string;
  iconClass: string;
  description: string;
}

export interface HeroStat {
  value: string;
  label: string;
}

export interface ExperienceEntry {
  role: string;
  organization: string;
  period: string;
  summary: string;
  bullets: readonly string[];
  logo?: string;
}

export interface EducationEntry {
  program: string;
  institution: string;
  period: string;
  details?: string;
  logo?: string;
}

export interface SkillGroup {
  title: string;
  iconClass: string;
  items: readonly string[];
}

export interface ProjectLink {
  label: string;
  url: string;
}

export interface ProjectEntry {
  title: string;
  period: string;
  category: string;
  summary: string;
  stack: readonly string[];
  highlights: readonly string[];
  links: readonly ProjectLink[];
  image?: string;
  imageAlt?: string;
  coverClass: string;
  iconClass: string;
}

export interface LeadershipEntry {
  role: string;
  organization: string;
  period: string;
  summary: string;
  bullets: readonly string[];
  iconClass: string;
  badge?: string;
}

export interface AwardEntry {
  title: string;
  organization: string;
  date: string;
  badge: string;
  summary: string;
  bullets: readonly string[];
  iconClass: string;
  accent: 'emerald' | 'amber' | 'violet';
}

export interface LanguageEntry {
  name: string;
  level: string;
  note?: string;
}

export interface CredentialEntry {
  title: string;
  issuer: string;
  date: string;
  link?: string;
  note?: string;
}

export const NAV_ITEMS: readonly NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Awards', href: '#awards' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contact', href: '#contact' }
] as const;

export const PORTFOLIO_CONTENT = {
  person: {
    name: 'Yousef Shabib',
    title: 'Frontend Developer · QA Engineer · UX/UI Designer',
    location: 'Nablus, Palestine',
    phone: '+970599776426',
    email: 'yousefshubib@gmail.com',
    summary:
      'Software Engineering student specializing in QA, frontend development, and UX/UI design. Delivers clean, efficient, and reliable software with strong attention to detail.',
    extendedSummary:
      'Known for adaptability, initiative, and building scalable, high-quality digital products.',
    resumeUrl:
      'https://drive.google.com/file/d/14NOzWeRmbclABPBLQ2eemEBIBZ1ms8Cn/view?usp=sharing',
    portfolioUrl: 'https://my-portfolio-angular-19.vercel.app/',
    githubUrl: 'https://github.com/YousefShabib',
    linkedinUrl: 'https://www.linkedin.com/in/yousef-shabib/'
  },
  hero: {
    eyebrow: 'QA · Frontend development · UX/UI design',
    headline: 'Building clean interfaces, reliable software, and scalable digital products.',
    description:
      'I combine frontend engineering, quality assurance, and UX thinking to deliver responsive products that are visually clear, technically solid, and easy to use.'
  },
  heroStats: [
    { value: '5', label: 'Featured projects' },
    { value: '3', label: 'Award wins' },
    { value: '20+', label: 'Tools & technologies' }
  ] as readonly HeroStat[],
  aboutParagraphs: [
    'I am a Software Engineering student specializing in QA, frontend development, and UX/UI design.',
    'My work spans React, React Native, Angular 19, Laravel APIs, automated testing, and Figma-based product design.',
    'Beyond code, I enjoy leadership, workshop facilitation, and team coordination that helps ideas become reliable, polished products.'
  ],
  strengths: [
    'Adaptability',
    'Leadership',
    'Teamwork',
    'Attention to detail',
    'Time management',
    'Continuous learning',
    'Working under pressure',
    'Problem solving'
  ],
  education: [
    {
      program: 'B.A. in Computer Science Apprenticeship - Software Engineering Specialization',
      institution: 'An-Najah National University',
      period: 'Expected Dec 2026',
      logo: 'assets/Najah.png'
    }
  ] as readonly EducationEntry[],
  experience: [
    {
      role: 'Frontend Developer',
      organization: 'Muhja - Student Company',
      period: 'Dec 2024 - Dec 2025',
      summary:
        'Developed responsive web interfaces using React while contributing to UX/UI design and project execution.',
      bullets: [
        'Developed responsive web interfaces using React for product features and user-facing pages.',
        'Contributed to UX/UI design decisions to improve usability and consistency across the platform.',
        'Supported project planning, task coordination, and team workflow management.'
      ],
      logo: 'assets/Muhjah.png'
    },
    {
      role: 'Frontend Intern',
      organization: 'Asal Technologies',
      period: 'Jul 2025 - Sep 2025',
      summary:
        'Trained on modern frontend development practices for responsive web applications.',
      bullets: [
        'Built responsive interfaces using HTML, CSS, SCSS, Tailwind CSS, Bootstrap 5, JavaScript, and React.',
        'Used Git and GitHub in daily development tasks while applying clean code and debugging practices.',
        'Applied modern frontend development practices through implementation and code refinement.'
      ],
      logo: 'assets/Asal.png'
    }
  ] as readonly ExperienceEntry[],
  skillGroups: [
    {
      title: 'Programming Languages',
      iconClass: 'fa-solid fa-code',
      items: ['JavaScript', 'TypeScript', 'PHP', 'Python', 'Java', 'C++', 'C', 'SQL']
    },
    {
      title: 'Frontend Development',
      iconClass: 'fa-solid fa-layer-group',
      items: ['React.js', 'React Native', 'Angular', 'HTML5', 'CSS3', 'SCSS', 'Tailwind CSS', 'Bootstrap', 'NativeWind']
    },
    {
      title: 'Backend Development',
      iconClass: 'fa-solid fa-server',
      items: ['Laravel', 'Node.js', 'RESTful APIs', 'MVC Architecture', 'Authentication', 'Authorization']
    },
    {
      title: 'Testing & APIs',
      iconClass: 'fa-solid fa-flask',
      items: ['Playwright', 'Cypress', 'Selenium', 'Appium', 'Postman', 'Manual Testing', 'Test Cases', 'Axios', 'Fetch API', 'JSON']
    },
    {
      title: 'Databases & Hosting',
      iconClass: 'fa-solid fa-database',
      items: ['MySQL', 'SQLite', 'MongoDB', 'Supabase', 'AWS', 'Vercel', 'GitHub Pages']
    },
    {
      title: 'Tools & Workflow',
      iconClass: 'fa-solid fa-pen-ruler',
      items: ['Git', 'GitHub', 'Vite', 'Webpack', 'Jira', 'Trello', 'Figma', 'Canva', 'Marketing', 'Event Organization', 'Public Relations', 'macOS', 'Windows']
    },
    {
      title: 'Soft Skills',
      iconClass: 'fa-solid fa-people-group',
      items: ['Adaptability', 'Leadership', 'Teamwork', 'Attention to detail', 'Problem solving']
    }
  ] as readonly SkillGroup[],
  projects: [
    {
      title: 'Lumixy Mobile App',
      period: 'Apr 2026',
      category: 'Service Marketplace Platform',
      summary:
        'Led development of a production-ready service marketplace mobile app with scalable React Native architecture and Laravel API integration.',
      stack: ['React Native', 'Expo', 'Laravel APIs', 'SQLite', 'MySQL', 'Axios', 'NativeWind CSS'],
      highlights: [
        'Delivered responsive Figma-based screens with a scalable component-based architecture.',
        'Integrated Camera, Location, Audio, WhatsApp, and phone provider contact flows.',
        'Managed task distribution, GitHub collaboration, code reviews, and merge management as Team Leader.'
      ],
      links: [
        {
          label: 'GitHub',
          url: 'https://github.com/YousefShabib'
        }
      ],
      coverClass: 'portfolio-cover',
      iconClass: 'fa-solid fa-mobile-screen-button'
    },
    {
      title: 'Playwright TypeScript E2E Framework',
      period: 'Sep 2025',
      category: 'QA Automation',
      summary:
        'Built a modular end-to-end test framework with Playwright and TypeScript for SauceDemo.',
      stack: ['Playwright', 'TypeScript', 'Dotenv', 'Cross-browser'],
      highlights: [
        'Automated login, checkout, cart, and sorting scenarios.',
        'Improved cross-browser stability through parameterized tests.',
        'Added secure configuration handling for cleaner test setup.'
      ],
      links: [
        {
          label: 'GitHub',
          url: 'https://github.com/YousefShabib/QA-Playright-Project'
        }
      ],
      coverClass: 'qa-cover',
      iconClass: 'fa-solid fa-vial-circle-check'
    },
    {
      title: 'Personal Portfolio Website',
      period: 'Jul 2025',
      category: 'Frontend Engineering',
      summary:
        'Developed a responsive portfolio with Angular 19, TypeScript, HTML, and CSS to showcase projects, skills, and experience.',
      stack: ['Angular 19', 'TypeScript', 'HTML', 'CSS'],
      highlights: [
        'Organized content around projects, skills, and experience.',
        'Focused on responsive layout and polished presentation.',
        'Used the site as a personal product showcase and live portfolio.'
      ],
      links: [
        {
          label: 'Live Demo',
          url: 'https://my-portfolio-angular-19.vercel.app/'
        }
      ],
      image: 'assets/Logo.png',
      imageAlt: 'Portfolio project preview',
      coverClass: 'portfolio-cover',
      iconClass: 'fa-solid fa-laptop-code'
    },
    {
      title: 'Online Clinical Booking System',
      period: 'June 2025',
      category: 'Full-Stack Web App',
      summary:
        'Developed a clinical booking platform with React, Laravel, and Supabase for role-based appointment scheduling.',
      stack: ['React', 'Laravel', 'Supabase', 'Figma'],
      highlights: [
        'Enabled role-based authentication and real-time data sync.',
        'Used Figma-driven UX/UI design to improve the booking journey.',
        'Delivered smooth frontend-backend integration for online appointments.'
      ],
      links: [
        {
          label: 'Live Demo',
          url: 'https://login-yousef-complete-ww5a.vercel.app/'
        }
      ],
      image: 'assets/web2.png',
      imageAlt: 'Clinical booking system preview',
      coverClass: 'clinical-cover',
      iconClass: 'fa-solid fa-notes-medical'
    },
    {
      title: 'Real Estate Management System',
      period: 'Jan 2025',
      category: 'Desktop Application',
      summary:
        'Created a JavaFX real estate management system with secure authentication, property search, and client management.',
      stack: ['JavaFX', 'MySQL', 'DAO Pattern', 'Figma'],
      highlights: [
        'Implemented property search, authentication, and client workflows.',
        'Used design patterns and GitHub-based collaboration effectively.',
        'Improved usability through Figma prototypes before development.'
      ],
      links: [
        {
          label: 'GitHub',
          url: 'https://github.com/YousefShabib/Real-Estate-Management-System'
        }
      ],
      image: 'assets/Realestate.png',
      imageAlt: 'Real estate management system preview',
      coverClass: 'estate-cover',
      iconClass: 'fa-solid fa-building'
    }
  ] as readonly ProjectEntry[],
  leadership: [
    {
      role: 'Public Relationship Team Head',
      organization: 'An-Najah Innovation Park Ambassadors',
      period: 'Nov 2025 - Present',
      summary: 'Leading public relations efforts and collaborative initiatives inside the ambassador program.',
      bullets: [
        'Supports community-facing communication and event coordination.',
        'Represents initiatives through organized outreach and relationship building.'
      ],
      iconClass: 'fa-solid fa-bullhorn',
      badge: 'Head'
    },
    {
      role: 'Administrative Board Member',
      organization: 'Google Developer Student Clubs (GDSC)',
      period: 'Oct 2025 - Present',
      summary: 'Administrative board member in the club, contributing across marketing, event organization, public relations, and video editing.',
      bullets: [
        'Organized events and supported outreach activities for the club.',
        'Built practical experience in marketing, event organization, and public relations.'
      ],
      iconClass: 'fa-brands fa-google',
      badge: 'Board'
    },
    {
      role: 'Instructor',
      organization: 'INJAZ Palestine',
      period: 'Feb 2025 - Apr 2026',
      summary:
        'Led and co-organized workshops on AI, algorithms, project management, and innovation for school and university students.',
      bullets: [
        'Helped students build innovation and practical project skills.',
        'Delivered sessions that made technical topics more approachable.'
      ],
      iconClass: 'fa-solid fa-graduation-cap',
      badge: 'Instructor'
    },
    {
      role: 'Frontend & UX/UI Contributor',
      organization: 'Muhja - Student Company Program',
      period: '2024 - 2025',
      summary:
        'Volunteered on frontend and UX/UI work while supporting project management and coordination with INJAZ Palestine.',
      bullets: [
        'Balanced product contribution with teamwork and operational support.',
        'Helped the student company move ideas into a stronger product experience.'
      ],
      iconClass: 'fa-regular fa-lightbulb'
    },
    {
      role: 'Community Service Volunteer',
      organization: 'Community Service Center, An-Najah National University',
      period: 'May 2025',
      summary:
        'Assisted with data entry and record digitization to improve accessibility and efficiency.',
      bullets: [
        'Improved information accessibility through digitized records.',
        'Supported smoother administrative workflows.'
      ],
      iconClass: 'fa-regular fa-heart'
    }
  ] as readonly LeadershipEntry[],
  awards: [
    {
      title: 'Green City Challenge',
      organization: 'Ramallah Municipality',
      date: 'Dec 2025',
      badge: 'Winner',
      summary:
        'Winning project for a scalable environmental digital solution enabling community-driven sustainability.',
      bullets: [
        'Developed a scalable digital solution for community-driven environmental action.',
        'Selected among all competing teams for impact and technical innovation.'
      ],
      iconClass: 'fa-regular fa-leaf',
      accent: 'emerald'
    },
    {
      title: 'Student Company Competition',
      organization: 'INJAZ Palestine',
      date: 'Jul 2025',
      badge: '1st in Palestine · 2nd among Arab universities',
      summary:
        'Won 1st place in Palestine and 2nd place among Arab universities for the Muhja project.',
      bullets: [
        '1st place in Palestine, recognized for innovation and product development.',
        '2nd place among Arab universities, marking strong regional impact.'
      ],
      iconClass: 'fa-solid fa-trophy',
      accent: 'amber'
    },
    {
      title: 'SPARK Launchpad with Google Hackathon',
      organization: 'Google · SPARK',
      date: 'Feb 2025',
      badge: '1st of 24 teams',
      summary:
        'Won 1st place among 24 teams for ThemeSolve, an AI-powered math learning platform.',
      bullets: [
        'Placed first among 24 competing teams at the hackathon.',
        'Served as UX/UI designer for an AI-powered personalized learning solution.'
      ],
      iconClass: 'fa-solid fa-bolt',
      accent: 'violet'
    }
  ] as readonly AwardEntry[],
  languages: [
    {
      name: 'Arabic',
      level: 'Native'
    },
    {
      name: 'English',
      level: 'CEFR B2 listening, reading, and speaking / B1 writing',
      note: 'Certificate available'
    }
  ] as readonly LanguageEntry[],
  credentials: [
    {
      title: 'Frontend Developer Nanodegree Program',
      issuer: 'Udacity',
      date: 'Nov 2025',
      note: 'Professional certification.'
    },
    {
      title: 'QA Manual Testing',
      issuer: 'Knowledge Academy',
      date: 'Nov 2025',
      note: 'Professional certification.'
    },
    {
      title: 'QA Automation Testing',
      issuer: 'Knowledge Academy',
      date: 'Feb 2026',
      note: 'Professional certification.'
    },
    {
      title: 'User Experience Nanodegree Program',
      issuer: 'Udacity',
      date: 'Jun 2026',
      note: 'Professional certification.'
    },
    {
      title: 'Full Stack Developer Nanodegree Program',
      issuer: 'Udacity',
      date: 'Jun 2026',
      note: 'Professional certification.'
    },
    {
      title: 'English CEFR Certificate',
      issuer: 'English Language Assessment',
      date: 'Referenced in CV',
      link: 'https://drive.google.com/file/d/1hxZja36ErYF9FYwPQnGN8K_GRk5SkCjt/view?usp=sharing'
    }
  ] as readonly CredentialEntry[],
  contactMethods: [
    {
      label: 'Phone',
      value: '+970 599 776 426',
      href: 'tel:+970599776426',
      iconClass: 'fa-solid fa-phone-volume',
      description: 'Available for freelance, internship, and collaboration conversations.'
    },
    {
      label: 'Email',
      value: 'yousefshubib@gmail.com',
      href: 'mailto:yousefshubib@gmail.com',
      iconClass: 'fa-solid fa-envelope-open-text',
      description: 'Best for project inquiries, portfolio feedback, and opportunity outreach.'
    },
    {
      label: 'Location',
      value: 'Nablus, Palestine',
      iconClass: 'fa-solid fa-location-dot',
      description: 'Open to remote collaboration and local opportunities.'
    },
    {
      label: 'GitHub',
      value: 'github.com/YousefShabib',
      href: 'https://github.com/YousefShabib',
      iconClass: 'fa-brands fa-github',
      description: 'Explore my open-source work and project repositories.'
    }
  ] as readonly ContactMethod[],
  socialLinks: [
    {
      label: 'GitHub',
      href: 'https://github.com/YousefShabib',
      iconClass: 'fa-brands fa-github'
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/yousef-shabib/',
      iconClass: 'fa-brands fa-linkedin-in'
    },
    {
      label: 'Email',
      href: 'mailto:yousefshubib@gmail.com',
      iconClass: 'fa-solid fa-envelope'
    },
    {
      label: 'Portfolio',
      href: 'https://my-portfolio-angular-19.vercel.app/',
      iconClass: 'fa-solid fa-globe'
    }
  ] as readonly SocialLink[]
} as const;
