import './assets/styles/App.css';
import TextBox from './components/TextBox.js';
import MyButton from './components/MyButton.js';
import Character from './components/Character.js';
import { useState } from 'react';

function App({ messages, messagesTypes }) {
	const [message, setMessage] = useState('Will you be my valentine...?');

	function handleClick(buttonMsg) {
		if (buttonMsg === 'Yes') {
			console.log('Yay! Thank you!');
			showEnd();
		} else {
			console.log('No clicked...');
			changeDialog();
			changeSprite();
		}
	}
	function showEnd() {
		console.log('Show end TBI');
	}
	function changeDialog() {
		console.log('TBI');
	}
	function changeSprite() {
		console.log('TBI');
	}

	return (
		<div className="App">
			<main>
				<div className="buttons">
					<MyButton text="Yes" />
					<MyButton text="No" />
				</div>
				<Character />
				<TextBox character="Monika" text={message} />
			</main>
		</div>
	);
}

export default App;
