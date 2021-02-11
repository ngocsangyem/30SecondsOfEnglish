import Store from './store/store';

import Switch from './components/Switch';
import Header from './components/Header';
import Footer from './components/Footer';
import Verbs from './components/Verbs';
import Ipas from './components/Ipas';
import Word from './components/Word';
import Note from './components/Note';
import Senses from './components/Senses';
import Loading from './components/Loading';

export class App {
	state = {};

	constructor(el) {
		this.el = el;

		this.render();
		this.load();
	}

	render() {
		this.switch = new Switch(this.el);
		this.header = new Header(this.el);
		this.word = new Word(this.el);
		this.ipas = new Ipas(this.el);
		this.note = new Note(this.el);
		this.senses = new Senses(this.el);
		this.verbs = new Verbs(this.el);
		this.footer = new Footer(this.el);
		this.loading = new Loading(this.el);
	}

	load() {
		const store = new Store(this.el);

		this.el.addEventListener('appData', (event) => {
			this.state = event.detail;
			this.update(this.state);
		});

		store.load();
	}

	update(next) {
		Object.assign(this.state, next);

		if (this.state) {
			this.loading.disable();
		}

		this.header.update({});
		this.word.update(this.state.word);
		this.ipas.update(this.state.ipas);
		this.note.update(this.state.note);
		this.senses.update(this.state.senses);
		this.verbs.update({
			...this.state.verbs,
			verb_simple:
				Object.keys(this.state.verb_simple).length > 0
					? this.state.verb_simple.data[0]
					: {},
		});
		this.footer.update({});
	}

	static init(el) {
		const index = new App(el);
		return index;
	}
}

(function () {
	App.init(document.getElementById('app'));
})();
