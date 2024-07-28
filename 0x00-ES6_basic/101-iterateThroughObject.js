export default function iterateThroughObject(reportWithIterator) {
	let name = '';
	for (const emp of reportWithIterator) {
		name += emp + ' | ';
	}
	return (name.slice(0,-3));
}
