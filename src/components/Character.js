import React from 'react';
import '../assets/styles/character.css';
import monicaSidewaysImage from '../assets/images/normal/monica-sideways.webp';
const Character = () => {
	return (
		<img
			src={monicaSidewaysImage}
			alt="Monica sideways"
			class="character-sprite"
		/>
	);
};

export default Character;
