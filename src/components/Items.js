import React from 'react';
import Item from './Item';

const Items = ({ items, handleDeleteItem, handleUpdateItem }) => {
  return (
		<React.Fragment>
			{items.length
				? items.map((item, idx) => (
						<Item
							key={idx}
							item={item}
							handleDeleteItem={handleDeleteItem}
							handleUpdateItem={handleUpdateItem}
						/>
				  ))
				: null}
		</React.Fragment>
	);
}

export default Items
