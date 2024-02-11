import React from 'react';
import '../assets/styles/mybutton.css';
const MyButton = ({ text, onButtonClick }) => {
	return (
		<button
			className="main-button dialog-text"
			onClick={button => {
				onButtonClick(button.target.innerText);
			}}
		>
			{text}
		</button>
	);
};

export default MyButton;
