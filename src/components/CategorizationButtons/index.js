import React from "react";
import "./CategorizationButtons.css";

const CategorizationButtons = () => (
  <div className="button-container">
    {/* TODO: make the buttons categorize the shown image when clicked */}
    <button type="button" className="button button-red">
      Not hotdog
    </button>
    <button type="button" className="button button-green">
      Hotdog
    </button>
  </div>
);

export default CategorizationButtons;
