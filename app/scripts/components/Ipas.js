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
			<section class="ipas"></section>
		`;
	}

	render() {
		this.el.insertAdjacentHTML('beforeend', this.templates());
	}

	update(next) {
		Object.assign(this.state, next);

		const container = this.el.querySelector('.ipas');
		const obsolete = new Set(container.children);
		const childrenByKey = new Map();

		obsolete.forEach(function (child) {
			childrenByKey.set(child.dataset.key, child);
		});

		const children = Object.keys(this.state).map((i) => {
			const ipa = this.state[i];
			let child = childrenByKey.get(ipa.id);

			if (child) {
				obsolete.delete(child);
			} else {
				child = document.createElement('div');
				child.className = 'ipas-container';
				child.dataset.key = ipa.id;

				this.audioGroup = new AudioGroup(child);
			}
			this.audioGroup.update({ data: ipa.data });
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
