import React from "react";
import "./CategorizationButtons.css";

const CategorizationButtons = () => (
  <div className="button-container">
    {/* TODO: make the buttons categorize the shown image when clicked */}
    <button type="button" className="button">
      Hotdog
    </button>
    <button type="button" className="button">
      Not hotdog
    </button>
  </div>
);

export default CategorizationButtons;
