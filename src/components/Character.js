import React from 'react';
import '../assets/styles/character.css';
import monicaSideways from '../assets/images/normal/monica-sideways.webp';
const spritesPath = '../assets/images/normal/';
const glitchedSpritesPath = '../assets/images/glitched';

const characterSprites = {
	flirty: require('../assets/images/normal/monica-sideways.webp'),
	confident: require('../assets/images/normal/monica-front-confident.png'),
	lecturing: require('../assets/images/normal/monica-lecturing.webp'),
	glitched: [
		require('../assets/images/glitched/monica-glitch-1.webp'),
		require('../assets/images/glitched/monica-glitch-2.webp'),
		require('../assets/images/glitched/monica-glitch-3.webp')
	],
	jumpScare: require('../assets/images/glitched/monica-cursed.png')
};

const Character = ({ currentSprite = characterSprites.sideways.flirty }) => {
	return (
		<img
			src={currentSprite}
			alt="Monica sideways"
			className="character-sprite"
		/>
	);
};
/* mabye add possibility to have more than 1 sprite per type?*/
function setSpriteByType(typeDescription, setSprite) {
	const posture = typeDescription.posture;
	setSprite(characterSprites[posture]);
}

export { setSpriteByType };
export default Character;
