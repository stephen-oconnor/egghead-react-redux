import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./store";

import { Provider } from "react-redux";

ReactDOM.render(
	<React.StrictMode>
		{/* Wrap in Provider to give components access to store. */}
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
