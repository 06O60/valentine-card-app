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
	},
	function changeToYesOnHover(button1, button2, noCount) {
		/*TO DO: fix the bug, when clicked on no button correctly, and then quickly mouse off the button, we get two no's)*/
		let button = button1;
		if (button1.innerText === 'Yes') button = button2;

		let originalContent = button.innerText;
		console.log(originalContent);
		let timeoutId;
		let speed = 350;
		if (noCount < 10) speed = 500;

		const cleanup = () => {
			console.log('Clean up or nah?');
			console.log(button);
			console.log(originalContent);
			button.innerText = originalContent;
			if (timeoutId) clearTimeout(timeoutId);
		};
		button.addEventListener('mouseenter', () => {
			timeoutId = setTimeout(() => {
				button.innerText = 'Yes';
				console.log('H' + originalContent);
			}, speed);
		});
		button.addEventListener('mouseleave', cleanup);

		//return a cleanup function
		return cleanup;
	}
	/*TODO: implement reverse function; show to yes's and if you hover on one of them long enough, it will show no  */
];

export default function getRandomObstacle() {
	let obstacleId = Math.floor(Math.random() * obstacles.length);
	return obstacles[obstacleId];
}
