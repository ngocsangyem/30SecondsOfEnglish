import Store from './store/store';

import Switch from './components/Switch';
import Header from './components/Header';
import Footer from './components/Footer';
import Verbs from './components/Verbs';
import Ipas from './components/Ipas';
import Word from './components/Word';

export class App {
	state = {};

	constructor(el) {
		this.el = el;

		new Switch(el);
		new Header(el);
		// new Verbs(el);
		this.word = new Word(el);
		new Footer(el);

		// Catch data
		this.load();
	}

	load() {
		const store = new Store(this.el);

		this.el.addEventListener('appData', (event) => {
			this.update(event.detail);
		});

		store.load();
	}

	update(next) {
		Object.assign(this.state, next);

		this.word.update(this.state.word);
	}

	static init(el) {
		const index = new App(el);
		return index;
	}
}

(function () {
	App.init(document.getElementById('app'));
})();
