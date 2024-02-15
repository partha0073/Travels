import React from "react";
import "./homs.css";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="home">
      <div className="secContainer container">
        {/* home text */}
        <div className="homeText">
          <h1 className="title" data-aos="fade-up">Plane Your Trip With SR Travel </h1>

          <p className="subTitle" data-aos="fade-up" data-aos-duration="2500">
            Travel to your favorite city with respectful of the environment!
          </p>

          <button className="btn" data-aos="fade-up" data-aos-duration="3000">
            <a href="/">Explore Now</a>
          </button>
        </div>
        {/* home card */}
        <div className="homeCard grid">
          <div className="locationDiv" >
            <label htmlFor="location">Location</label>
            <input type="text" placeholder="Dream Destination" />
          </div>

          <div className="distDiv">
            <label htmlFor="destination">Destination</label>
            <input type="text" placeholder="11/Meters" />
          </div>

          <div className="priceDiv">
            <label htmlFor="price">Price</label>
            <input type="number" placeholder="$150 -$500" />
          </div>

          <button className="btn">Search</button>
        </div>
      </div>
    </section>
  );
}

export default Home;
