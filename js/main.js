function addTask(form) {
	// create reused variables
	var task = form.usertask.value,
		text = document.createTextNode(task),
		element = document.createElement('li')
	// append user value to the created li
	element.appendChild(text)
	// post this element var to the current tasks
	document.getElementById("current-tasks").appendChild(element)
}