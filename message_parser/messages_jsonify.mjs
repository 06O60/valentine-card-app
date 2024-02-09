const fs = require('fs').promises;
let messageCount = 0;
//TO DO: implement possibility to enter the fileName from the console.

async function jsonifyMessages(fileName) {
	try {
		const data = await fs.readFile(fileName, 'utf8');

		const jsonString = await jsonifyData(data);

		fs.writeFile('src/assets/messages/messages.json', jsonString, err => {
			if (err)
				console.log(
					'Something went wrong with messages data writing...'
				);
			else console.log('Messages data written successfully!');
		});
	} catch (err) {
		throw new Error(
			"Something's wrong, maybe try another file path... or check the text format?"
		);
	}
}

function jsonifyType(messages) {
	messages = messages.split('\n');
	let type = messages[0];
	messages = messages.slice(1);

	messages = messages.map(message => {
		return `"message${messageCount++}": {"type": "${type}",\n "text": "${message}"}`;
	});

	return messages.join(',\n');
}
function jsonifyData(data) {
	data = data.split('\n\n');

	data = data.map(messages => {
		return jsonifyType(messages);
	});
	console.log(data);
	return `{\n${data.join(',\n')} }`;
}

export default jsonifyMessages;
