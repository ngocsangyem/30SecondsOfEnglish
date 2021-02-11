import AudioItem from './AudioItem';

export default class AudioGroup {
	state = {
		data: [],
	};

	constructor(el) {
		this.el = el;
	}

	templates() {
		return `
			<div class="audio-group"></div>
		`;
	}

	render() {
		this.el.insertAdjacentHTML('beforeend', this.templates());
	}

	update(next) {
		Object.assign(this.state, next);

		if (this.state.data.length > 0) {
			this.render();

			const container = this.el.querySelector('.audio-group');
			const obsolete = new Set(container.children);
			const childrenByKey = new Map();

			obsolete.forEach(function (child) {
				childrenByKey.set(child.dataset.key, child);
			});

			const children = this.state.data.map((audio) => {
				let child = childrenByKey.get(audio.id);

				if (child) {
					obsolete.delete(child);
				} else {
					child = document.createElement('div');
					child.classList.add('audio-item');
					child.classList.add(`audio-${audio.local.toLowerCase()}`);
					child.dataset.key = audio.id;
					this.audioItem = new AudioItem(child);
				}
				this.audioItem.update({ ...audio });
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
}
