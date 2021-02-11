import AudioGroup from './AudioGroup';

export default class Ipas {
	state = {
		id: '',
		data: [],
	};

	constructor(el) {
		this.el = el;
	}

	templates() {
		return `
			<section class="ipas">
				<div class="container"></div>
			</section>
		`;
	}

	render() {
		this.el.insertAdjacentHTML('beforeend', this.templates());
	}

	update(next) {
		Object.assign(this.state, next);

		this.render();

		const $container = this.el.querySelector('.ipas .container');
		$container.dataset.key = this.state.id;
		this.audioGroup = new AudioGroup($container);

		this.audioGroup.update({ data: this.state.data });
	}
}
