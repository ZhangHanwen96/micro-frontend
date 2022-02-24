import React from "react";
import { StylesProvider } from "@material-ui/core/styles";
import { Router, Route, Switch, BrowserRouter } from "react-router-dom";

import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

export default function App({ history }) {
	console.log("11111");
	return (
		<div>
			<StylesProvider>
				<Router history={history}>
					<Switch>
						<Route exact path="/pricing" component={Pricing} />
						<Route path="/" component={Landing} />
					</Switch>
				</Router>
			</StylesProvider>
		</div>
	);
}
