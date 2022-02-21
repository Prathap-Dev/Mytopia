import React from 'react'
import './about.css'
import award from '../../img/edx.png'
import award2 from '../../img/W3.png'

function About() {
  return (
    <div className='a'>
        <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
            <img src="https://images.pexels.com/photos/1540977/pexels-photo-1540977.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
             alt="" 
             className="a-img" />
             </div>
        </div>
        <div className="a-right">
            <h1 className='a-title'>About Me</h1>
            <p className='a-sub'>
            Dedicated and efficient full stack developer with 6 months experience as freelancer 
            in application layers, presentation layers, and databases. 
            exquisite in both F/E and B/E Development. 
            
            </p>
            <p className='a-desc'>
            Spearheaded successful projects done using MERN stack and FARM stack
            which helps my latency and
            increase effectiveness of database administrations. 
            Seeking to further improve HTML5 and CSS3 skills 
            as the future full stack developer. <div className='at this company'></div>
            </p>
            
            <div className="a-award">
                <img src= {award} alt="" className="a-award-img" />
                <div className="a-award-texts">
                    <h4 className='a-award-title'> Certified on HTML5, CSS , Javascript</h4>
                    <p className='a-award-desc'>
                    HTML provides the basic structure of sites.  
                     CSS is used to control presentation, formatting, and layout. 
                    JavaScript is used to control the behavior of different elements.
                    </p>
                </div>
            </div>
            <div className="a-award">
                <img src= {award2} alt="" className="a-award-img2" />
                <div className="a-award-texts">
                    <h4 className='a-award-title'> Certified on React, Nodejs , PHP and SQLi</h4>
                    <p className='a-award-desc'>
                    Reactjs is a library, which is only used to render the user-interfaces 
                    of your web. Nodejs is a runtime environment to handle 
                    data communication on the server-side.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About