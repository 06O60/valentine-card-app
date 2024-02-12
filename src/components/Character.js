import React from 'react';
import '../assets/styles/character.css';
import monicaSideways from '../assets/images/normal/monica-sideways.webp';
import { type } from '@testing-library/user-event/dist/type';
const spritesPath = '../assets/images/normal/';
const glitchedSpritesPath = '../assets/images/glitched';

const characterSprites = {
	flirty: require('../assets/images/normal/monica-sideways.webp'),
	confident: require('../assets/images/normal/monica-front-confident.png'),
	lecturing: require('../assets/images/normal/monica-lecturing.webp'),
	glitched: [
		require('../assets/images/glitched/monica-soft-glitch.webp'),
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

let glitchInterval;
let glitchTimeout;
function glitchAnimation(setSprite) {
	let currentIndex = -1;
	glitchInterval = setInterval(() => {
		currentIndex =
			(currentIndex + 1) % (characterSprites['glitched'].length - 1);
		setSprite(characterSprites['glitched'][currentIndex + 1]);
	}, 300);
}

/* mabye add possibility to have more than 1 sprite per type?*/
function setSpriteByType(typeDescription, setSprite) {
	//if there's a glitch animation going on
	//from the previous dialog, stop it.
	if (glitchInterval) clearInterval(glitchInterval);
	if (glitchTimeout) clearTimeout(glitchTimeout);

	if (Math.random() <= typeDescription.glitchChance) {
		console.log('Here');
		setSprite(characterSprites['glitched'][0]);
		glitchTimeout = setTimeout(() => glitchAnimation(setSprite), 350);
	} else {
		const posture = typeDescription.posture;
		setSprite(characterSprites[posture]);
	}
}

export { setSpriteByType };
export default Character;
