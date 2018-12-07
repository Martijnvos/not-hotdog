import React from "react";
import "./CategorizationButtons.css";

const CategorizationButtons = ({ updateCategorizedAmount }) => (
  <div className="button-container">
    <button
      type="button"
      className="button button-red"
      onClick={updateCategorizedAmount}
    >
      Not hotdog
    </button>
    <button
      type="button"
      className="button button-green"
      onClick={updateCategorizedAmount}
    >
      Hotdog
    </button>
  </div>
);

export default CategorizationButtons;
