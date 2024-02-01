import React from "react";
import "./homs.css";

function Home() {
  return (
    <section className="home">
      <div className="secContainer container">
        {/* home text */}
        <div className="homeText">
          <h1 className="title">Plane Your Trip With SR Travel </h1>

          <p className="subTitle">
            Travel to your favorite city with respectful of the environment!
          </p>

          <button className="btn">
            <a className="/">Explore Now</a>
          </button>
        </div>
      {/* home card */}
        <div className="homeCard grid">
          <div className="locationDiv">
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
