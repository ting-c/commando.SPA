import React from "react";
import { useReactOidc } from "@axa-fr/react-oidc-context";
import axios from 'axios';
import AddItem from "../../components/AddItem";
import Items from "../../components/Items";
import AlertMessage from "../../components/AlertMessage";
import SearchBox from "../../components/SearchBox";

const Dashboard = () => {
	const [items, setItems] = React.useState([]);
	const [filteredItems, setFilteredItems] = React.useState([]);
	const [shouldUpdate, setShouldUpdate] = React.useState(false);
	const [alertProps, setAlertProps] = React.useState({ isShowing: false });
	const [searchTerm, setSearchTerm] = React.useState("");

	const { oidcUser, logout, events } = useReactOidc();
	const { profile } = oidcUser;

	const addUserEvent = (user) =>
		console.log(`********* User Loaded :${user.profile} *********`);

	React.useEffect(() => {
		events.addUserLoaded(addUserEvent);
		return () => {
			events.removeUserLoaded(addUserEvent);
		};
	});
	
	React.useEffect(() => {
		if (oidcUser) {
			axios.defaults.headers.common["Authorization"] = "Bearer " + oidcUser.access_token;
		};
		axios.get("https://localhost:6001/api/commando").then((response) => {
			setItems(response.data);
			setFilteredItems(response.data);
			console.log(response.data);
		}).catch(error => console.log(error));	

		return () => setShouldUpdate(false);
	}, [shouldUpdate, oidcUser]);

	React.useEffect(() => {
		const filteredItems = items.filter(
			(item) =>
				item.command.search(searchTerm) !== -1 ||
				item.description.search(searchTerm) !== -1
		);
		setFilteredItems(filteredItems);
	}, [searchTerm, items]);

	const handleAddItem = (e, command, description) => {
		e.preventDefault();
		const reqBody = { command, description };
		axios
			.post(`https://localhost:6001/api/commando`, reqBody)
			.then(() => setShouldUpdate(true))
			.catch((error) => {
				setAlertProps({
					isShowing: true,
					message: error.response.data,
					type: "warning",
				});
			});
	};

	const handleDeleteItem = (id) => {
		axios
			.delete(`https://localhost:6001/api/commando/${id}`)
			.then(() => setShouldUpdate(true))
			.catch((error) => {
				setAlertProps({
					isShowing: true,
					message: error.response.data,
					type: "warning",
				});
			});
	};

	const handleUpdateItem = (id, command, description) => {
		const reqBody = { command, description };
		axios
			.put(`https://localhost:6001/api/commando/${id}`, reqBody)
			.then(() => setShouldUpdate(true))
			.catch((error) => {
				setAlertProps({
					isShowing: true,
					message: error.response.data,
					type: "warning",
				});
			});
	};

	return (
		<div>
			<h1>Dashboard</h1>
			<p>Protected Dashboard</p>
			<p>
				<span>
					Hello {profile.given_name} {profile.family_name}
				</span>
			</p>
			<SearchBox searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
			<Items
				items={filteredItems}
				handleDeleteItem={handleDeleteItem}
				handleUpdateItem={handleUpdateItem}
			/>
			<AddItem handleAddItem={handleAddItem} />
			<button onClick={logout}>logout</button>
			{alertProps.isShowing ? <AlertMessage {...alertProps} /> : null}
		</div>
	);
};

export default Dashboard;
