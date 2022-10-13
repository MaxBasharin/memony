import {Component} from '../core/component.js'

export class ListsComponent extends Component {
	constructor(id) {
		super(id)

		this.lists = []
	}
	init() {
		this.$el.addEventListener('click', listClickHandler.bind(this))
	}

	registerLists(lists) {
		this.lists = lists
	}
}

function listClickHandler(event) {
	event.preventDefault()
	if (event.target.classList.contains('list__item')) {
		Array.from(this.$el.querySelectorAll('.list__item')).forEach(list__item => {
			list__item.classList.remove('active')
		})
		event.target.classList.add('active')

		const activeList = this.lists.find(t => t.num === event.target.dataset.num)
		console.log(activeList)
	}
}