import React, { useState } from "react";
import "./App.scss";

const App = () => {
  const [color1Value, setColor1Value] = useState("#fc5c7d");
  const [color2Value, setColor2Value] = useState("#6a82fb");
  const [background, setBackground] = useState(
    `linear-gradient(to right, ${color1Value}, ${color2Value})`
  );
  const [colorText, setColorText] = useState(
    `Linear-gradient to right: ${color1Value} - ${color2Value}`
  );

  const changeColorText = () => {
    setColorText(`Linear-gradient to right: ${color1Value} - ${color2Value}`);
  };

  const changeBackground = () => {
    setBackground(`linear-gradient(to right, ${color1Value}, ${color2Value})`);
    console.log(background);
  };

  const color1Change = (e) => {
    setColor1Value(e.target.value);
    changeBackground();
    changeColorText();
  };

  const color2Change = (e) => {
    setColor2Value(e.target.value);
    changeBackground();
    changeColorText();
  };

  const getRandomColors = () => {
    setColor1Value("#" + Math.floor(Math.random() * 16777215).toString(16));
    setColor2Value("#" + Math.floor(Math.random() * 16777215).toString(16));
    changeBackground();
    changeColorText();
  };

  return (
    <div className="app" style={{ background: background }}>
      <h1 className="app__heading">Background Generator</h1>
      <div className="app__colorContainer">
        <input
          type="color"
          name="color1"
          value={color1Value}
          onChange={color1Change}
          className="app__color app__color--1"
        />
        <input
          type="color"
          name="color2"
          value={color2Value}
          onChange={color2Change}
          className="app__color app__color--2"
        />
      </div>
      <button className="app__button" onClick={getRandomColors}>
        Random
      </button>
      <span className="app__colorText">{colorText}</span>
    </div>
  );
};

export default App;
