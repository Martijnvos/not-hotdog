import React from "react";
import "./InformativeText.css";

const InformativeText = ({ amountCategorized }) => (
  <p>You have already categorized ... {amountCategorized} images</p>
);

export default InformativeText;
