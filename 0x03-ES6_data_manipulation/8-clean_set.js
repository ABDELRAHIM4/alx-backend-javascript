function cleanSet(set, startString) {
	if (startString !== '') {
		return Array.from(set)
		.filter(value => value.startsWith(startString))
		.map(value => value.substring(startString.length))
		.join('-');
}
}
export default cleanSet;
