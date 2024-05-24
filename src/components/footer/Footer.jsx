import React from 'react'
import "./Footer.css"
import { IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io5";

const Footer = () => {
  return (
    <footer>
      <div className="container footer__cont">
        <p className="footer__contacts">
          Finstreet 118 2561 Fintown <br /> Hello@finsweet.com 020 7993 2905
        </p>
        <div className="footer__social-wrapper">
          <IoLogoFacebook size={16} color="rgb(109, 110, 118)" />
          <IoLogoTwitter size={16} color="rgb(109, 110, 118)" />
          <IoLogoInstagram size={16} color="rgb(109, 110, 118)" />
          <IoLogoLinkedin size={16} color="rgb(109, 110, 118)" />
        </div>
      </div>
    </footer>
  );
}

export default Footer
