import React from "react";
import { StylesProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

export default function App() {
	return (
		<div>
			<StylesProvider>
				<Router>
					<Switch>
						<Route exact path="/" component={Landing} />
						<Route exact path="/pricing" component={Pricing} />
					</Switch>
				</Router>
			</StylesProvider>
		</div>
	);
}
