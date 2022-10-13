const getTemplate = () => {
	return `
  <div class="modal-content">
	<div class="modal-header">
	<span class="close">&times;</span>
	<h2>Название</h2>
</div>
<form class="modal-body">
	<div class="form-floating">
		<input type="text" class="modal-input" id="floatingName" placeholder="|">
	</div>
</form>
<div class="modal-footer">
	<button class="btn btn-save" id="btnClose" type="button">
		Сохранить
	</button>
</div>
  </div>
	`
}
// метод constructor принимает объект options
export class Modal {
	constructor(options) {
		this.$el = document.querySelector(options)
		this.#render()

		this.$el = document.getElementById('modal');
		var btn = document.getElementById("myBtn");
		var span = document.getElementsByClassName("close")[0];
		var btnclose = document.getElementById("btnClose");

		btn.onclick = function () {
			modal.style.display = "block";
		}
		span.onclick = function () {
			modal.style.display = "none";
		}
		window.onclick = function (event) {
			if (event.target == modal) {
				modal.style.display = "none";
			}
		}


		btnclose.onclick = function () {
			const contactValues = document.querySelectorAll('.modal-input')
			let contacts = []
			for (let i = 0; i < contactValues.length; i++) {
				contacts.push({
					value: contactValues[i].value
				});
			}
			console.log(contacts)
		}
	}

	#render() { // # приватный метод
		this.$el.innerHTML = getTemplate()
	}

}