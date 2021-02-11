export default class Loading {
	state = {
		disable: true,
	};
	constructor(el) {
		this.el = el;

		this.render();
	}

	templates() {
		return `
			<div class="loading">
				<div class="loading-container">
					<div></div>
					<div></div>
				</div>
			</div>
		`;
	}

	render() {
		this.el.insertAdjacentHTML('afterbegin', this.templates());

		this.$loading = this.el.querySelector('.loading');
	}

	disable() {
		this.$loading.remove();
	}
}
