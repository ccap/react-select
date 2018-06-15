import React from 'react';

const clearRenderer = () => {
	return (
		<span
			className="Select-clear"
			aria-hidden="true"
			aria-label=","
			dangerouslySetInnerHTML={{ __html: '&times;' }}
		/>
	);
};

export default clearRenderer;
