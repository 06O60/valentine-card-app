import './assets/styles/App.css';
import TextBox from './components/TextBox.js';
function App() {
	return (
		<div className="App">
			<main>
				<TextBox
					character="Monika"
					text="Will you be my valentine...?"
				/>
			</main>
		</div>
	);
}

export default App;
