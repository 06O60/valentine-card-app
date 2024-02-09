import './assets/styles/App.css';
import TextBox from './components/TextBox.js';
import MyButton from './components/MyButton.js';
import Character from './components/Character.js';
function App() {
	return (
		<div className="App">
			<main>
				<div className="buttons">
					<MyButton text="Yes" />
					<MyButton text="No" />
				</div>
				<Character />
				<TextBox
					character="Monika"
					text="Will you be my valentine...?"
				/>
			</main>
		</div>
	);
}

export default App;
