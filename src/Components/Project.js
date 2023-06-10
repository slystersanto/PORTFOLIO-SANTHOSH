import React from 'react';
import './project.css';

const Project = ({ title, description, image, technologies, liveLink, frontendCodeLink, backendCodeLink }) => {
  return (
    <div className="project">
      <h2>{title}</h2>
      <img src={image} alt={title} />
      <p>{description}</p>
      <ul>
        {technologies.map((technology, index) => (
          <li key={index}>{technology}</li>
        ))}
      </ul>
      <div className="buttons">
        <a href={liveLink} target="_blank" rel="noreferrer">
          <button>Live</button>
        </a>
        <a href={frontendCodeLink} target="_blank" rel="noreferrer">
          <button>Front-End </button>
        </a>
        <a href={backendCodeLink} target="_blank" rel="noreferrer">
          <button>Back-End </button>
        </a>
      </div>
    </div>
  );
};

export default Project;
