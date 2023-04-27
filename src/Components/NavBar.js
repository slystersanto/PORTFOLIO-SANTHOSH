import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [popupOpen, setPopupOpen] = useState(false);

  const handleContactButtonClick = () => {
    setPopupOpen(false);
  };

  const handleCloseButtonClick = () => {
    setPopupOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Form submitted successfully!');
    setPopupOpen(false);
  };

  return (
    <React.Fragment>
      <header>
        <nav className="navbar">
          <div className="logo">
            <Link to="/">
              <b style={{color:"#b2ff33"}}>• </b>SANTHOSH KUMAR PALANI
              <b style={{color:"#b2ff33;"}}> •</b>
            </Link>
          </div>

          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/skills">Skills</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contacts">Contacts</Link>
            </li>
          </ul>

          <div className="contact-btn">
            {/* <button className="contact-button" onClick={handleContactButtonClick}>
              Contact Me
            </button> */}
          </div>

          <div className="burger">
            <div className="link1"></div>
            <div className="link2"></div>
            <div className="link3"></div>
          </div>
        </nav>
        <div className="dark-overlay"></div>

        {popupOpen && (
          <div className="popup">

             <h2>Contact Me</h2> 

            <form onSubmit={handleSubmit}>

              <div className="form-row">

                <div className="form-group">

                  <div className="input-data">

                    <input type="text" name="name" id="name" required />
                    <div className="underline"></div>
                    <label htmlFor="name">Full Name</label>

                  </div>

                </div>

                <div className="form-group">

                  <div className="input-data">

                    <input type="email" name="email" id="email" required />
                    <div className="underline"></div>
                    <label htmlFor="email">Email Address</label>

                  </div>

                </div>
              </div>

              <div className="form-row">

                <div className="form-group">

                  <div className="input-data">

                    <input type="text" name="company" id="company" required />
                    <div className="underline"></div>
                    <label htmlFor="company">Company Name</label>

                  </div>

                </div>

                <div className="form-group">

                  <div className="input-data">

                    <input type="text" name="subject" id="subject" required />
                    <div className="underline"></div>
                    <label htmlFor="subject">Subject</label>

                  </div>

                </div>
              </div>

              <div className="form-row">

                <div className="form-group">

                  <div className="input-data">

                    <textarea id="message" name="message" rows="5" placeholder="Message" required></textarea>
                    <div className="underline"></div>

                  </div>

                </div>
              </div>

              <div className="form-row">

                <button className="primary-btn" type="submit">Send Message</button>
               

            </div>
          </form>
        </div>
        )}
      </header>
    </React.Fragment>
  );
};
export default NavBar;