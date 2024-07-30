export const weakMap = new WeakMap();
export function queryAPI(p) {
	const num = weakMap.get(p) || 0;
	weakMap.set(p, num + 1);
	if (num >= 5) {
		throw new Error('Endpoint load is high');
	}
}
