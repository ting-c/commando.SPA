import React from 'react';

const AlertMessage = ({ type, message }) => {
  return (
		<div className={`row alert alert-${type}`} role="alert">
			{message}
		</div>
	);
}

export default AlertMessage;
