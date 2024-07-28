export default function createIteratorObject(report) {
	const emps = report.allEmployees;
		return {
			*[Symbol.iterator](){
				for (const emp in emps) {
					for (const val of emps[emp]) {
						yield val;
					}
				}
			}
	};
}
