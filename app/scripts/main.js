import Store from './store/store';

import Switch from './components/Switch';
import Header from './components/Header';
import Footer from './components/Footer';
import Verbs from './components/Verbs';
import Ipas from './components/Ipas';
import Word from './components/Word';
import Note from './components/Note';
import Senses from './components/Senses';
import VerbSimple from './components/VerbSimple';

export class App {
	state = {};

	constructor(el) {
		this.el = el;

		// Catch data
		this.load();

		new Switch(el);
		new Header(el);
		this.word = new Word(el);
		this.ipas = new Ipas(el);
		this.note = new Note(el);
		this.senses = new Senses(el);
		this.verbs = new Verbs(el);
		new Footer(el);
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

		this.word.update(this.state.word);
		this.ipas.update(this.state.ipas);
		this.note.update(this.state.note);
		this.senses.update(this.state.senses);
		this.verbs.update({
			...this.state.verbs,
			verb_simple: this.state.verb_simple.data[0],
		});
	}

	static init(el) {
		const index = new App(el);
		return index;
	}
}

(function () {
	App.init(document.getElementById('app'));
})();
