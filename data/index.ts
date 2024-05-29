export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I design and code beautifully simple things, and I love what I do. ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/about.jpg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Skills In Details",
    description: "",
    className: "md:col-span-3 md:row-span-2",
    // titleClassName: "justify-center md:justify-start",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Art Content sharing site",
    des: "Explore art worldwide, Engage with different Artist, Post Your art work. Show off You skills, Learn!",
    img: "creativity-nexus.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg",'fb.png', 'mongodb1.png' ],
    link: "https://creativitynexus.vercel.app/",
  },
  {
    id: 2,
    title: "Auth-Guard Show casing Authentication",
    des: "Simplify your Authentication with NextJS combined with Next-Auth",
    img: "AuthBridge.png",
    iconLists: ["/next.svg", "/tail.svg","/ts.svg", 'nextauth.png' ],
    link: "https://auth-guard.vercel.app/",
  },
  {
    id: 3,
    title: "Restaurant Landing Page ",
    des: "A responsive Restaurant Landing page using Vanilla CSS and bootstrap.",
    img: "/Foodhome.png",
    iconLists: ['html-5.png', 'css-3.png'],
    link: "https://foodpageall.ccbp.tech/",
  },
  {
    id: 4,
    title: "Summer Camp (Landing page)",
    des: "A visually appealing landing page using Tailwind CSS and it's classes.. ",
    img: "Camp.png",
    iconLists: ["/next.svg", "/tail.svg", ],
    link: "https://summer-camp-tour.vercel.app/",
  },
];



export const workExperience = [
  {
    id: 1,
    title: "Software Developer Executive",
    desc: "Designed system architecture, implemented functionality, created and maintained documentation, performed code reviews, optimized performance, and collaborated with cross-functional teams.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
    years: '2 Years'
  },
  {
    id: 2,
    title: "Frontend Developer",
    desc: "Collaborated cross-functionally to develop robust frontend solutions, migrated frontend from PHP to Next.js for enhanced user experience, integrated APIs, and conducted thorough testing to ensure seamless operations and improved client satisfaction.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
    years: '2 Years'
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: 'https://github.com/Deepakpradhan7'
  },
  
  {
    id: 3,
    img: "/link.svg",
    link: 'https://www.linkedin.com/in/deepak-pradhan7/'
  },
];
