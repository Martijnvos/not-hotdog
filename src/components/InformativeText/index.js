import React from "react";
import "./InformativeText.css";

// This is already set up to receive the amount of categorized images
// TODO: it's your job to make sure the data gets here!
const InformativeText = ({ amountCategorized }) => (
  <p>You have already categorized ... {amountCategorized} images</p>
);

export default InformativeText;
