import React from "react";
import "./blog.css";
import { BsArrowRightShort } from "react-icons/bs";

import nature_image from "../../Assets/nature_image.jpg";
import culinary_adventure from "../../Assets/culinary_adventure.jpg";
import historic_journey from "../../Assets/historic_journey.jpg";
import beach_escape from "../../Assets/beach_escape.jpg";
function Blog() {
  const postObject = [
    {
      id: 1,
      postImage: nature_image,
      title: "Discovering Hidden Valleys",
      description:
        "Embark on a journey to uncover the beauty of hidden valleys, where lush green landscapes and majestic waterfalls await your exploration. Immerse yourself in the tranquility of nature and create unforgettable memories.",
    },
    {
      id: 2,
      postImage: culinary_adventure,
      title: "Culinary Expedition in Asia",
      description:
        "Embark on a culinary adventure across Asia, savoring the rich flavors and diverse cuisines of the continent. From street food stalls to fine dining, experience the delightful fusion of spices and aromas that will tantalize your taste buds.",
    },
    {
      id: 3,
      postImage: historic_journey,
      title: "Journey through Ancient Civilizations",
      description:
        "Step back in time as you explore the remnants of ancient civilizations. Walk through the corridors of history, marvel at architectural wonders, and uncover the stories of the past that shaped the world we know today.",
    },
    {
      id: 4,
      postImage: beach_escape,
      title: "Sunset Serenity by the Ocean",
      description:
        "Escape to the tranquil shores and witness breathtaking sunsets by the ocean. Feel the soft sand beneath your feet, listen to the rhythmic waves, and experience a sense of peace and serenity as the sun dips below the horizon.",
    },
  ];
  return (
    <section className="blog container section">
      <div className="secContainer">
        <div className="secIntro">
          <h2 className="secTitle">Our best Blog</h2>
          <p>An insight to the incredible experience in the world.rg</p>
        </div>

        <div className="mainContainer grid">
          {postObject.map(({ id, postImage, title, description }) => (
            <div className="singlePost grid" key={id}>
              <div className="imgDiv">
                <img src={postImage} alt="img name" />
              </div>
              <div className="postDetails">
                <h3>{title}</h3>

                <p>
                 {description}
                </p>
              </div>
              <a href="/" className="flex">
                
                Read More<BsArrowRightShort className="icon" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
