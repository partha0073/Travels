import React from "react";
import { ImFacebook } from "react-icons/im";
import { SiYourtraveldottv } from "react-icons/si";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import "./footer.css";

function Footer() {
  return (
    <section className="footer">
      <div className="secContainer container grid">
        <div className="logoDiv">
          <div className="footerLogo">
            <a href="/" className="logo">
              <h1 className="flex">
                <SiYourtraveldottv className="icon" /> SR Travels
              </h1>
            </a>
          </div>
          <div className="socials flex">
            <ImFacebook className="icon" />
            <BsTwitter className="icon" />
            <AiFillInstagram className="icon" />
          </div>
        </div>
        {/* important links */}
        <div className="footerLinks">
          <span className="linkTitle">Helpful Links</span>
          <li>
            <a href="/">Destination</a>
          </li>
          <li>
            <a href="/">Support</a>
          </li>
          <li>
            <a href="/">Travel & Conditions</a>
          </li>
          <li>
            <a href="/">Privacy</a>
          </li>
        </div>
        {/* 2nd links */}
        <div className="footerLinks">
          <span className="linkTitle">Information</span>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Explore</a>
          </li>
          <li>
            <a href="/">Travel</a>
          </li>
          <li>
            <a href="/">Blog</a>
          </li>
        </div>
        {/* 3rd links */}
        <div className="footerLinks">
          <span className="linkTitle">Contact Us</span>
          <span className="phone">+91 7718704331</span>
          <span className="mail">parthapratimsharma43@gmail.com</span>
        </div>
      </div>
    </section>
  );
}

export default Footer;
