const getTemplate = () => {
	return `

	<div class="container">
		<form action="" class="header__form">
			<div class="header__inner">
				<div class="header__input" placeholder="введите запрос">
				<input class="header__input" placeholder="поиск ...">
				</div>
			</div>
		</form>
	</div>

	`
}
// метод constructor принимает объект options
export class Header {
  constructor(options) { 
		this.$el = document.querySelector(options)
		this.#render()
	}

	#render() { // # приватный метод
		this.$el.innerHTML = getTemplate()
	}
	
}