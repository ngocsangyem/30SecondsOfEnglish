export default class Word {
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
		<section class="words">
			<div class="container">
				<h1 class="word-name">
				</h1>
			</div>
		</section>
		`;
	}

	render() {
		this.el.insertAdjacentHTML('beforeend', this.templates());
	}

	update(next) {
		Object.assign(this.state, next);

		const $wordName = this.el.querySelector('.word-name');

		$wordName.dataset.key = this.state.id;
		$wordName.textContent = this.state.name;
	}
}
