export type testType = {
	name: string
}
export class ListView {
	constructor() {
		const obk: testType = {name: 'tester'}
		console.log("ListView constructor", obk);
	}
}

export class CreateView {
	constructor() {
		console.log("CreateView constructor");
	}
}