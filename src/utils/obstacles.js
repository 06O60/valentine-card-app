const obstacles = [
	function makeYesButtonBigger(button1, button2) {
		let button = button1;
		if (button1.innerText !== 'Yes') button = button2;

		const initialWidth = button.offsetHeight;
		const initialHeight = button.offsetWidth;
		const sizeIncrease = Math.random() * 50;
		button.style.height = `${initialWidth + sizeIncrease / 2}px`;
		button.style.width = `${initialHeight + sizeIncrease}px`;
	},
	function switchButtons(button1, button2) {
		const tmp = button1.innerText;
		button1.innerText = button2.innerText;
		button2.innerText = tmp;
	}
];

export default obstacles;
