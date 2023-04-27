import React from 'react'

const About = () => {
  return (
    <>
    <section class="about" id="about">
    <div class="heading">
        <h2>About Me</h2>
        <span>Introduction</span>
    </div>

    <div class="about-container">
        <div class="about-img">
            <img src="main.png" alt=""/>
        </div>
        <div class="about-text">
            <p>Hi there! My name is Santhosh and I am a budding full-stack developer. I am passionate about coding and constantly exploring new technologies to improve my skills. When I'm not coding, you can find me on Insta,  or spending time with my Boys.</p>
            <div class="information">
                <div class="info-box">
                    <i class='bx bxs-user'></i>
                    <span>Santhosh</span>
                </div>

                <div class="info-box">
                    <i class='bx bxs-phone'></i>
                    <span>+91 95007 00601</span>
                </div>

                <div class="info-box">
                    <i class='bx bxs-envelope'></i>
                    <span>santhosh.mech.19@gmail.com</span>
                </div>
                <div class="info-box">
                    <i class='bx bxs-navigation'></i>
                    <span>linkedin.com/in/santhosh-kumar-palani-71760b261</span>
                </div>
            </div>
            <a href="#" class="btn">Download Cv</a>
        </div>
    </div>
</section>

    </>
  )
}

export default About