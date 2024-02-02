import React from "react";
import "./popular.css";
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import { BsDot } from "react-icons/bs";
import img from '../../Assets/card1.jpg'


function Popular() {
  return (
    <section className="popular section container">
      <div className="secContainer">
        <div className="secHeader flex">
          <div className="textDiv">
            <h2 className="secTitle">Popular Destination</h2>
            <p>
              From historical cities to natural spectaculars, come see the best
              of the world!
            </p>
          </div>

          <div className="iconsDiv flex">
            <BsArrowLeftShort className="icon leftIcon" />
            <BsArrowRightShort className="icon" />
          </div>
        </div>

        <div className="mainContent grid">
          <div className="singleDestination">
            <div className="destImage">
              <img src={img} alt="card title" />

              <div className="overlayInfo">
                <h3>Some text</h3>
                <p>lorem ipsum dolor sit amet.</p>

                <BsArrowRightShort className="icon" />

              </div>

            </div>
            <div className="destFooter">
              <div className="number">01</div>
              <div className="destText flex">
                <h6>London</h6>
                <span className="flex">
                  <span className="dot">
                  <BsDot className="icon"/>


                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Popular;
