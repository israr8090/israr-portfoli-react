import React from 'react';
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <>
      <div className="container contact" id="contact">
        <h1>CONTACT ME</h1>
        <div className="contact-icon" data-aos="zoom-in-up" data-aos-duration="1000" >
          <a href='mailto:erisrar0@gmail.com' target='_blank' className="items">
            <SiGmail className='icons' />
          </a>
          <a href='https://www.linkedin.com/in/md-israr/' target='_blank' className="items">
            <CiLinkedin className='icons' />
          </a>
          <a href='https://github.com/israr8090' target='_blank' className="items">
            <FaGithub className='icons' />
          </a>
          <a href='https://www.facebook.com/mdistata8090' target='_blank' className="items">
            <CiFacebook className='icons' />
          </a>

        </div>
      </div>
    </>
  )
}

export default Contact