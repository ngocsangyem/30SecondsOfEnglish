export default class ExampleItem {
	state = {
		id: '',
		text: '',
	};
	constructor(el) {
		this.el = el;
	}

	templates() {
		return `
			<span></span>
		`;
	}

	render() {
		this.el.insertAdjacentHTML('beforeend', this.templates());
	}

	update(next) {
		Object.assign(this.state, next);

		if (this.state.text) {
			this.render();

			this.el.querySelector('span').textContent = this.state.text;
		}
	}
}
