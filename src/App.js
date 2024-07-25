import './assets/styles/App.css';
import TextBox, { setTextStylingByType } from './components/TextBox.js';
import MyButton from './components/MyButton.js';
import Character, { setSpriteByType } from './components/Character.js';
import defaultSprite from './assets/images/normal/monica-sideways.webp';
import { useState } from 'react';
import { getRandomMessage } from './utils/messageHandler.js';
import getRandomObstacle, { getFinalObstacle } from './utils/obstacles.js';

let cleanupFunc = null;
let noCounter = 0;

function App({ messages, typesMap }) {
	function showButtons() {
		if (document.getElementsByClassName('btn1').length > 0) {
			const upperBtn = document.getElementsByClassName('btn1')[0];
			upperBtn.style.display = 'block';
		}
		if (document.getElementsByClassName('btn2').length > 0) {
			const lowerBtn = document.getElementsByClassName('btn2')[0];
			lowerBtn.style.display = 'block';
		} else {
			const secondMessage =
				'Now that you agreed, you deserve to get those carrot cupcakes! Also congratulations! You unlocked a new poem called "Stasiu rewind 2"!';

			changeDialog({ type: 'End', text: secondMessage });
		}
	}

	const [messageData, setMessageData] = useState({
		type: 'Normal',
		text: 'Will you be my valentine...?'
	});
	const [textStyling, setTextStyling] = useState('normal dialog-text');
	const [sprite, setSprite] = useState(defaultSprite);

	function handleClick(buttonMsg) {
		if (buttonMsg === 'Yes') {
			handleYes();
		} else {
			handleNo();
		}
	}

	function handleYes() {
		document.getElementsByClassName('btn1')[0].remove();
		document.getElementsByClassName('btn2')[0].remove();
		let newMessage = {
			type: 'End',
			text: "Yayyy! I actually didn't expect you to agree so quickly..."
		};
		if (noCounter > 5)
			newMessage = { type: 'End', text: 'Took you a while to agree...' };

		const secondMessage =
			'Now that you agreed, you deserve to get those carrot cupcakes! Also congratulations! You unlocked a new poem called "Stasiu rewind 2"!';

		changeDialog(newMessage);
	}

	function handleNo() {
		noCounter++;
		const newMessage = getRandomMessage(messages);

		changeDialog(newMessage);
		setSpriteByType(typesMap.get(newMessage.type), setSprite);
		setObstacle(newMessage.type);
	}
	function setObstacle(type) {
		if (cleanupFunc != null) {
			cleanupFunc();
			cleanupFunc = null;
		}
		let obstacleFun = getRandomObstacle();
		if (type == 'End') obstacleFun = getFinalObstacle();
		const upperBtn = document.getElementsByClassName('btn1')[0];
		const lowerBtn = document.getElementsByClassName('btn2')[0];
		cleanupFunc = obstacleFun(upperBtn, lowerBtn);
	}

	function hideButtons() {
		if (document.getElementsByClassName('btn1').length > 0) {
			const upperBtn = document.getElementsByClassName('btn1')[0];
			upperBtn.style.display = 'none';
		}

		if (document.getElementsByClassName('btn2').length > 0) {
			const lowerBtn = document.getElementsByClassName('btn2')[0];
			lowerBtn.style.display = 'none';
		}
	}
	function changeDialog(newMessage) {
		hideButtons();
		setTextStylingByType(typesMap.get(newMessage.type), setTextStyling);
		setMessageData(newMessage);
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
						afterRender={showButtons}
					/>
				</div>
			</main>
		</div>
	);
}

export default App;
