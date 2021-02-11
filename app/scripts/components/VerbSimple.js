import AudioGroup from './AudioGroup';
import { toDashCase } from '../utils/toDashCase';

export default class VerbSimple {
	state = {
		sense: '',
		plural: {
			id: '',
			text: '',
			word: '',
			audios: [],
		},
		singular: {
			id: '',
			text: '',
			word: '',
			audios: [],
		},
	};

	constructor(el) {
		this.el = el;
	}

	templates() {
		return `
			<div class="table-item present-simple text--sm">
				<p class="verb-tense">
				</p>
				<div class="verb-plural">
					<span class="verb-prefix">
						<span></span>
						<strong>go</strong>
					</span>
				</div>
				<div class="verb-singular">
					<span class="verb-prefix">
						<span></span>
						<strong>go</strong>
					</span>
				</div>
			</div>
		`;
	}

	render() {
		this.el.insertAdjacentHTML('afterbegin', this.templates());

		this.$sense = this.el.querySelector('.verb-tense');
		this.$verbPlural = this.el.querySelector('.verb-plural');
		this.$verbSingular = this.el.querySelector('.verb-singular');
	}

	update(next) {
		Object.assign(this.state, next);

		this.render();

		if (Object.keys(this.state).length === 0) return;

		this.audioGroupPlural = new AudioGroup(this.$verbPlural);
		this.audioGroupSingular = new AudioGroup(this.$verbSingular);

		this.$sense.textContent = this.state.sense;
		this.$verbPlural.querySelector(
			'.verb-prefix span'
		).textContent = this.state.plural.text;
		this.$verbPlural.querySelector(
			'.verb-prefix strong'
		).textContent = this.state.plural.word;
		this.$verbSingular.querySelector(
			'.verb-prefix span'
		).textContent = this.state.singular.text;
		this.$verbSingular.querySelector(
			'.verb-prefix strong'
		).textContent = this.state.singular.word;

		this.audioGroupPlural.update({ data: this.state.plural.audios });
		this.audioGroupSingular.update({ data: this.state.singular.audios });
	}
}
