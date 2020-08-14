import React from 'react'

const Item = ({ item , handleDeleteItem }) => {

  const { id, command, description } = item;

	return (
		<div className="row mb-2 py-2 d-flex flex-column text-left border-bottom">
			<label className="font-weight-bold">Command :</label>
			<p className="bg-dark text-white px-2 rounded">{command}</p>

			<label className="font-weight-bold">Description :</label>
			<p>{description}</p>

      <button onClick={() => handleDeleteItem(id)}>Delete</button>
		</div>
	);
};

export default Item
