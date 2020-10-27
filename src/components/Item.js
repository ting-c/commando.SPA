import React, { useState } from 'react';

const Item = ({ item , handleDeleteItem, handleUpdateItem }) => {

	const [isInEditMode, setIsInEditMode] = useState(false);
	const [command, setCommand] = useState(item.command);
	const [description, setDescription] = useState(item.description);

	const updateItem = (e, item, command, description) => {
		e.preventDefault();
		handleUpdateItem(item.id, command, description);
		setIsInEditMode(false);
	};

	return (
		<div className="row mb-2 py-2 d-flex flex-column text-left border-bottom">
			{isInEditMode ? (
				<form onSubmit={(e) => updateItem(e, item, command, description)}>
					<label className="font-weight-bold">Command :</label>
					<input
						className="form-control bg-dark text-white px-2 rounded"
						value={command}
						onChange={(e) => setCommand(e.target.value)}
					/>

					<label className="font-weight-bold">Description :</label>
					<input
						className="form-control mb-2"
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					/>
					<button
						className="btn btn-light mb-2"
						type="submit"
						style={{ width: "4rem", fontSize: "0.8rem" }}
					>
						Save
					</button>
				</form>
			) : (
				<React.Fragment>
					<label className="font-weight-bold">Command :</label>
					<p className="bg-dark text-white px-2 rounded">{item.command}</p>

					<label className="font-weight-bold">Description :</label>
					<p>{item.description}</p>
				</React.Fragment>
			)}
			<div>
				<button
					className="btn btn-light shadow-sm"
					onClick={() => setIsInEditMode(true)}
					style={{ width: "4rem", fontSize: "0.8rem" }}
				>
					Edit
				</button>
				<button
					className="btn btn-light shadow-sm"
					onClick={() => handleDeleteItem(item.id)}
					style={{ width: "4rem", fontSize: "0.8rem" }}
				>
					Delete
				</button>
			</div>
		</div>
	);
};

export default Item
