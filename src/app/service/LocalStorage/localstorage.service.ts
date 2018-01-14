export class LocalStorage {
	ls: any;
	constructor() {
		this.ls = localStorage;
	}

	getIt(field) {
		try {
			return JSON.parse(this.ls.getItem(field));
		} catch(e) {
			console.error(e);
			return false;
		}
	}

	setIt(field, value) {
		try {
			this.ls.setItem(field, JSON.stringify(value));
			return true;
		} catch(e) {
			console.error(e);
			return false;
		}
	}

	delIt(field) {
		try {
			this.ls.removeItem(field);
			return true;
		} catch(e) {
			console.error(e);
			return false;
		}
	}
}