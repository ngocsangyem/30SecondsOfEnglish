export default class Header {
	state = {};

	constructor(el) {
		this.el = el;
	}

	templates() {
		return `
		<header class="header-top">
			<a href="#!" class="logo">
				<img src="./images/logo.svg" alt="30 seconds of English Logo">
				<span class="logo__text">
					<span>30 seconds</span>
					<span>Of English</span>
				</span>
			</a>
		</header>
		`;
	}

	render() {
		this.el.insertAdjacentHTML('afterbegin', this.templates());
	}

	update(next) {
		Object.assign(this.state, next);

		this.render();
	}
}
