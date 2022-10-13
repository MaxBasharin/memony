const getTemplate = () => {
	return `
<div>FOOTER</div>
	`
}

export class Footer {
  constructor(options) {
		this.$el = document.querySelector(options)
		

		this.#render()
	}

	#render() { // # приватный метод
		this.$el.innerHTML = getTemplate()
	}
	
}