import VerbItem from './VerbItem';
import VerbSimple from './VerbSimple';
import { toDashCase } from '../utils/toDashCase';
export default class Verbs {
	state = {
		id: '',
		data: [],
		verb_simple: {},
	};
	tableName = 'Verb Forms';

	constructor(el) {
		this.el = el;

		this.render();
	}

	templates() {
		return `
		<section class="verbs table">
			<div class="container table-container">
				<header class="table-header">
					<h2 class="text--md"></h2>
				</header>
				<div class="table-content"></div>
			</div>
		</section>
		`;
	}

	render() {
		this.el.insertAdjacentHTML('beforeend', this.templates());
	}

	update(next) {
		Object.assign(this.state, next);

		if (Object.keys(this.state).length === 0) return;

		const $tableHeader = this.el.querySelector('.table-header h2');
		const $tableContent = this.el.querySelector('.table-content');
		const obsolete = new Set($tableContent.children);
		const childrenByKey = new Map();

		$tableHeader.textContent = this.tableName;

		obsolete.forEach(function (child) {
			childrenByKey.set(child.dataset.key, child);
		});

		const children = this.state.data.map((verb) => {
			let child = childrenByKey.get(verb.id);

			if (child) {
				obsolete.delete(child);
			} else {
				child = document.createElement('div');
				child.classList.add('table-item');
				child.classList.add('text--sm');
				child.classList.add(toDashCase(verb.sense));
				child.dataset.key = verb.id;
				this.verbItem = new VerbItem(child);
			}
			this.verbItem.update({ ...verb });
			return child;
		});

		obsolete.forEach((child) => {
			$tableContent.removeChild(child);
		});

		children.forEach((child, index) => {
			if (child !== $tableContent.children[index]) {
				$tableContent.insertBefore(
					child,
					$tableContent.children[index]
				);
			}
		});

		this.verbSimple = new VerbSimple($tableContent);
		this.verbSimple.update(this.state.verb_simple);
	}
}
