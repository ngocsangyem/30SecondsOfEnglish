export default class Footer {
	constructor(el) {
		this.el = el;
		
		this.render();
	}
	
	templates() {
		return `
		<footer>
			<div class="container"></div>
		</footer>
		`
	}

	render() {
		this.el.insertAdjacentHTML('beforeend', this.templates());
	}
}
