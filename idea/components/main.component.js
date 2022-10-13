const getTemplate = () => {
	return `

	<div class="container">
	<button id="myBtn">Открыть окно</button>
</div>

	`
}

export class Main {
	constructor(options) {
		this.$el = document.querySelector(options)
		this.#render()
	}
	#render() { // # приватный метод
		this.$el.innerHTML = getTemplate()
	}
	
}