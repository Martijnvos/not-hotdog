import React from "react";
import "./Gallery.css";

// Load in default image
// TODO: replace default image imported here with a randomly loaded image.
// This line shouldn't be deleted when the above works, as there is no use for it anymore
import HotDog from "../../assets/hot-dog.jpg";

// TODO: implement logic to show image to categorize
const Gallery = () => (
  <img className="image" src={HotDog} alt="item to categorize" />
);

export default Gallery;
