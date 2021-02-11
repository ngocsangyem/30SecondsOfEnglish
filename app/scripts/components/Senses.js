import Examples from './Examples';

export default class Senses {
	state = {
		id: '',
		text: '',
		examples: [],
	};

	constructor(el) {
		this.el = el;
	}

	templates() {
		return `
			<section class="senses">
				<div class="container">
				<p class="senses-meaning text--sm">
					<strong>Meaning: </strong>
					<span></span>
				</p>
				<div class="senses-examples text--sm">
					<strong>Examples: </strong>
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

		this.render();

		const $container = this.el.querySelector('.senses');
		this.examples = new Examples(this.el.querySelector('.senses-examples'));

		$container.querySelector(
			'.senses-meaning span'
		).textContent = this.state.text;
		this.examples.update({ examples: this.state.examples.slice(0, 4) });
	}
}
