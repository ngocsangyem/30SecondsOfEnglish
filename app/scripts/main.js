import Switch from './components/Switch';
import Header from './components/Header';
import Footer from './components/Footer';
import Dictionary from './components/Dictionary';
import Verbs from './components/Verbs';

export class App {
	totalSource = 50;

	constructor(el) {
		this.el = el;

		new Switch(el);
		new Header(el);
		new Dictionary(el);
		new Verbs(el);
		new Footer(el);
		this.getSource();
	}

	templates() {
		return `

		`;
	}

	randomSource() {
		return Math.floor(Math.random() * this.totalSource);
	}

	getSource() {
	}

	static init(el) {
		const index = new App(el);
		return index;
	}
}

(function () {
	App.init(document.getElementById('app'));
})();
