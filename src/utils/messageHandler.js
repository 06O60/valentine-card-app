const _ = require('lodash');

export function mapByTypes(arr) {
	const map = new Map();
	arr.forEach(element => {
		map.set(element.type, element);
	});
	return map;
}

//since js's sort is not stable among all the browsers, and lodash's sortBy won't accept
//the needed type of custom comparator, here's stable sort for this case;
function stableSort(arr, compare) {
	return arr
		.map((item, index) => ({ item, index }))
		.sort((a, b) => compare(a.item, b.item) || a.index - b.index)
		.map(({ item }) => item);
}

//makes sure that the messages of type normal are first,
//the order of the rest is not important, but we will have a sequence of messages of the same type
//TODO: create a clean up function that deletes all wrongly parsed messages.
export function sortMessagesByType(messages) {
	return stableSort(messages, (message1, message2) => {
		if (message1.type == message2.type) return 0;
		else if (message1.type === 'Normal') return -1;
		else if (message2.type === 'Normal') return 1;
		else return message1.type.localeCompare(message2.type);
	});
}

function randomNum(range) {
	return Math.floor(Math.random() * range);
}

//TO DO rearrange messages data structure, so that get and delete is in O(1)
export function getRandomMessage(messages) {
	let messageId;
	if (messages.length === 1 || messages[0].type === 'Normal') messageId = 0;
	else messageId = randomNum(messages.length);

	let message = messages[messageId];

	//if we havent used up all of our dialogues yet, do not let the End message to be loaded.
	if (messages.length > 1 && message.type === 'End') {
		messageId = (messageId + 1) % messages.length;
		message = messages[messageId];
	}
	messages.splice(messageId, 1);

	return message;
}
