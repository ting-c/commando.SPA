import React, { useState, useEffect } from 'react';
import './App.css';
import AddItem from './components/AddItem';
import Items from './components/Items';
import AlertMessage from './components/AlertMessage';
const axios = require('axios');

function App() {
  const [items, setItems] = useState([]);
  const [shouldUpdate, setShouldUpdate] = useState(false);
  const [alertProps, setAlertProps] = useState({isShowing: false});

  useEffect(() => {
    axios.get("https://localhost:5001/api/commando").then(response => {
      setItems(response.data);
      console.log(response.data);
    });
    return () => setShouldUpdate(false);
  }, [shouldUpdate]);

  const handleAddItem = async (e, command, description) => {
    e.preventDefault();
    const reqBody = { command, description };

    axios.post(`https://localhost:5001/api/commando`, reqBody)
      .then(() => setShouldUpdate(true))
      .catch(error => {
        setAlertProps({
          isShowing: true,
          message: error.response.data,
          type: "warning"
        });
      });
  }

  const handleDeleteItem = (id) => {
    axios.delete(`https://localhost:5001/api/commando/${id}`)
			.then(() => setShouldUpdate(true))
      .catch(error => {
        setAlertProps({
          isShowing: true,
          message: error.response.data,
          type: "warning"
        });
      });
  }

  const handleUpdateItem = (id, command, description) => {
    const reqBody = { command, description };
    axios.put(`https://localhost:5001/api/commando/${id}`, reqBody)
			.then(() => setShouldUpdate(true))
			.catch((error) => {
				setAlertProps({
					isShowing: true,
					message: error.response.data,
					type: "warning",
				});
			});
  }

  return (
		<div className="App container">
			{alertProps.isShowing ? <AlertMessage {...alertProps} /> : null}
			<Items
				items={items}
				handleDeleteItem={handleDeleteItem}
				handleUpdateItem={handleUpdateItem}
			/>
			<AddItem handleAddItem={handleAddItem} />
		</div>
	);
}

export default App;
