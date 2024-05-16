import {
    mobile,
    backend,
    creator,
    food,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    github,
    figma,
    docker,
    meta,
    starbucks,
    wonderland,
    tmu,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    music,
    weather,
    java,
    python,
    c,
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
      title: "Linux Fundamentals Certificate (Coursera)",
      icon: web,
    },
    {
      title: "Google Foundations of Cybersecurity Certificate (Coursera)",
      icon: mobile,
    },
    {
      title: " Introduction to Microsoft Azure Cloud services certificate (Coursera)",
      icon: backend,
    },
    {
      title: "Student Access Guarantee Bursary(Winter 2024)",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "C",
      icon: c,
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    /*{
      name: "Redux Toolkit",
      icon: redux,
    },*/
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    /*{
      name: "Node JS",
      icon: nodejs,
    },*/
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    /*{
      name: "figma",
      icon: figma,
    },*/
    /*{
      name: "docker",
      icon: docker,
    },*/
  ];
  
  const experiences = [
    {
      title: "Line Cook",
      company_name: "Canada's Wonderland",
      icon: wonderland,
      iconBg: "#383E56",
      date: "November 2022 - December 2022",
      points: [
        "Followed proper food handling methods and maintained correct temperature of food products resulting in high scores on health food insepctions.",
        "Set up and performed initial prep work for food items such as soups , sauces and salads.",
        "Kept stations stocked and readt to use for maximum productivity.",
        "Organized and labeled stock of ingredients to maintain needed inventory levels.",
      ],
    },
    {
      title: "Private Tutor",
      company_name: "Self-employed",
      icon: tmu,
      iconBg: "#E6DEDD",
      date: "January 2023 - March 2023",
      points: [
        "Assisted twenty students with understanding the principles and fundamentals of Digital System design and Python, resulting in a 35% increase in their grades.",
        "Utilized interactive demonstrations and simulations to illustrate abstract concepts in digital systems design, fostering conceptual clarity and enhancing comprehension.",
        "Provided feedback and constructive criticism on student assignments and projects, fostering continuous improvement and academic excellence.",
        "Assisted students in debugging code and troubleshooting errors, fostering problem-solving skills and promoting a deeper understanding of programming concepts.",
      ],
    },
    /*{
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },*/
    /*{
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },*/
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
  
  const projects = [
    {
      name: "Food Management App",
      description:
        "Food management app that allows users to explore a vast array of recipes categorized by fruits and vegetables. Users can add recipes to a favorites section and customize browsing experience by changing the background of the website to their taste. ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "html",
          color: "pink-text-gradient",
        },
        {
          name: "context api",
          color: "blue-text-gradient",
        },
        {
          name: "spoonacular api",
          color: "green-text-gradient",
        },


      ],
      image: food,
      source_code_link: "https://github.com/golsamomeni/Food-Managing-App",
    },
    {
      name: "Audio App Simulator",
      description:
        "Leveraged OOP programming to create an audio app simulator where users can manage various audio content such as songs, podcasts and audiobooks.",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        /*{
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },*/
      ],
      image: music,
      source_code_link: "https://github.com/golsamomeni/Audio-app-simulator",
    },
    {
      name: "Weather App",
      description:
        "An interactive weather application that allows users to retreive weather data based on user-inputted zip-codes.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "OpenWeatherMap api",
          color: "green-text-gradient",
        },
        /*{
          name: "css",
          color: "pink-text-gradient",
        },*/
      ],
      image: weather,
      source_code_link: "https://github.com/golsamomeni/Weather-App",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  