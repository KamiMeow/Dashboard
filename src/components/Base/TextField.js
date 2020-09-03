const { findAllByLabelText } = require("@testing-library/react")
import React from 'react';

function TextField(props) {
	return (
		<label>
			{props.label}
			<input type={props.type} placeholder={props.placeholder}/>
		</label>
	)
};

export default TextField;