import { v4 as uuidv4 } from 'uuid';
// HEAD DATA
export const headData = {
  title: 'Yueheng Xiang(Coco)', // e.g: 'Name | Developer'
  lang: 'En', // e.g: en, es, fr, jp
  description: 'Welcom to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Yueheng Xiang',
  subtitle: 'Welcome to my website.',
  cta: 'Know More',
};

// ABOUT DATA
export const aboutData = {
  img: 'profilea.jpg',
  paragraphOne:
    'Hello, my name is Yueheng Xiang, as known as Coco. I am passionate about website development and I see myself as a front end developer.',
  paragraphTwo:
    'I have competences of skill sets, varies from frontend techniques and tools HTML5, CSS3, bootstrap, JavaScript, ReactJS, React-native to backEnd C#, asp.net, sql server and more.',
  paragraphThree:
    "I've already created some projects during my study of certificate and diploma for almost a year that i just finished. I am a quick-learner, love problem solving, good at time management and love to learn new things.",
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv4(),
    img: 'miniProjects.png',
    title: 'Mini Projects',
    info:
      'Small projects built by using HTML, CSS, Vanilla JavaScript/React. Only for personal daily practise use.',
    info2:
      'List of mini projects varies from basic form validation, small games TicTacToe to apps fetching data from APIs.  ',
    url: 'https://cocoxiang123.github.io/mini_projects_portfolio/',
    repo: 'https://github.com/cocoxiang123/JS-mini-projects', // if no repo, the button will not show up
  },
  {
    id: uuidv4(),
    img: 'restaurant.png',
    title: 'BeanSean Restaurant',
    info:
      'This project is a management system for a restaurant. Staff and Customer can find informations on the website, login and register to manage or make a reservation. ',
    info2:
      'This is a full stack project used C# and Asp.net MVC web application through EF Core to connect to Microsoft SQL server.',
    url: 'https://t4rms.azurewebsites.net/',
    repo: 'https://github.com/cocoxiang123/BeanSeanRMS', // if no repo, the button will not show up
  },
  {
    id: uuidv4(),
    img: 'beachresort.png',
    title: 'Beach Resort',
    info:
      'This project provides hotel informations for beach resort. You can see hotel rooms detail and filter the list, search by room type, guests, price and choose specific feature.',
    info2:
      'The Project used Responsive web design, bootstrap and React. Including React Hooks, react router, etc.',
    url: 'https://react-beach-resort-coco.netlify.app/',
    repo: 'https://github.com/cocoxiang123/Beachresort', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'Contact me',
  email: 'xiangmoonlight@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv4(),
      name: 'github',
      url: 'https://github.com/cocoxiang123',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
