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

  // TODO: implement updating the amount of categorized items
  // This should update the InformativeText component
  updateCategorizedAmount = () => {
    this.setState(state => ({
      amountCategorized: state.amountCategorized + 1
    }));
  };

  render() {
    return (
      <div id="app-container">
        <Gallery />
        <CategorizationButtons />
        <InformativeText amountCategorized={this.state.amountCategorized} />
      </div>
    );
  }
}

export default App;
