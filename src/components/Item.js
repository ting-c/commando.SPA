import React from 'react';

const Item = ({ item , handleDeleteItem }) => {

  const { id, command, description } = item;

	return (
		<div className="row mb-2 py-2 d-flex flex-column text-left border-bottom">
			<label className="font-weight-bold">Command :</label>
			<p className="bg-dark text-white px-2 rounded">{command}</p>

			<label className="font-weight-bold">Description :</label>
			<p>{description}</p>

      <button className="btn btn-light shadow-sm" onClick={() => handleDeleteItem(id)} style={{width: '4rem', fontSize: '0.8rem'}}>Delete</button>
		</div>
	);
};

export default Item
