export default class Header {
	constructor(el) {
		this.el = el;

		this.render();
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
		`
	}

	render() {
		this.el.insertAdjacentHTML('afterbegin', this.templates());
	}
}
