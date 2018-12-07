import React, { Component } from "react";
import "./App.css";

import Gallery from "../Gallery";
import CategorizationButtons from "../CategorizationButtons";
import InformativeText from "../InformativeText";

import getRandomImage from "../../utils/Images";

class App extends Component {
  // Set the default state
  state = {
    amountCategorized: 0
  };

  // Load in a random image when the component is mounted
  // This will run on page load and makes sure the gallery gets populated
  componentDidMount() {
    this.loadNextImage();
  }

  // Gets a random image and saves it to state as the current image to be displayed
  loadNextImage = () => {
    const image = getRandomImage();
    this.setState({ currentImage: image });
  };

  onImageCategorize = () => {
    // Increment the amount that's been categorized by 1
    this.setState(state => ({
      amountCategorized: state.amountCategorized + 1
    }));

    // Load new image to categorize
    this.loadNextImage();
  };

  render() {
    return (
      <div id="app-container">
        {/* Render the gallery */}
        <Gallery currentImage={this.state.currentImage} />
        {/* Render the buttons with which you can categorize */}
        <CategorizationButtons onImageCategorize={this.onImageCategorize} />
        {/* Render the informative text showing how much image you have categorized */}
        <InformativeText amountCategorized={this.state.amountCategorized} />
      </div>
    );
  }
}

export default App;
