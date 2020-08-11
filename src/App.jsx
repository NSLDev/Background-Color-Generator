import React, { useState } from "react";
import "./App.scss";

const App = () => {
  const [colorText, setColorText] = useState("");

  const getRandomColors = () => {};

  return (
    <div className="app">
      <h1 className="app__heading">Background Generator</h1>
      <input
        type="color"
        name="color1"
        value="#FC5C7D"
        className="app__color app__color--1"
      />
      <input
        type="color"
        name="color2"
        value="#6A82FB"
        className="app__color app__color--2"
      />
      <span className="app__colorText">{colorText}</span>
    </div>
  );
};

export default App;
