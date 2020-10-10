import React from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import {
	AuthenticationProvider,
	oidcLog,
	InMemoryWebStorage,
} from "@axa-fr/react-oidc-context";
import oidcConfiguration from "./configuration";
import CustomCallback from "./Pages/CustomCallback";
import Header from "./Layout/Header";
import Routes from "./Router";

function App() {
  return (
		<div className="App container">
			<AuthenticationProvider
				configuration={oidcConfiguration}
				loggerLevel={oidcLog.DEBUG}
				isEnabled={true}
				callbackComponentOverride={CustomCallback}
				UserStore={InMemoryWebStorage}
			>
				<Router>
					<Header />
					<Routes />
				</Router>
			</AuthenticationProvider>
		</div>
  );
}

export default App;
