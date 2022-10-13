import { HeaderComponent } from "./components/header.component.js";
import { ListsComponent } from "./components/lists.component.js";
import { QuestionsComponent } from "./components/questions.component.js";

new HeaderComponent('header')

const lists = new ListsComponent('lists')
const questions = new QuestionsComponent('questions')

lists.registerLists([
	{name: 'questions', comonent: questions}
])