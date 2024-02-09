import React from 'react';
import '../assets/styles/textbox.css';
const TextBox = ({ character, text }) => {
	return (
		<div className="text-box">
			<p className="character">{character}</p>
			<div className="text-field">
				<p className="normal dialog-text">{text}</p>
			</div>
		</div>
	);
};

export default TextBox;
