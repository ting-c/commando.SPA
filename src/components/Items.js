import React from 'react';
import Item from './Item';

const Items = ({ items, handleDeleteItem }) => {
  console.log(items)
  return (
		<React.Fragment>
			{items.length
				? items.map((item, idx) => (
						<Item key={idx} item={item} handleDeleteItem={handleDeleteItem} />
				  ))
				: null}
		</React.Fragment>
	);
}

export default Items
