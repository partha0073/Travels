import React from "react";
import "./offers.css";
import {
  MdKingBed,
  MdAirportShuttle,
  MdBathtub,
  MdLocationOn,
} from "react-icons/md";
import { BsArrowRightShort } from "react-icons/bs";
import { FaWifi } from "react-icons/fa";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

// import card images
import img1 from "../../Assets/Kyoto.jpg";
import img2 from "../../Assets/London.jpg";
import img3 from "../../Assets/New York.jpg";

function Offers() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const offerData = [
    {
      id: 1,
      imgSrc: img1,
      destTitle: "London",
      location: "United Kingdom",
      price: 1500,
    },
    {
      id: 2,
      imgSrc: img2,
      destTitle: "Kyoto",
      location: "Japan",
      price: 1200,
    },
    {
      id: 3,
      imgSrc: img3,
      destTitle: "New York",
      location: "USA",
      price: 2000,
    },
  ];

  return (
    <section className="offer container section">
      <div className="secContainer">
        <div className="secIntro">
          <h2 className="secTitle"  data-aos="fade-up" data-aos-duration="1500">Special Offers</h2>
          <p data-aos="fade-up" data-aos-duration="2000">
            From historical cities to natural spectaculars. come to see the best
            of the world!
          </p>
        </div>

        <div className="mainContent grid" data-aos="fade-up" data-aos-duration="2500">
          {offerData.map(({id, imgSrc, destTitle, location, price }) => (
            <div className="singleOffer" key={id}>
              <div className="destImage">
                <img src={imgSrc} alt={destTitle} />

                <span className="discount">30% Off</span>
              </div>
              <div className="offerBody">
                <div className="price flex">
                  <h4>${price}</h4>
                  <span className="status"> For Rent </span>
                </div>
                <div className="amenities flex">
                  <div className="singleAmenity flex">
                    <MdKingBed className="icon" />
                    <small>2 Beds</small>
                  </div>
                  <div className="singleAmenity flex">
                    <MdBathtub className="icon" />
                    <small>1 Bath</small>
                  </div>
                  <div className="singleAmenity flex">
                    <FaWifi className="icon" />
                    <small>Wi-Fi</small>
                  </div>

                  <div className="singleAmenity flex">
                    <MdAirportShuttle className="icon" />
                    <small>Shuttle</small>
                  </div>
                </div>
                <div className="location flex">
                  <MdLocationOn className="icon" />
                  <small>450 vine #310, {location} </small>
                </div>
                <button className="btn flex">
                  View details
                  <BsArrowRightShort className="icon" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Offers;
