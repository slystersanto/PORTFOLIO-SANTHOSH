import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';

const Skills = () => {
  return (
        <div className="skills-container">
          <div className="bars">
            <div className="bars-box">
              <h3>HTML</h3>
              <span>94%</span>
              <div className="light-bar"></div>
              <div className="percent-bar html-bar"></div>
              <FaHtml5 className="tech-icon" />
            </div>
            <div className="bars-box">
              <h3>CSS</h3>
              <span>84%</span>
              <div className="light-bar"></div>
              <div className="percent-bar css-bar"></div>
              <FaCss3Alt className="tech-icon" />
            </div>
            <div className="bars-box">
              <h3>JavaScript</h3>
              <span>94%</span>
              <div className="light-bar"></div>
              <div className="percent-bar js-bar"></div>
              <FaJs className="tech-icon" />
            </div>
            <div className="bars-box">
              <h3>React</h3>
              <span>80%</span>
              <div className="light-bar"></div>
              <div className="percent-bar react-bar"></div>
              <FaReact className="tech-icon" />
            </div>
            <div className="bars-box">
              <h3>Node.Js</h3>
              <span>80%</span>
              <div className="light-bar"></div>
              <div className="percent-bar node-bar"></div>
              <FaNodeJs className="tech-icon" />
            </div>
            <div className="bars-box">
              <h3>MongoDb</h3>
              <span>80%</span>
              <div className="light-bar"></div>
              <div className="percent-bar mongodb-bar"></div>
              <FaDatabase className="tech-icon" />
            </div>
          </div>
          <div className="skills-img"></div>
         
        </div>
      
 
  );
};

export default Skills;
