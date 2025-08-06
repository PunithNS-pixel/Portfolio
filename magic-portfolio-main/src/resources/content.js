import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Punith",
  lastName: "N S",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Aspiring SDE | Backend Developer | AI/ML & Data Science Enthusiast",

  email: "punithns26@gmail.com",
  location: "Asia/Kolkata", // IANA time zone identifier for India
  languages: ["English", "Kannada"], // optional: Leave the array empty if you don't want to display languages
  avatar: "/images/avatar.jpeg",
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about technology, AI/ML, and share thoughts on the intersection of
      data science and software engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/PunithNS-pixel",
  },
      {
      name: "LinkedIn",
      icon: "linkedin",
      link: "https://www.linkedin.com/in/punith-n-s-7115b9341",
    },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between data and code</>,
  featured: {
    display: true,
    title: <>Featured Project <strong className="ml-4">BloodLink</strong></>,
    href: "/work/bloodlink-platform",
  },
  subline: (
    <>
      I'm Punith, a passionate aspiring software engineer from Karnataka, India, where I craft scalable
      <br /> backend solutions and explore AI/ML technologies. After hours, I build innovative projects.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Punith is a Karnataka-based aspiring software development engineer with a passion for turning real-world problems into practical, scalable digital solutions. His work spans backend development, data science, and full-stack web technologies, combining clean code with a user-centric approach. He is deeply interested in the intersection of software engineering and intelligent systems.
      </>
    ),
  },
  work: {
    display: false,
    title: "Work Experience",
    experiences: [],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Siddaganga Institute of Technology",
        description: <>Bachelor of Engineering in Computer Science</>,
      },
      {
        name: "Self-Learning & Online Courses",
        description: <>Data Science, AI/ML, and Full-Stack Development</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical Skills",
    skills: [
      {
        title: "Programming Languages",
        description: <>Proficient in Python, JavaScript, TypeScript, and Java. Building scalable applications with modern development practices.</>,
        icons: ["python", "javascript", "java"],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Backend Development",
        description: <>Experience with Django, Flask, Spring Boot, and Node.js. Building robust APIs and server-side applications.</>,
        icons: ["django", "flask"],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Frontend Development",
        description: <>Modern web development with React, Next.js, HTML5, CSS3, and Tailwind CSS. Creating responsive and user-friendly interfaces.</>,
        icons: [ "nextjs", "html5", "css3", "tailwindcss"],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Databases & Cloud",
        description: <>Experience with SQL and NoSQL databases including MySQL, PostgreSQL, MongoDB. Cloud platforms like AWS, Google Cloud, and Firebase.</>,
        icons: ["mysql", "mongodb"],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Data Science & AI/ML",
        description: <>Proficient in data science tools including TensorFlow, PyTorch, Pandas, NumPy, and Scikit-learn. Building intelligent systems and data-driven solutions.</>,
        icons: ["tensorflow", "pytorch", "pandas", "numpy", "scikitlearn", "jupyter"],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Development Tools",
        description: <>Expertise with Git, Docker, VS Code, PyCharm, IntelliJ IDEA, and other development tools. Following best practices in software development.</>,
        icons: ["git", "vscode", "pycharm", "intellijidea"],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about AI/ML, tech, and data science...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Project Gallery – ${person.name}`,
  description: `A collection of my projects and work by ${person.name}`,
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "BloodLink Platform - Connecting blood banks and hospitals",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "Green Building Hackathon - IoT cigarette collection system",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "BGMI Vlog Site - Gaming content platform",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "Data Science and AI/ML Projects",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "Backend Development with Python and Java",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "Database Design and SQL Projects",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "Web Development with HTML, CSS, and Tailwind",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "Full-Stack Development Projects",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
