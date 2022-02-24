import React, { lazy, Suspense, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Loading from "./components/Progress";
import Header from "./components/Header";

const MarketingLazyApp = lazy(() => import("./components/MarketingApp"));
const AuthLazyApp = lazy(() => import("./components/AuthApp"));

export default () => {
	const [isSignedIn, setIsSignedIn] = useState(false);

	return (
		<BrowserRouter>
			<div>
				<Header
					isSignedIn={isSignedIn}
					onSignOut={() => setIsSignedIn(false)}
				/>
				<Suspense fallback={Loading}>
					<Switch>
						<Route path="/auth">
							<AuthLazyApp onSignIn={() => setIsSignedIn(true)} />
						</Route>
						<Route path="/" component={MarketingLazyApp} />
					</Switch>
				</Suspense>
			</div>
		</BrowserRouter>
	);
};
