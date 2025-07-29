import { NavLink, Project, Skill, SocialLink, Experience, Service } from '../types';
import { Code, PenTool, Layout as LayoutIcon, Server, Terminal, UserSquare2 } from 'lucide-react';

export const navLinks: NavLink[] = [
  {
    id: 'home',
    title: 'Home',
  },
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce application with cart functionality, user authentication, and payment processing.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: 'https://images.pexels.com/photos/3182837/pexels-photo-3182837.jpeg?auto=compress&cs=tinysrgb&w=1600',
    link: 'https://example.com',
    github: 'https://github.com',
  },
  {
    id: 2,
    title: 'AI Content Generator',
    description: 'Web app that uses machine learning to generate creative content based on user prompts.',
    tags: ['TypeScript', 'OpenAI API', 'Next.js', 'Tailwind CSS'],
    image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1600',
    link: 'https://example.com',
    github: 'https://github.com',
  },
  {
    id: 3,
    title: 'Real-Time Chat Application',
    description: 'Chat platform with instant messaging, rooms, and user authentication.',
    tags: ['React', 'Socket.io', 'Express', 'Firebase'],
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1600',
    link: 'https://example.com',
    github: 'https://github.com',
  },
  {
    id: 4,
    title: 'Personal Fitness Tracker',
    description: 'Mobile application for tracking workout routines, nutrition, and health metrics.',
    tags: ['React Native', 'Redux', 'Node.js', 'MongoDB'],
    image: 'https://images.pexels.com/photos/5538345/pexels-photo-5538345.jpeg?auto=compress&cs=tinysrgb&w=1600',
    link: 'https://example.com',
    github: 'https://github.com',
  },
];

export const skills: Skill[] = [
  { name: 'JavaScript', level: 90, color: '#F7DF1E' },
  { name: 'TypeScript', level: 85, color: '#3178C6' },
  { name: 'React.js', level: 92, color: '#61DAFB' },
  { name: 'Node.js', level: 88, color: '#339933' },
  { name: 'HTML/CSS', level: 95, color: '#E34F26' },
  { name: 'Next.js', level: 82, color: '#000000' },
  { name: 'MongoDB', level: 75, color: '#47A248' },
  { name: 'GIT', level: 70, color: '#FF9900' },
  { name: 'Docker', level: 65, color: '#2496ED' },
  { name: 'GITHUB', level: 78, color: '#E10098' },
];

export const socialLinks: SocialLink[] = [
  {
    id: 'github',
    icon: 'github',
    url: 'https://github.com/Shashank09012003',
  },
  {
    id: 'linkedin',
    icon: 'linkedin',
    url: 'https://www.linkedin.com/in/cs-shashank-sharma/',
  },
  {
    id: 'twitter',
    icon: 'twitter',
    url: 'https://x.com/Shashank8839',
  },
  {
    id: 'instagram',
    icon: 'instagram',
    url: 'https://www.instagram.com/__shashank09__/',
  },
];

export const experiences: Experience[] = [
  {
    title: 'MERN Stack Developement Trainee',
    company: 'Sheryians Coding School.',
    date: 'Jan 2025 - Present',
    description: '● Passionate about building user-friendly and scalable web applications, I am committed to mastering the MERN stack (MongoDB, Express.js, React, Node.js) and applying its principles to real-world projects.',
  },
  {
    title: 'Web Development Intern',
    company: 'Enosis Learning.',
    date: 'Feb 2024 - Sept 2024',
    description: '●	Collaborated with the development team to design and implement user interfaces using HTML, CSS, and JavaScript.Developed responsive web applications using React.',
  },
  {
    title: 'Web Developer Trainee',
    company: 'AlmaBetter.',
    date: 'May 2023 - Jan 2024',
    description: '●	Completed full-stack web development training including HTML, CSS, JavaScript, React, Node.js, and deployment.	Built and deployed several mini-projects, including a payment system.' 
  },
];

export const services: Service[] = [
  {
    title: 'Web Development',
    description: 'Creating responsive and performant web applications with modern frameworks and technologies.',
    icon: 'code',
  },
  {
    title: 'UI/UX Design',
    description: 'Designing intuitive user interfaces with a focus on user experience and accessibility.',
    icon: 'penTool',
  },
  {
    title: 'Frontend Architecture',
    description: 'Building scalable frontend architectures that support modern development practices.',
    icon: 'layoutIcon',
  },
  {
    title: 'Backend Integration',
    description: 'Integrating frontend applications with backend services and APIs for full-stack solutions.',
    icon: 'server',
  },
];

export const serviceIcons = {
  code: Code,
  penTool: PenTool,
  layoutIcon: LayoutIcon,
  server: Server,
  terminal: Terminal,
  userSquare2: UserSquare2,
};