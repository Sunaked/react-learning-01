import React from "react";
import ReactDOM from "react-dom/client";

//  web-приложение, на котором есть кнопка изменяющая цвет страницы

function App() {
  function randomColor() {
    var colors = ["#2a3406", "#ff0076", "#6afffe"];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    return randomColor;
  }

  function ChangeCol() {
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
