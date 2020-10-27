import React, { useState } from 'react';
import './AddItem.css';

const AddItem = ({ handleAddItem }) => {

  const [command, setCommand] = useState('');
  const [description, setDescription] = useState('');

  const addItem = (e, command, description) => {
    handleAddItem(e, command, description);
    setCommand('');
    setDescription('');
	};

  return (
		<form 
			className="row py-2 d-flex flex-column justify-content-center" 
			onSubmit={(e) => addItem(e, command, description)}>
			<input
				className="mb-2 bg-dark text-white form-control"
				placeholder="Enter command"
				value={command}
				onChange={(e) => setCommand(e.target.value)}
				id="commandInput"
			/>
			<textarea
				className="mb-2 form-control"
				rows="2"
				placeholder="Add description"
				value={description}
				onChange={(e) => setDescription(e.target.value)}
			/>
			<button
				className="btn btn-light"
				type="submit"
			>
				Add Command
			</button>
		</form>
	);
}

export default AddItem
