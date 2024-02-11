import React from 'react';
import '../assets/styles/mybutton.css';

//how to actually make ids work?
const MyButton = ({ text, onButtonClick, buttonId }) => {
	return (
		<button
			className={'dialog-text ' + buttonId}
			onClick={button => {
				onButtonClick(button.target.innerText);
			}}
		>
			{text}
		</button>
	);
};

export default MyButton;
