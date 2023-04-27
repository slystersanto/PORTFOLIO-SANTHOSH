import React from 'react'
import sandy from "../Assests/sandy.jpg"

const Home = () => {
  return (
    <React.Fragment>
     

     <div class="main">

        <div class="para-container">

            <hr/>

            <div class="bio">

                I'm Santhosh, a <br/> <span style={{color:"#b2ff33"}} className='home-title'>web developer</span>

            </div>

            <div class="desc">

            A Full Stack Developer with a passion for building <br/>web applications that are both in  front-end and<br/> back-end technologies, & I pride myself on being <br/>able to take on any challenge that comes my way. 

            </div>

            <br/>

            <div class="buttons">

                <div class="contact-me">
                    Download Cv
                </div>

                

            </div>
        </div>

        <div class="portfolio-container">

            <div class="circle-background">

                <img src={sandy} alt="Portfolio"  style={{width:'500px'}} />
            
            </div>
        </div>
    </div>


   </React.Fragment>
  
    
  )
}

export default Home