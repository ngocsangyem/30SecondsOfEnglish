export default class WordItem {
	state = {
		name: '',
		id: '',
		lexicalCategory: '',
	};

	constructor(el) {
		this.el = el;

		this.render();
	}

	templates() {
		return `
			<h1 class="word-name">
			</h1>
		`
	}

	render() {
		this.el.insertAdjacentHTML('beforeend', this.templates());
	}

	update(next) {
		Object.assign(this.state, next);

		this.el.querySelector('.word-name').textContent = this.state.name;
	}
}
