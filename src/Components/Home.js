import React from 'react'
import profilepic from './images/dp pic new.jpg'



const Home = () => {
  return (
    <React.Fragment>
     

     <div className="main">

        <div className="para-container">

            <hr/>

            <div className="bio">

                I'm Santhosh, a <br/> <span style={{color:"#b2ff33"}} className='home-title'>Full-Stack developer</span>

            </div>

            <div className="desc">

            A Full Stack Developer with a passion for building <br/>web applications that are both in  front-end and<br/> back-end technologies, & I pride myself on being <br/>able to take on any challenge that comes my way. 

            </div>

            <br/>

            <div className="buttons">

                <div className="contact-me">
                   
                </div>

                

            </div>
        </div>

        <div className="portfolio-container">

            <div className="circle-background">

                <img src={profilepic} alt="Portfolio"  style={{width:'480px'}} />
            
            </div>
        </div>
    </div>


   </React.Fragment>
  
    
  )
}

export default Home