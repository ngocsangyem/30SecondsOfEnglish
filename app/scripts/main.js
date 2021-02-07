import Switch from './components/Switch';

export class App {
	totalSource = 50;

	constructor() {
		new Switch();
		this.getSource();
	}

	randomSource() {
		return Math.floor(Math.random() * this.totalSource);
	}

	getSource() {
		console.log(`../data/source_1.json`);
		fetch(`../data/source_1.json`)
			.then((res) => res.json())
			.then((res) => {
				console.log(JSON.stringify(res));
			})
			.catch((error) => {
				console.log(error);
			});
	}

	static init() {
		const index = new App();
		return index;
	}
}

(function () {
	App.init();
})();
