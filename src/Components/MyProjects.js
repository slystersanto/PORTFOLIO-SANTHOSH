import React from 'react';
import Project from "../Components/Project";
import "./project.css";
import project1image from "../Components/images/project1.png";
import project2image from '../Components/images/project2.png';
import project3image from '../Components/images/project3.png';
import project4image from '../Components/images/project4.png';
import project5image from '../Components/images/project5.png';
import project6image from '../Components/images/project6.png';

const MyProjects = () => {
  const projects = [
    {
      title: 'Dress suggestions for Women',
      description: 'A Daily Based Dress suggestions for women in all seasons.',
      image:project1image,
      technologies: ['MERN-Stack'],
      liveLink: 'https://precious-mermaid-2319d8.netlify.app',
      frontendCodeLink: 'https://github.com/slystersanto/CAPSTONE-FRONTEND',
      backendCodeLink: 'https://github.com/slystersanto/CAPSTONE-BACKEND',
    },
    {
      title: 'Contact Manager',
      description: 'Another project with CRUD Operations with search functionalities.',
      image: project2image,
      technologies: ['MERN-Stack'],
      liveLink: 'https://tranquil-mandazi-09da01.netlify.app',
      frontendCodeLink: 'https://github.com/slystersanto/CONTACT-MANAGER-FRONTEND',
      backendCodeLink: 'https://github.com/slystersanto/CONTACT-MANAGER-BACKEND',
    },
    {
      title: 'Trailer Tuber ',
      description: 'App that contains latest trending trailers with all respective needs',
      image: project3image,
      technologies: ['MERN-Stack'],
      liveLink: 'https://starlit-daifuku-a9577b.netlify.app',
      frontendCodeLink: 'https://github.com/slystersanto/MERN-MOVIE-APP-FRONTEND',
      backendCodeLink: 'https://github.com/slystersanto/MERN-MOVIE-APP-BACKEND',
    },
    {
      title: 'Money Minder',
      description: 'Money Minder makes easy to handle income and expenses with history.',
      image: project4image,
      technologies: ['MERN-Stack'],
      liveLink: 'https://bucolic-praline-12bc0a.netlify.app',
      frontendCodeLink: 'https://github.com/slystersanto/MERN-MONEY-TRACKER-FRONTEND',
      backendCodeLink: 'https://github.com/slystersanto/MERN-MONEY-TRACKER-BACKEND',
    },
    {
      title: 'Teacher & Student Portal with API',
      description: 'It is a app which is having the details of every student with access to their mentors.',
      image: project5image,
      technologies: ['Front-End React'],
      liveLink: 'https://euphonious-valkyrie-bfb149.netlify.app',
      frontendCodeLink: 'https://github.com/slystersanto/STUDENT-TEACHER-CRUD-API',
      backendCodeLink: 'https://github.com/slystersanto/STUDENT-TEACHER-CRUD-API',
    },
    {
      title: 'Library Management',
      description: 'Yet another project for library management for a reader and a librarian',
      image: project6image,
      technologies: ['Front-End React'],
      liveLink: 'https://warm-paletas-8a8efd.netlify.app',
      frontendCodeLink: 'https://github.com/slystersanto/React-Library-Management',
      backendCodeLink: 'https://github.com/slystersanto/React-Library-Management',
    },
    // Add more projects as needed
  ];

  return (
    <div>
     
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </div>
  );
};

export default MyProjects;
