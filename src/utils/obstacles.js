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
		console.log('Switching buttons');
		const tmp = button1.innerText;
		button1.innerText = button2.innerText;
		button2.innerText = tmp;
	},
	function changeToYesOnHover(button1, button2, noCount) {
		console.log('Changing to yes');
		let button = button1;
		if (button1.innerText === 'Yes') button = button2;

		let originalContent = button.innerText;
		let timeoutId;
		let speed = 350;
		if (noCount < 10) speed = 500;

		const mouseEnterHandler = () => {
			timeoutId = setTimeout(() => {
				button.innerText = 'Yes';
			}, speed);
		};
		const mouseLeaveHandler = () => {
			if (timeoutId) clearTimeout(timeoutId);
			button.innerText = originalContent;
		};
		const mouseEnterId = button.addEventListener(
			'mouseenter',
			mouseEnterHandler
		);
		const mouseLeaveId = button.addEventListener(
			'mouseleave',
			mouseLeaveHandler
		);

		const cleanup = () => {
			console.log(button);
			mouseLeaveHandler();
			button.removeEventListener('mouseenter', mouseEnterHandler);
			button.removeEventListener('mouseleave', mouseLeaveHandler);
		};
		//return a cleanup function
		return cleanup;
	},
	/*TODO: implement reverse function; show to yes's and if you hover on one of them long enough, it will show no  */
	function fullScreenYes(button1, button2) {
		button1.style.innerText = 'Yes';
		button1.style.maxWidth = '100vw';
		button1.style.maxHeight = '100vh';
		button1.style.width = '100vw';
		button1.style.height = '100vh';
		button1.style.position = 'fixed';
		button1.style.margin = 0;
		button1.parentNode.className = '';
		button1.style.zIndex = 999;
		button1.style.left = 0;
		button1.display = 'flex';
	}
];

export default function getRandomObstacle() {
	let obstacleId = Math.floor(Math.random() * (obstacles.length - 1));
	return obstacles[obstacleId];
}

export function getFinalObstacle() {
	return obstacles[obstacles.length - 1];
}
