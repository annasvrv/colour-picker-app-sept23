import React from "react";

const BoxColour = ({ colourValue, hexValue, darkText }) => {
  return (
    <section
      className="colourBox"
      style={{
        backgroundColor: colourValue,
        color: darkText ? "#000" : "#FFF",
      }}
    >
      <p>{colourValue ? colourValue : "Empty Value"}</p>
      <p>{hexValue ? hexValue : null}</p>
    </section>
  );
};

BoxColour.defaultProps = { colourValue: "Enter Colour" };

export default BoxColour;
