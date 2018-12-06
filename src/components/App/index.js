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
  updateCategorizedAmount = () => {};

  render() {
    return (
      <>
        <Gallery />
        <CategorizationButtons />
        {/* TODO: send over the amount that is categorized */}
        <InformativeText />
      </>
    );
  }
}

export default App;
