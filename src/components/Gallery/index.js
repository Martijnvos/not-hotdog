import React from "react";
import "./Gallery.css";

// Load in default image
// TODO: replace default image with one loaded from provided list of images
import HotDog from "../../assets/hot-dog.jpg";

// TODO: implement logic to load in image to categorize
const Gallery = () => (
  <img className="image" src={HotDog} alt="item to categorize" />
);

export default Gallery;
