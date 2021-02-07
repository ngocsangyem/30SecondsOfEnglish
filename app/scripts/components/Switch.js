export default class Switch {
	themeSwitch = document.getElementById('themeSwitch');

	constructor() {
		this.handleThemeSwitch();
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
