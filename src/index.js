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
    setColor(randomColor);
  }

  return (
    <div
      className="page"
      style={{
        background: color,
        padding: "10px",
        width: width_proportionn,
        height: height_proportion,
      }}
    >
      <div className="biggestPart">
        <button className="button" onClick={ChangeCol}>
          Click Me!{" "}
        </button>
      </div>
    </div>
  );
}

//class Page extends React.Component {
//let caolor = useState("#000000");

//function ChangeColor() {

//	setColor(randomColor())
//}

//constructor(props) {
//	super(props);
//this.myRef = React.createRef();
//this.focusMyRef = this.focusMyRef.bind(this);
//	}
//	setRef = (ref) => {
//this.ref = ref;
//};

//componentDidMount() {
//console.log(this.ref); // div
//}

//focusMyRef() //{
//this.myRef.current.focus();
//}
/*
	renderButton() {
		const color = randomColor();
		return (<Button value={color}/>);
	}	
	ChangeColor() {
		console.log("CLICK");
		console.log("color " + randomColor());
		this.color = randomColor();
		this.focusBackColor.style.backgroundColor = this.color; //this is how background will be updated
	}
	render() {
		return(
			<div className="page"  style={{backgroundColor:{color}, padding:'10px'}}> 
				<div className="biggestPart" style={{width:'100%', height:'100%'}}>
				<button className="button" onClick={ChangeColor}>Click Me! </button>
			</div>
			</div>
		);
	}
	*/
//}
// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
