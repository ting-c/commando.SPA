import React from "react";
import { AuthenticationContext } from "@axa-fr/react-oidc-context";
import { Link } from "react-router-dom";

const headerStyle = {
	display: "flex",
	backgroundColor: "#26c6da",
	justifyContent: "space-between",
	padding: 10,
};

const linkStyle = {
	color: "white",
};

export default () => (
	<header>
		<AuthenticationContext.Consumer>
			{(props) => {
				return (
					<div style={headerStyle}>
						<h3>
							<Link style={linkStyle} to="/">
								Commando
							</Link>
						</h3>

						{props.oidcUser || !props.isEnabled ? (
							<ul>
								<li>
									<Link style={linkStyle} to="/dashboard">
										Dashboard
									</Link>
								</li>
								<button
									className="btn btn-light my-2"
									onClick={props.logout}
								>
									logout
								</button>
							</ul>
						) : (
							<button
								className="btn btn-light my-2"
								onClick={props.login}
							>
								login
							</button>
						)}
					</div>
				);
			}}
		</AuthenticationContext.Consumer>
	</header>
);
