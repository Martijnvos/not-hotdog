import React from "react";
import "./CategorizationButtons.css";

const CategorizationButtons = ({ onImageCategorize }) => (
  <div className="button-container">
    <button
      type="button"
      className="button button-red"
      onClick={onImageCategorize}
    >
      Not hotdog
    </button>
    <button
      type="button"
      className="button button-green"
      onClick={onImageCategorize}
    >
      Hotdog
    </button>
  </div>
);

export default CategorizationButtons;
