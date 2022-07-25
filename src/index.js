import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

//  web-приложение, на котором есть кнопка изменить цвет

function App() {
  const [color, setColor] = useState("#2a3406");
  console.log(color);
  console.log(setColor);

  const width_proportionn = "80%";
  const height_proportion = "40%";
  function randomColor() {
    var colors = ["#2a3406", "#ff0076", "#6afffe"];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    return randomColor;
  }

  function ChangeCol() {
    console.log("color change");
    document.body.style.background = randomColor();
  }

  return (
    <div>
      <div className="biggestPart">
        <button className="button" onClick={ChangeCol}>
          Click Me to change color!
        </button>
      </div>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
