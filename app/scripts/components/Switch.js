export default class Switch {
	constructor(el) {
		this.el = el;
		this.render()
		this.handleThemeSwitch();
	}

	templates() {
		return `
		<div class="switch">
			<input class="switch__input" type="checkbox" id="themeSwitch">
			<label aria-hidden="true" class="switch__label" for="themeSwitch">On</label>
			<div aria-hidden="true" class="switch__marker"></div>
		</div>
		`;
	}

	render() {
		this.el.insertAdjacentHTML('afterbegin', this.templates());
		this.themeSwitch = this.el.querySelector('#themeSwitch');
	}

	initTheme() {
		const darkThemeSelected =
			localStorage.getItem('themeSwitch') !== null &&
			localStorage.getItem('themeSwitch') === 'dark';
		// update checkbox
		this.themeSwitch.checked = darkThemeSelected;
		// update body data-theme attribute
		darkThemeSelected
			? document.body.setAttribute('data-theme', 'dark')
			: document.body.removeAttribute('data-theme');
	}

	resetTheme() {
		if (this.themeSwitch.checked) {
			// dark theme has been selected
			document.body.setAttribute('data-theme', 'dark');
			localStorage.setItem('themeSwitch', 'dark');
		} else {
			document.body.removeAttribute('data-theme');
			localStorage.removeItem('themeSwitch');
		}
	}

	handleThemeSwitch() {
		this.initTheme(); // if user has already selected a specific theme -> apply it
		this.themeSwitch.addEventListener('change', () => {
			this.resetTheme();
		});
	}
	
}
