import React, { Component } from "react";
import "./App.css";

import Gallery from "../Gallery";
import CategorizationButtons from "../CategorizationButtons";
import InformativeText from "../InformativeText";

class App extends Component {
  // Set the default state
  state = {
    amountCategorized: 0
  };

  componentDidMount() {
    // TODO: make sure to initialize the gallery with an image when the page loads
  }

  // TODO: implement loading the next image to display in the gallery
  loadNextImage = () => {};

  // TODO: implement functionality that updates the InformativeText component to reflect the amount of categorized
  // items.
  // This should also load the next image to be displayed in the gallery
  onImageCategorize = () => {};

  render() {
    return (
      <div id="app-container">
        {/* Render the gallery */}
        <Gallery />
        {/* Render the buttons with which you can categorize */}
        <CategorizationButtons />
        {/* Render the informative text showing how much image you have categorized */}
        {/* TODO: send over the amount of images that have been categorized */}
        <InformativeText />
      </div>
    );
  }
}

export default App;
