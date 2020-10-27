const configuration = {
	client_id: "commandospa",
	client_secret: "secret",
	redirect_uri: "http://localhost:3000/home",
	response_type: "code",
	post_logout_redirect_uri: "http://localhost:3000",
	scope: "openid profile commandoapi offline_access",
	authority: "https://localhost:5001",
	silent_redirect_uri: "http://localhost:3000/admin",
	automaticSilentRenew: true,
	loadUserInfo: true,
	saveTokens: true,
};

export default configuration;
