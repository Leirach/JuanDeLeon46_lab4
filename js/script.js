console.log("running")
let todoList = document.getElementById("todoList")
let submitButton = document.getElementById("submitButton")
let clearButton = document.getElementById("clearButton")
let markButton = document.getElementById("markButton")
let delButton = document.getElementById("delButton")
let inputField = document.getElementById("inputField")

submitButton.addEventListener("click", function(event) {
	event.preventDefault()
	if (inputField.value != null){
		let node = document.createElement("div")
		let check = document.createElement("input")
		check.type = "checkbox"	
		check.style.margin = "3px"
		node.innerText = inputField.value
		inputField.value = ""
		todoList.appendChild(node)
		node.insertAdjacentElement('afterbegin',check)
	}
})

clearButton.addEventListener("click", function(event){
	event.preventDefault()
	for (let i=0; i<todoList.childElementCount; i++) {
		todoList.children[i].getElementsByTagName("input")[0].checked = false
	}
})

markButton.addEventListener("click", function(event){
	event.preventDefault()
	event.preventDefault()
	for (let i=0; i<todoList.childElementCount; i++) {
		todoList.children[i].getElementsByTagName("input")[0].checked = true
	}
})


delButton.addEventListener("click", function(event){
	event.preventDefault()
	todoList.innerHTML = ""
})
