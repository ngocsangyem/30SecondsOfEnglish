import WordItem from './WordItem';

export default class Word {
	state = {
		name: '',
		id: '',
		lexicalCategory: '',
	};

	constructor(el) {
		this.el = el;

		this.render();
	}

	templates() {
		return `
		<section class="word">
			<div class="container"></div>
		</section>
		`;
	}

	render() {
		this.el.insertAdjacentHTML('beforeend', this.templates());
	}

	update(next) {
		Object.assign(this.state, next);

		const container = this.el.querySelector('.word .container');
		const obsolete = new Set(container.children);
		const childrenByKey = new Map();

		obsolete.forEach(function (child) {
			childrenByKey.set(child.dataset.key, child);
		});

		const children = Object.keys(this.state).map((d) => {
			const word = this.state[d];
			console.log(
				'🚀 ~ file: Word.js ~ line 41 ~ Word ~ children ~ word',
				word
			);
			let child = childrenByKey.get(word.id);

			if (child) {
				obsolete.delete(child);
			} else {
				child = document.createElement('div');
				child.className = 'container';
				child.dataset.key = word.id;

				this.wordItem = new WordItem(child);
			}

			this.wordItem.update({
				...word,
			});
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

{
	/* <div class="note">
<p class="text--sm">Been is used as the past participle of go when somebody has gone somewhere
	and
	come back.</p>
</div>
<div class="senses">
<p class="senses-meaning text--sm">
	<strong>Meaning: </strong>
	<span>Move from one place to another; travel.</span>
</p>
<div class="senses-examples text--sm">
	<strong>Examples: </strong>
	<ul>
		<li class="example">I have to go to Rome on business.</li>
		<li class="example">She has gone to China (= is now in China or is on her way there).</li>
		<li class="example">She has been to China (= she went to China and has now returned).</li>
		<li class="example">Are you going home for Christmas?</li>
	</ul>
</div>
</div> */
}
