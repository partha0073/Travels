import React from "react";
import "./about.css";
import img from "../../Assets/card1.jpg";
import video from '../../Assets/video2.mp4';

function About() {
  return (
    <section className="about section">
      <div className="secContainer">
        <h2 className="title">Why HiKings?</h2>

        <div className="mainContent container grid">
          <div className="singleItem">
            <img src={img} alt="no img" />
            <h3>100+ Mountains</h3>
            <p>
              Research shows that a chance to break away from the normal rhythms
              of daily life reduces stress
            </p>
          </div>
        </div>

        <div className="videoCard container">
          <div className="cardContent grid">
            <div className="cardText">
              <h2>Wonderful House  experience in there!</h2>
              <p>
                The Adventure sub ranking is based on an 
                equally weighted average of scores from five country.
              </p>
            </div>
            <div className="cardVideo">
              <video src={video} autoPlay loop muted type="video/mp4"></video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
