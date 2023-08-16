import {
    // General
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,

  // Technologies
  bootstrap,
  css,
  django,
  git,
  html,
  javascript,
  mysql,
  nodejs,
  php,
  python,
  react,  
  tailwindcss, 

  // Companies
  wmu,
  tylogo,
  eoc,

  // Projects
  summarizer,
  designer,
  ecommerce,
  jarvis,
} from "../assets";
  
export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "experience",
      title: "Experience",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
    {
      id: "resume",
      title: "Resume",
    }
];
  
const services = [
    {
        title: "Computer Scientist",
        icon: web,
    },
    {
        title: "Python Developer",
        icon: mobile,
    },
    {
        title: "Web Developer",
        icon: backend,
    },
    {
        title: "Data Analyst",
        icon: creator,
    },
];
  
const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: react,
  },
  {
    name: "Tailwind CSS",
    icon: tailwindcss,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
];
  
const experiences = [
  {
      title: "B.S. in Computer Science",
      company_name: "Western Michigan University",
      icon: wmu,
      iconBg: "#E6DEDD",
      date: "Sept 2018 - June 2023",
      points: [
          "Coursework includes Data Structures, Algorithms, Web Development, Machine Learning, Secure Systems, and more.",
          "Acquired a comprehensive understanding of multiple programming languages and technical tools.",
          "Engaged in hands-on projects and assignments to apply theoretical knowledge in real-world scenarios.",
          "Fostered strong technical communication and project management skills through diverse coursework.",
      ],
  },
  {
      title: "Python Programming Tutor",
      company_name: "Freelance",
      icon: tylogo,
      iconBg: "#383E56",
      date: "June 2020 - July 2022",
      points: [
          "Provided tutorials and adaptive teaching to over 100 students, raising comprehension by 43%.",
          "Assisted students in development, debugging, and problem-solving.",
          "Promoted hands-on learning with real-world examples and hands-on tasks.",
      ],
  },
  {
      title: "Software Engineer Intern",
      company_name: "WMU College of Engineering and Applied Sciences",
      icon: wmu,
      iconBg: "#E6DEDD",
      date: "Aug 2022 - April 2023",
      points: [
          "Contributed to the design of an Industry 4.0 manufacturing simulation.",
          "Led the creation of a software suite managing over 20 processes.",
          "Engaged in an 18-member team, leveraging Agile, TDD, and SWOT Analysis.",
      ],
  },
  {
      title: "Software Engineer (Part-Time)",
      company_name: "Elley Orem Collection",
      icon: eoc, // This icon needs to be defined or replaced accordingly
      iconBg: "#383E56",
      date: "Jan 2021 - Present",
      points: [
          "Spearheaded the WordPress transition from B2B to B2C, amplifying consumer engagement by 50%.",
          "Implemented a dynamic storage solution, hastening data retrieval by 20%.",
          "Collaborated with design teams for software strategies and integrated React, Angular, and Django.",
      ],
  },
];

const projects = [
    {
      name: "AI Article Summarizer",
      description:
        "Innovative web application utilizing OpenAI's GPT model API to generate AI-powered summaries of lengthy articles, providing a user-friendly solution for rapid content digestion. The application also supports history tracking, allowing users to view their past summaries.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "redux",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: summarizer,
      source_code_link: "https://github.com/tylerterry23/AI-Article-Summarizer",
    },
    {
      name: "3D Product Designer",
      description:
        "This web application supports real-time customization of model attributes, including color changes, image uploads for logos and textures, AI-driven generation, and feature toggling. Users can also download their customized 3D designs, emphasizing the potential scope for a SaaS platform.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "threejs",
          color: "green-text-gradient",
        },
        {
          name: "dalle",
          color: "pink-text-gradient",
        },
      ],
      image: designer,
      source_code_link: "https://github.com/",
    },
    {
      name: "E-Commerce Website",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: ecommerce,
      source_code_link: "https://github.com/",
    },
    {
      name: "J.A.R.V.I.S. Inspired AI Assistant",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: jarvis,
      source_code_link: "https://github.com/",
    },
];
  
const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];
  

export { services, technologies, experiences, testimonials, projects };