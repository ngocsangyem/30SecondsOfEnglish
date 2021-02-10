export default class Store {
	state = {};
	storeTimeout = null;
	totalSource = 50;

	constructor(el) {
		this.el = el;
	}

	store() {
		clearTimeout(this.storeTimeout);

		this.storeTimeout = setTimeout(() => {
			try {
				localStorage.vocabularies = JSON.stringify(this.state);
			} catch (err) {
				console.warn(err);
			}
		}, 100);
	}

	/**
	 *
	 * @param {Object} next
	 * @return {undefined}
	 * @desc Dispatch new data
	 */
	dispatch(next) {
		Object.assign(this.state, next);

		this.el.dispatchEvent(
			new CustomEvent('appData', {
				detail: this.state,
				bubbles: true,
			})
		);
	}

	async load() {
		try {
			const source = await this.getSource();
			this.dispatch(source);
		} catch (err) {
			console.warn(err);
		}
	}

	randomSource(number) {
		return Math.floor(Math.random() * number);
	}

	/**
	 *
	 * @param {Number} min
	 * @param {Number} max
	 * @return {Number}
	 * @desc Return random number except zero
	 */
	getRandom(min, max) {
		return min + Math.floor(Math.random() * (max - min + 1));
	}

	async getSource() {
		const getSources = await fetch(
			`./data/source_${this.getRandom(1, this.totalSource)}.json`,
			{
				headers: { accept: 'application/json' },
			}
		);
		const source = await getSources.json();
		const sourceLength = source.data.length;

		return source.data[this.randomSource(sourceLength)];
	}
}
