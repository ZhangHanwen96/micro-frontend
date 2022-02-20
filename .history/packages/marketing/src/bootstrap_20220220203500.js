import React from "react";
import ReactDOM from "react-dom";

const mount = (el) => {
	ReactDOM.render(
		<h1>Marketing app</h1>,
		el ? el : document.querySelector("#app")
	);
};
