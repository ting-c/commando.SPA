import React, { useState } from 'react';

const AddItem = ({ handleAddItem }) => {

  const [command, setCommand] = useState('');
  const [description, setDescription] = useState('');

  return (
    <div className="row py-2">
      <form className="col d-flex flex-column justify-content-center">
        <input className="mb-2 form-control" placeholder="Paste command here" value={command} onChange={(e) => setCommand(e.target.value)} />
        <textarea className="mb-2 form-control" rows="2" placeholder="Add description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <button onClick={(e) => handleAddItem(e, command, description)} >Add Command</button>
      </form>
    </div> 
  )
}

export default AddItem
