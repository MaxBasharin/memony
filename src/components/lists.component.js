import {Component} from '../core/component.js'

export class ListsComponent extends Component {
	constructor(id) {
		super(id)
	}
	init() {
		this.$el.addEventListener('click', listClickHandler.bind(this))
	}
}

function listClickHandler(event) {
	if (event.target.classList.contains('list__item')) {
		console.log(event.target)
	}
}