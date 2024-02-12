import useTypewriter from './useTypewriter';

const Typewriter = ({ text, textStyling }) => {
	const displayedText = useTypewriter(text, 50);
	return <p className={textStyling}>{displayedText}</p>;
};
export default Typewriter;
