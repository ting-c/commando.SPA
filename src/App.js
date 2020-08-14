import React, { useState, useEffect } from 'react';
import './App.css';
import AddItem from './components/AddItem';
import Items from './components/Items';
import AlertMessage from './components/AlertMessage';
const axios = require('axios');

function App() {

  const INITIAL_STATE = [];

  const [items, setItems] = useState(INITIAL_STATE);
  const [shouldUpdate, setShouldUpdate] = useState(false);
  const [alertProps, setAlertProps] = useState({isShowing: false});

  useEffect(() => {
    axios.get("https://localhost:5001/api/commando").then(response => {
      setItems(response.data);
    });
    return () => setShouldUpdate(false);
  }, [shouldUpdate]);

  const handleAddItem = async (e, command, description) => {
    e.preventDefault();
    const reqBody = { command, description };

    axios.post(`https://localhost:5001/api/commando`, reqBody)
      .then(response => console.log(response.data))
      .catch(error => {
        console.log(error.response.data)
        setAlertProps({
          isShowing: true,
          message: error.response.data,
          type: "warning"
        });
        return;
      });
    setShouldUpdate(true);
  };

  const handleDeleteItem = (id) => {
    axios.delete(`https://localhost:5001/api/commando/${id}`)
			.then((response) => console.log(response))
      .catch(error => {
        console.log(error.response.data)
        setAlertProps({
          isShowing: true,
          message: error.response.data,
          type: "warning"
        });
        return;
      });
    setShouldUpdate(true);
  }

  return (
    <div className="App container">
      { alertProps.isShowing ? <AlertMessage {...alertProps}/> : null }
      <Items items={items} handleDeleteItem={handleDeleteItem} />
      <AddItem handleAddItem={handleAddItem} />
    </div>
  );
}

export default App;
