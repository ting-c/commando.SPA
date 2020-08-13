import React from 'react'

const Item = ({ item }) => {

  const { command, description } = item;

  return (
    <div className="row mb-2 py-2 d-flex flex-column text-left border-bottom">
      <div className="col">
        <label className="font-weight-bold">Command :</label>
        <p className="bg-dark text-white px-2 rounded">{command}</p>
      </div>
      <div className="col">
        <label className="font-weight-bold">Description :</label>
        <p>{description}</p>        
      </div>
    </div>
  )
}

export default Item
