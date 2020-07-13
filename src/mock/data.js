import { v4 as uuidv4 } from 'uuid';
import img1 from './project/facedetection.png'
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
  paragraphOne: 'Hello, my name is Yueheng Xiang, as known as Coco. I am passionate about website development and I see myself as a front end developer.',
  paragraphTwo: "I have competences of skill sets, varies from frontend techniques and tools HTML5, CSS3, bootstrap, JavaScript, ReactJS, React-native to backEnd C#, asp.net, sql server and more.",
  paragraphThree: "I've already created some projects during my study of certificate and diploma for almost a year that i just finished. I am a quick-learner, love problem solving, good at time management and love to learn new things.",
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv4(),
    img: 'facedetection.png',
    title: 'Face Detection',
    info: 'Face detection web application, verify the image through URL and auto detect the faces and predict ages, including login and register pages.',
    info2: 'By using Clarifai Api to create Face Detection, automatically recognize faces in the picture. Great for users who relies on demographic information to understand their customer.',
    url: 'https://coco-facedetection.netlify.app',
    repo: 'https://github.com/cocoxiang123/FaceDetection', // if no repo, the button will not show up
  },
  {
    id: uuidv4(),
    img: 'restaurant.png',
    title: 'BeanSean Restaurant',
    info: 'This project is a management system for BeanSean Restaurant. Customer could find informations on the website and register as member to make a reservation. ',
    info2: 'Authorized staff and manager could make reservation for customers, manage sittings and tables schedule, view monthly report and more functionallity.',
    url: 'https://t4rms.azurewebsites.net/',
    repo: 'https://github.com/cocoxiang123/BeanSeanRMS', // if no repo, the button will not show up
  },
  {
    id: uuidv4(),
    img: 'beachresort.png',
    title: 'Beach Resort',
    info: 'This project provides hotel informations for beach resort. It shows all the hotel rooms details for customer to choose what they want. Customer can search by room type, guests, price and choose specific feature.',
    info2: '',
    url: 'https://react-beach-resort-coco.netlify.app/',
    repo: 'https://github.com/cocoxiang123/Beachresort', // if no repo, the button will not show up
  },
  {
    id: uuidv4(),
    img: 'budgetcalculator.png',
    title: 'Daily Budget Calculator',
    info: 'Small project use local storage to store notes and calculator to manage your budget. It sums up all the expenses in the record. Notes can be edited and deleted as well. Friendly alert messages will pop up for operations.',
    info2: '',
    url: 'https://coco-dailycalculator.netlify.app/',
    repo: 'https://github.com/cocoxiang123/React-budgetCalculator', // if no repo, the button will not show up
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
