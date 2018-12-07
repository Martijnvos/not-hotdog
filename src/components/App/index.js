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
    const image = getRandomImage();
    this.loadNextImage(image);
  }

  // Sets the supplied random image to the state as the current image to be displayed
  loadNextImage = nextImage => {
    this.setState({ currentImage: nextImage });
  };

  updateCategorizedAmount = () => {
    this.setState(state => ({
      amountCategorized: state.amountCategorized + 1
    }));
  };

  render() {
    return (
      <div id="app-container">
        <Gallery currentImage={this.state.currentImage} />
        <CategorizationButtons
          updateCategorizedAmount={this.updateCategorizedAmount}
        />
        <InformativeText amountCategorized={this.state.amountCategorized} />
      </div>
    );
  }
}

export default App;
