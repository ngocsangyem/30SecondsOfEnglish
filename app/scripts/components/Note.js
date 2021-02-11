export default class Note {
	state = {
		text: '',
		id: '',
	};

	constructor(el) {
		this.el = el;
	}

	templates() {
		return `
		<section class="notes">
			<div class="container">
				<div class="note-item">
					<p></p>
				</div>
			</div>
		</section>
		`;
	}

	render() {
		this.el.insertAdjacentHTML('beforeend', this.templates());
	}

	update(next) {
		Object.assign(this.state, next);

		if (this.state.text) {
			this.render();

			const $container = this.el.querySelector('.notes');

			if (this.state.text) {
				$container.classList.add('is-show');
			}

			$container.querySelector('p').textContent = this.state.text;
		}
	}
}
