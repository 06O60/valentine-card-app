import './assets/styles/App.css';
import TextBox, { setTextStylingByType } from './components/TextBox.js';
import MyButton from './components/MyButton.js';
import Character, { setSpriteByType } from './components/Character.js';
import defaultSprite from './assets/images/normal/monica-sideways.webp';
import { useState } from 'react';
import { getRandomMessage } from './utils/messageHandler.js';
const obstacles = require('./utils/obstacles.js');

function App({ messages, typesMap }) {
	const [messageData, setMessageData] = useState({
		type: 'Normal',
		text: 'Will you be my valentine...?'
	});
	const [textStyling, setTextStyling] = useState('normal dialog-text');
	const [sprite, setSprite] = useState(defaultSprite);
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
		const newMessage = getRandomMessage(messages);
		setSpriteByType(typesMap.get(newMessage.type), setSprite);
		changeDialog(newMessage);
		changeObstacle();
	}
	function showEnd() {
		console.log('Show end TBI');
	}
	function changeDialog(newMessage) {
		setMessageData(newMessage);
		setTextStylingByType(newMessage.type, setTextStyling);
	}
	function changeObstacle() {
		/*const btn = document.getElementsByClassName('btn1')[0];
		obstacles.makeButtonBigger(btn5*/
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
				<Character currentSprite={sprite} />
				<div className="text container">
					<TextBox
						character="Monika"
						text={messageData.text}
						textStyling={textStyling}
					/>
				</div>
			</main>
		</div>
	);
}

export default App;
