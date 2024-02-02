import React from "react";
import "./popular.css";
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import { BsDot } from "react-icons/bs";
import img from "../../Assets/card1.jpg";
// import card images
import img1 from "../../Assets/paris.jpg";
import img2 from "../../Assets/sikkim.jpg";
import img3 from "../../Assets/Tokyo.jpg";
import img4 from "../../Assets/Rio de Janeiro.jpg";

function Popular() {
  const data = [
    {
      id: 1,
      imgSrc: img1,
      destTitle: "Paris",
      location: "France",
      grade: "ROMANTIC",
    },
    {
      id: 2,
      imgSrc: img2,
      destTitle: "Sikkim",
      location: "India",
      grade: "CULTURAL RELAX",
    },
    {
      id: 3,
      imgSrc: img3,
      destTitle: "Tokyo",
      location: "Japan",
      grade: "METROPOLITAN ADVENTURE",
    },
    {
      id: 4,
      imgSrc: img4,
      destTitle: "Rio de Janeiro",
      location: "Brazil",
      grade: "BEACH ESCAPE",
    },
  ];

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
          {data.map(({id,imgSrc,destTitle,location,grade}) => {
            return (
              <div className="singleDestination">
                <div className="destImage">
                  <img src={imgSrc} alt="card title" />

                  <div className="overlayInfo">
                    <h3>{destTitle}</h3>
                    <p>{location}</p>

                    <BsArrowRightShort className="icon" />
                  </div>
                </div>
                <div className="destFooter">
                  <div className="number">0{id}</div>
                  <div className="destTitle flex">
                    <h6>{location}</h6>
                    <span className="flex">
                      <span className="dot">
                        <BsDot className="icon" />
                      </span>
                      SR Travel
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Popular;
