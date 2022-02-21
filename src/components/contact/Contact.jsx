import React, { useRef, useState, useContext } from 'react';
import './contact.css';
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Address from "../../img/address.png"
import emailjs from 'emailjs-com';
import { ThemeContext } from '../../context';

const Contact = () => {
    const formRef = useRef();
    const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
    const [done,setDone] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_2f8k5zs',
                        'template_j4ajdhn', 
                        formRef.current, 
                        'user_ToA1RMQoAe19GzVcnEq9R')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
    }

  return (
    <div className='c'>
        <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">
                        Let's discuss your project
                    </h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={Phone} alt="" className='c-icon1' />
                            +91 96296 40828
                        </div>
                        <div className="c-info-item">
                            <img className="c-icon2" src={Email} alt="" />
                                contact@lama.dev
                        </div>
                        <div className="c-info-item">
                            <img className="c-icon3" src={Address} alt="" />
                                245 King Street, Touterie Victoria 8520 Australia
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>What's your story?</b> Get in touch. Always available for
                        freelancing if the right project comes along. me.
                    </p>
                <form ref={formRef}onSubmit={handleSubmit}>
                    <input style={{backgroundColor: darkMode && '#333'}} type="text" placeholder='Name' name="user_name" />
                    <input style={{backgroundColor: darkMode && '#333'}} type="text" placeholder='Subject' name="user_subject" />
                    <input style={{backgroundColor: darkMode && '#333'}} type="text" placeholder='Email' name="user_email" />
                    <textarea style={{backgroundColor: darkMode && '#333'}} rows="5" placeholder='Message' name= 'message'></textarea>
                    <button style= {{backgroundColor: darkMode && '#59b265'}}>Submit</button>
                    {done &&
                    <p>Thank you</p> 
                    }
                </form>
                </div>
            </div>
        
    </div>
  )
}

export default Contact