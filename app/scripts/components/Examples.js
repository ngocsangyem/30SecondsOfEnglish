import ExampleItem from './ExampleItem';

export default class Examples {
	state = {
		examples: [],
	};
	constructor(el) {
		this.el = el;

		this.render();
	}

	templates() {
		return `
			<ul class="examples"></ul>
		`;
	}

	render() {
		this.el.insertAdjacentHTML('beforeend', this.templates());
	}

	update(next) {
		Object.assign(this.state, next);

		const container = this.el.querySelector('.examples');
		const obsolete = new Set(container.children);
		const childrenByKey = new Map();

		obsolete.forEach(function (child) {
			childrenByKey.set(child.dataset.key, child);
		});

		const children = this.state.examples.map((example) => {
			let child = childrenByKey.get(example.id);

			if (child) {
				obsolete.delete(child);
			} else {
				child = document.createElement('div');
				child.classList.add('example-item');
				child.dataset.key = example.id;
				this.exampleItem = new ExampleItem(child);
			}
			this.exampleItem.update({ ...example });
			return child;
		});

		obsolete.forEach((child) => {
			container.removeChild(child);
		});

		children.forEach((child, index) => {
			if (child !== container.children[index]) {
				container.insertBefore(child, container.children[index]);
			}
		});
	}
}
