import React from 'react'
import about from '../Components/images/My project-1 (1).png';

const About = () => {
  return (
    <>
    <section className="about" id="about">
    <div className="heading-about">
        <h2>About Me</h2>
        <span>Introduction</span>
    </div>

    <div className="about-container">
        <div className="about-img">
            <img src={about} alt=""/>
        </div>
        <div className="about-text">
            <p>Hi there! My name is Santhosh and I am a budding full-stack developer. I am passionate about coding and constantly exploring new technologies to improve my skills. When I'm not coding, you can find me on Insta,  or spending time with my Boys.</p>
            <div className="information">
                <div className="info-box">
                    <i className='bx bxs-user'></i>
                    <span>Santhosh Kumar Palani</span>
                </div>

                <div className="info-box">
                    <i className='bx bxs-phone'></i>
                    <span>+91 95007 00601</span>
                </div>

                <div className="info-box">
                    <i className='bx bxs-envelope'></i>
                    <span>santhosh.mech.19@gmail.com</span>
                </div>
                <div className="info-box">
                    <i className='bx bxs-navigation'></i>
                    <a href="https://linkedin.com/in/santhosh-kumar-palani-71760b261 " target='_blank'>LinkedIn</a>
                </div>
                <div className="info-box">
                    <i className='bx bxs-navigation'></i>
                    <a href="https://linkedin.com/in/santhosh-kumar-palani-71760b261 " target='_blank'>Github</a>
                </div>
            </div>
            <a href="https://drive.google.com/file/d/1Yv7CV6BydJoaEdVpUlm-Imm51_SknE1x/view?usp=drive_link" className="btn">Download Cv</a>
        </div>
    </div>
</section>

    </>
  )
}

export default About