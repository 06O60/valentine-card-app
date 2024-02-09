const fs = require('fs').promises;

//TO DO: implement possibility to enter the fileName from the console.

async function jsonifyTypes(fileName) {
	try {
		const data = await fs.readFile(fileName, 'utf8');

		const jsonString = await jsonifyData(data);

		fs.writeFile('src/assets/messages/types.json', jsonString, err => {
			if (err)
				console.log('Something went wrong with types data writing...');
			else console.log('Types data written successfully!');
		});
	} catch (err) {
		throw new Error("Something's wrong, maybe try another file path?");
	}
}

function parseArray(arrString) {
	let arr = arrString.slice(1, -1).split(',');
	arr = arr.map(part => `"${part.trim()}"`);
	return `[${arr.join(', ')}]`;
}
function parseElementLine(line) {
	let [name, value] = line.split(': ');
	name.trim();

	if (value.length > 0 && value[value.length - 1] == ',')
		value = value.substring(0, value.length - 1);
	value = value.trim();

	if (value.length > 0 && value[0] == '[') value = parseArray(value);
	else if (isNaN(value)) value = `"${value}"`;

	return `"${name}": ${value}`;
}

function parseTypeDescription(typeDescription) {
	typeDescription = typeDescription.map(line => parseElementLine(line));
	return typeDescription.join(',\n');
}

function parseType(type) {
	type = parseTypeDescription(type.split('\n'));
	return '{' + type + '}';
}
async function jsonifyData(data) {
	let types = data.split('\n\n');

	let id = -1;
	types = types.map(type => {
		id++;
		return `"type${id}":\n ${parseType(type)} `;
	});

	return '{\n' + types.join(',\n') + '}\n';
}

export default jsonifyTypes;
