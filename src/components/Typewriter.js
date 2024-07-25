import useTypewriter from './useTypewriter';

const Typewriter = ({ text, textStyling, afterRender }) => {
	const displayedText = useTypewriter(text, 50, afterRender);
	return <p className={textStyling}>{displayedText}</p>;
};
export default Typewriter;
