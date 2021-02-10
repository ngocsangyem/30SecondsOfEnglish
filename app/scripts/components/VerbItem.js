import AudioGroup from './AudioGroup';

export default class VerbItem {
	state = {
		id: '',
		sense: '',
		word: '',
		audios: [],
	};

	constructor(el) {
		this.el = el;

		this.render();
	}

	templates() {
		return `
			<p class="verb-tense">
				<span></span> <strong></strong>
			</p>
		`;
	}

	render() {
		this.el.insertAdjacentHTML('beforeend', this.templates());
	}

	update(next) {
		Object.assign(this.state, next);

		const $verbTense = this.el.querySelector('.verb-tense');

		$verbTense.querySelector('span').textContent = this.state.sense;
		$verbTense.querySelector('strong').textContent = this.state.word;
		this.audioGroup = new AudioGroup(this.el);

		this.audioGroup.update({ data: this.state.audios });
	}
}
