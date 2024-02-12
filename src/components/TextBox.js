import React from 'react';
import '../assets/styles/textbox.css';
const TextBox = ({ character, text, textStyling }) => {
	return (
		<div className="text-box">
			<p className="character">{character}</p>
			<div className="text-field">
				<p className={textStyling}>{text}</p>
			</div>
		</div>
	);
};

export function setTextStylingByType(typeDescription, setTextStyling) {
	const type = typeDescription.type;
	let textStyling = '';
	switch (type) {
		case 'Monica-3rd-wall':
			textStyling = 'distorted dialog-text';
			break;
		case 'Programmer-humor':
			textStyling = 'error dialog-text';
			if (Math.random() < 0.5) textStyling += ' distorted';
			break;
		default:
			textStyling = 'normal dialog-text';
	}
	setTextStyling(textStyling);
}
export default TextBox;
