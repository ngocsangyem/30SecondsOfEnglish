export default class DictionaryHeader {
	$dictionaryHeader = document.querySelector('.dictionary-header');

	templates(word) {
		return `<h1 class="dictionary-name">${word}</h1>`;
	}

	render(response) {
		this.$dictionaryHeader.insertAdjacentHTML(
			'beforeend',
			this.templates(response.word)
		);
	}
}
