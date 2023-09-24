import React, { useState } from "react";
import BoxColour from "./BoxColour";
import ColourForm from "./ColourForm";
import "./App.css";

function App() {
  const [colourValue, setColourValue] = useState("");
  const [hexValue, setHexValue] = useState("");
  const [darkText, setDarkText] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="App">
      <h2>Colour Picker</h2>
      <BoxColour
        colourValue={colourValue}
        hexValue={hexValue}
        darkText={darkText}
      />
      <ColourForm
        setHexValue={setHexValue}
        colourValue={colourValue}
        setColourValue={setColourValue}
        handleSubmit={handleSubmit}
        darkText={darkText}
        setDarkText={setDarkText}
      />
    </div>
  );
}

export default App;
