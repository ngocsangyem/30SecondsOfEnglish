export default class Footer {
	state = {};
	constructor(el) {
		this.el = el;
	}

	templates() {
		return `
		<footer>
			<div class="container"></div>
		</footer>
		`;
	}

	render() {
		this.el.insertAdjacentHTML('beforeend', this.templates());
	}

	update(next) {
		Object.assign(this.state, next);

		this.render();
	}
}
