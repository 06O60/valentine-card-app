export function mapByTypes(arr) {
	const map = new Map();
	arr.forEach(element => {
		map.set(element.type, element);
	});
	return map;
}

//makes sure that the messages of type normal are first,
//the order of the rest is not important, but we will have a sequence of messages of the same type
export function sortMessagesByType(messages) {
	return messages.sort((message1, message2) => {
		if (!(message1 instanceof Object)) return 1;
		else {
			if (!(message2 instanceof Object) || message1.type === 'Normal')
				return -1;
			else if (message2.type == 'Normal') return 1;
			else return message1.type.localeCompare(message2.type);
		}
	});
}
