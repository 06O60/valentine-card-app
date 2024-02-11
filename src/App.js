import './assets/styles/App.css';
import TextBox from './components/TextBox.js';
import MyButton from './components/MyButton.js';
import Character from './components/Character.js';
import { useState } from 'react';
import { getRandomMessage } from './utils/messageHandler.js';
const obstacles = require('./utils/obstacles.js');

function App({ messages, typesMap }) {
	const [messageData, setMessageData] = useState({
		type: 'Normal',
		text: 'Will you be my valentine...?'
	});
	const upperBtn = document.getElementsByClassName('btn1')[0];
	const lowerBtn = document.getElementsByClassName('btn2')[1];

	function handleClick(buttonMsg) {
		if (buttonMsg === 'Yes') {
			handleYes();
		} else {
			handleNo();
		}
	}
	function handleYes() {
		console.log('Yay! Thank you!');
	}
	function handleNo() {
		console.log('No clicked...');
		changeDialog();
		changeSprite();
		changeObstacle();
	}
	function showEnd() {
		console.log('Show end TBI');
	}
	function changeDialog() {
		setMessageData(getRandomMessage(messages));
	}
	function changeSprite() {
		console.log('TBI');
	}
	function changeObstacle() {
		const btn = document.getElementsByClassName('btn1')[0];
		obstacles.makeButtonBigger(btn);
	}

	return (
		<div className="App">
			<main>
				<div className="buttons container">
					<MyButton
						text="Yes"
						onButtonClick={handleClick}
						buttonId={'btn1'}
					/>
					<MyButton
						text="No"
						onButtonClick={handleClick}
						buttonId={'btn2'}
					/>
				</div>
				<Character />
				<div className="text container">
					<TextBox character="Monika" text={messageData.text} />
				</div>
			</main>
		</div>
	);
}

export default App;
