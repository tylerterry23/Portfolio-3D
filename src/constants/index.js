import {
    // icons
    mobile,
    backend,
    creator,
    web,

    // technologies
    javascript,
    html,
    css,
    reactjs,
    python,
    tailwind,
    nodejs,
    git,
    mysql,
    threejs,

    // experiences
    wmu,
    tylogo,

    // projects
    summarizer,
    jobit,
    tripguide,
} from "../assets";
  
export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
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
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "MySQL",
      icon: mysql,
    },
];
  
const experiences = [
    {
        title: "B.A. in Computer Science",
        company_name: "Western Michigan University",
        icon: wmu,
        iconBg: "#383E56",
        date: "Sept 2018 - Aug 2023",
        points: [
        "Actively participated in code reviews, providing valuable feedback to enhance code quality and efficiency.",
        "Facilitated effective communication and coordination among team members from different departments and disciplines.",      
        "Completed projects and assignments with a high level of attention to detail and adherence to best practices.",
        "Demonstrated professionalism, reliability, and a strong commitment to delivering exceptional results consistently within tight deadlines.",
        ],
    },
    {
        title: "Software Engineer Intern",
        company_name: "WMU College of Engineering and Applied Sciences",
        icon: wmu,
        iconBg: "#E6DEDD",
        date: "Aug 2022 - April 2023",
        points: [
        "Led the development of a comprehensive, scalable live dashboard web application, encompassing a homepage, contributor page, and documentation page.",
        "Built a robust backend using Django and MySQL, ensuring efficient and secure CRUD operations, while also prioritizing a sleek, aesthetically pleasing, frontend.",
        "Contributed to and ensured smooth operation with the admin UI (Tkinter) and tablet interface (Java).",
        "Delivered web application on time and within budget, surpassing project objectives using Agile methodologies.",
        ],
    },
    {
        title: "Python Programming Tutor",
        company_name: "Freelance",
        icon: tylogo,
        iconBg: "#383E56",
        date: "Jan 2022 - Jan 2023",
        points: [
        "Delivered Python tutorials to a diverse student base, incorporating real-world examples, practical exercises, and advanced concepts.",
        "Assisted students in programming and troubleshooting, providing guidance and support to overcome challenges and improve skills.",
        "Convey complex programming concepts in a clear and understandable manner.",
        "Consistency expand my knowledge and exposure to different programming challenges and scenarios.",
        ],
    },
];

const projects = [
    {
      name: "AI Article Summarizer",
      description:
        "Innovative web application utilizing OpenAI's GPT model API to generate AI-powered summaries of lengthy articles, providing a user-friendly solution for rapid content digestion.",
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
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "AI Checkers",
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
      image: tripguide,
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