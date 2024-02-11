import './assets/styles/App.css';
import TextBox from './components/TextBox.js';
import MyButton from './components/MyButton.js';
import Character from './components/Character.js';
import { useState } from 'react';
import { getRandomMessage } from './utils/messageHandler.js';

function App({ messages, typesMap }) {
	const [messageData, setMessageData] = useState({
		type: 'Normal',
		text: 'Will you be my valentine...?'
	});

	function handleClick(buttonMsg) {
		if (buttonMsg === 'Yes') {
			console.log('Yay! Thank you!');
			showEnd();
		} else {
			handleNo();
		}
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
	function changeObstacle() {}

	return (
		<div className="App">
			<main>
				<div className="buttons">
					<MyButton text="Yes" onButtonClick={handleClick} />
					<MyButton text="No" onButtonClick={handleClick} />
				</div>
				<Character />
				<TextBox character="Monika" text={messageData.text} />
			</main>
		</div>
	);
}

export default App;
