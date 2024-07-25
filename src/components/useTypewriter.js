import { useState, useEffect } from 'react';

const useTypewriter = (text, speed = 50, afterRender = () => {}) => {
	const [printedText, setPrintedText] = useState('');
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		setPrintedText('');
		setCurrentIndex(0);
	}, [text, speed]);

	useEffect(() => {
		const printingInterval = setInterval(() => {
			if (currentIndex < text.length) {
				setPrintedText(
					prevText => prevText + text.charAt(currentIndex)
				);
				setCurrentIndex(currentIndex + 1);
			} else {
				clearInterval(printingInterval);
				afterRender();
			}
		}, speed);

		return () => {
			clearInterval(printingInterval);
		};
	}, [text, speed, currentIndex]);

	return printedText;
};

export default useTypewriter;
