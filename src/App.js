import React, { useState, useEffect } from 'react';
import './App.css';
import AddItem from './components/AddItem';
import Items from './components/Items';
const axios = require('axios');

function App() {

  const INITIAL_STATE = [];

  const [items, setItems] = useState(INITIAL_STATE);
  const [isRerender, setIsRerender] = useState(true);

  useEffect(() => {
    axios.get("https://localhost:5001/api/commando").then(response => {
      setItems(response.data);
      setIsRerender(false);
      console.log(items);
    });
  }, [isRerender]);

  const handleAddItem = (e, command, description) => {
    e.preventDefault();
    const newItem = { command, description };
    setItems([...items, newItem]);
  }

  return (
    <div className="App container">
      <Items items={items} />
      <AddItem handleAddItem={handleAddItem} />
    </div>
  );
}

export default App;
