import React from "react";
import colorNames from "colornames";

const ColourForm = ({
  colourValue,
  setColourValue,
  handleSubmit,
  setHexValue,
  darkText,
  setDarkText,
}) => {
  return (
    <form className="addColour" onSubmit={handleSubmit}>
      <label htmlFor="addColour">Add Colour: </label>
      <input
        autoFocus
        type="text"
        placeholder="Add colour"
        required
        value={colourValue}
        onChange={(e) => {
          setColourValue(e.target.value);
          setHexValue(colorNames(e.target.value));
        }}
      />
      <button type="button" onClick={() => setDarkText(!darkText)}>
        Toggle Text Colour
      </button>
    </form>
  );
};

export default ColourForm;
