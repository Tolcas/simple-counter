
import React from "react";
import ReactDOM from "react-dom";


import "../styles/index.css";


import Home from "./component/home.jsx";


let counter = 0;
let a = setInterval(() => {
	counter += 1;

	ReactDOM.render(<Home counter={counter} />, document.querySelector("#app"));
}, 1000);

