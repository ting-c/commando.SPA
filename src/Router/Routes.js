import React from "react";
import { Switch, Route } from "react-router-dom";
import { withOidcSecure } from "@axa-fr/react-oidc-context";
import Home from "../Pages/Home";
import Dashboard from "../Pages/Dashboard";

const PageNotFound = () => <div>Page not found</div>;
const ProtectedDashboard = withOidcSecure(Dashboard);

const Routes = () => (
	<Switch>
		<Route exact path="/">
			Home
		</Route>
		<Route path="/dashboard">
			<ProtectedDashboard />
		</Route>
		<Route path="/home" component={Home} />
		<Route component={PageNotFound} />
	</Switch>
);

export default Routes;
