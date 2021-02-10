export default class AudioItem {
	state = {
		id: '',
		local: '',
		spell: '',
		src: '',
	};

	constructor(el) {
		this.el = el;

		this.render();
		this.handleEvents();
	}

	templates() {
		return `
		<button class="audio-button text--xs" type="button">
			<span></span>
			<svg id="Capa_1" enable-background="new 0 0 512.01 512.01" height="512"
				viewBox="0 0 512.01 512.01" width="512" xmlns="http://www.w3.org/2000/svg">
				<g>
					<path
						d="m234.603 46.947-134.809 82.058h-84.794c-8.284 0-15 6.716-15 15v224c0 8.284 6.716 15 15 15h84.794l134.808 82.058c29.996 18.259 68.398-3.311 68.398-38.439v-341.238c0-35.116-38.394-56.703-68.397-38.439zm-204.603 112.058h59v194h-59zm243 267.619c0 11.698-12.787 18.908-22.8 12.813l-131.2-79.862v-207.14l131.2-79.861c9.995-6.084 22.8 1.091 22.8 12.813z" />
					<path
						d="m345.678 217.114c-5.858 5.858-5.858 15.355 0 21.213 9.77 9.771 9.771 25.584 0 35.355-5.858 5.858-5.858 15.355 0 21.213 5.857 5.858 15.355 5.859 21.213 0 21.444-21.444 21.444-56.337 0-77.781-5.858-5.858-15.356-5.858-21.213 0z" />
					<path
						d="m412.146 171.86c-5.857-5.858-15.355-5.858-21.213 0s-5.858 15.355 0 21.213c34.701 34.701 34.701 91.164 0 125.865-5.858 5.858-5.858 15.355 0 21.213 5.857 5.858 15.355 5.859 21.213 0 46.398-46.398 46.398-121.893 0-168.291z" />
					<path
						d="m457.4 126.605c-5.857-5.858-15.355-5.858-21.213 0s-5.858 15.355 0 21.213c60.666 60.666 60.666 155.709 0 216.375-5.858 5.858-5.858 15.355 0 21.213 5.857 5.858 15.355 5.859 21.213 0 72.774-72.774 72.851-185.95 0-258.801z" />
				</g>
			</svg>
		</button>
		<span class="audio-spell"></span>
		<audio src="" type="audio/mpeg"></audio>
		`;
	}

	render() {
		this.el.insertAdjacentHTML('beforeend', this.templates());

		this.$audioButton = this.el.querySelector('.audio-button');
		this.$audioSpell = this.el.querySelector('.audio-spell');
		this.$audio = this.el.querySelector('audio');
	}

	update(next) {
		Object.assign(this.state, next);

		this.$audioButton.querySelector('span').textContent = this.state.local;
		this.$audioSpell.textContent = this.state.spell;
		this.$audio.src = this.state.src;
	}

	handleEvents() {
		this.$audioButton.addEventListener('click', () => {
			this.playAudio();
		});
	}

	playAudio() {
		this.$audio.play();
	}
}
