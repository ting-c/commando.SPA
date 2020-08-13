import React from 'react';
import Item from './Item';

const Items = ({ items }) => {

  return (
    <React.Fragment>
      { items.length ? items.map(item => <Item item={item} />) : null }
    </React.Fragment>
  )
}

export default Items
