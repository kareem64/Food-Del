/* eslint-disable no-unused-vars */
import React from 'react'
import { assets } from '../../assets/assets';
import './Footer.css'
const Footer = () => {
  return (
    <div className="footer" id='footer'>
      <div className="footer-contient">
        <div className="left-items">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut
            incidunt animi sint neque veniam odio itaque, possimus nesciunt,
            temporibus quis quisquam dolores hic. Voluptates perspiciatis
            debitis doloribus totam? Amet, ullam.
          </p>
          <div className="sochial-media-icon">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="midel-items">
          <h2>Company</h2>
          <li>Home</li>
          <li>About</li>
          <li>Delevery</li>
          <li>privacy policy</li>
        </div>
        <div className="right-items">
          <h2>Get In TOUCH</h2>
          <li>+02 0114151160</li>
          <li>contact@tomato.com</li>
        </div>
      </div>
      <hr/>
      <p className="copy-rights">
        copyrihts 2024 @ Tomato.com all rights rserved by tomata
      </p>
    </div>
  );
}

export default Footer
