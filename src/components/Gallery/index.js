import React from "react";
import "./Gallery.css";

const Gallery = ({ currentImage }) => (
  // Sets the supplied image to be the currently shown image
  <img className="image" src={currentImage} alt="item to categorize" />
);

export default Gallery;
