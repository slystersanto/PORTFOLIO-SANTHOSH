import React from 'react';
import Project from "../Components/Project";
import "./project.css";
import project1image from "../Components/images/project1.png";
import project2image from '../Components/images/project2.png';
import project3image from '../Components/images/project3.png';
import project4image from '../Components/images/project4.png';
import project5image from '../Components/images/project5.png';
import project6image from '../Components/images/project6.png';
import project7 from "../Components/images/project7.png";
import project8 from "../Components/images/project8.png";
import project9 from "../Components/images/project9.png";

const MyProjects = () => {
  const projects = [
  
    {
      title: 'Sell N Buy',
      description: 'An app that provides buyer&seller to get product faster.',
      image: project7,
      technologies: ['MERN-Stack'],
      liveLink: 'https://sellnbuy-backend.onrender.com',
      frontendCodeLink: 'https://github.com/slystersanto/MERN-E-Commerce',
      backendCodeLink: 'https://github.com/slystersanto/MERN-E-Commerce',
    },
    {
      title: 'Multi Vendor E-Commerce',
      description: 'Complete E-commerce app with real time entity.',
      image: project8,
      technologies: ['MERN-Stack'],
      liveLink: 'https://effervescent-tulumba-cfa789.netlify.app',
      frontendCodeLink: 'https://github.com/slystersanto/MERN-Multi-vendor',
      backendCodeLink: 'https://github.com/slystersanto/MERN-Multi-vendor',
    },
   
    
    {
      title: 'Food Cart',
      description: 'Food deliver app that makes more fun and secured payments',
      image:project9,
      technologies: ['MERN-Stack'],
      liveLink: 'https://animated-mandazi-3a1de5.netlify.app',
      frontendCodeLink: 'https://github.com/slystersanto/Food-Kart-FrontEnd',
      backendCodeLink: 'https://github.com/slystersanto/Food-Kart-BackEnd',
    },
    {
      title: 'Money Minder',
      description: 'Money Minder makes easy to handle income and expenses with history.',
      image: project4image,
      technologies: ['MERN-Stack'],
      liveLink: 'https://mminder.netlify.app/',
      frontendCodeLink: 'https://github.com/slystersanto/MERN-MONEY-TRACKER-FRONTEND',
      backendCodeLink: 'https://github.com/slystersanto/MERN-MONEY-TRACKER-BACKEND',
    },
    {
      title: 'Contact Manager',
      description: 'App that contains to store all the user data including photos.',
      image:project2image,
      technologies: ['MERN-Stack'],
      liveLink: 'https://manger.netlify.app',
      frontendCodeLink: 'https://github.com/slystersanto/CONTACT-MANAGER-FRONTEND',
      backendCodeLink: 'https://github.com/slystersanto/CONTACT-MANAGER-BACKEND',
    },
    {
      title: 'Trailer Tuber ',
      description: 'App that contains latest trending trailers with all respective needs',
      image: project3image,
      technologies: ['MERN-Stack'],
      liveLink: 'https://tubertr.netlify.app/',
      frontendCodeLink: 'https://github.com/slystersanto/MERN-MOVIE-APP-FRONTEND',
      backendCodeLink: 'https://github.com/slystersanto/MERN-MOVIE-APP-BACKEND',
    },
    
    // Add more projects as needed
  ];

  return (
    <>
    <p className='credential-para'>Credentials:Email-user1@gmail.com</p>
    <p className='credential-para'>Credentials:Password-admin1234</p>
    <div>
     
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </div>
    </>
  );
};

export default MyProjects;
