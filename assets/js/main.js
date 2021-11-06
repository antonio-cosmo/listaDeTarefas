
(function(){

	const input = document.querySelector('.form-in')
	const listTasks = document.querySelector('.list-task')

	const btnDelete = () => {
	  const btn = document.createElement('button')
	  btn.classList.add('delete')
	  btn.innerText = 'deletar'
	  return btn
	}

	const createLi = (valor) => {
		const li = document.createElement('li')
		li.classList.add('task')
		li.innerHTML = `<p>${valor}</>`
		const btn = btnDelete()
		li.appendChild(btn)
	  listTasks.appendChild(li)
	}

	const clearInput = () => {
	  input.value = ''
	  input.focus()
	}

	const createTask = (e) => {
	  e.preventDefault()
		createLi(input.value)
	  clearInput()
		saveTask()
	}

	document.addEventListener('click', e => {
	  const el = e.target
	  if (!input.value) {
	    e.preventDefault()
	    input.focus()
	  } else if (el.classList.contains('btn-new')) {
	    createTask(e,input.value)
	  }

	  if (el.classList.contains('delete')) {
	    el.parentElement.remove()
			saveTask()
	  }
	})

	const saveTask = () => {
		const liTask = listTasks.querySelectorAll('.task');
		const listOfTask = [];
	
		for (let task of liTask) {
			let taskText = task.innerText;
			taskText = taskText.replace('deletar', '').trim();
			listOfTask.push(taskText);
		}
	
		const taskJSON = JSON.stringify(listOfTask);
		localStorage.setItem('task', taskJSON);
	}

	const addTaskSave = () => {
		const tasks = localStorage.getItem('task');
		const listOfTask = JSON.parse(tasks);
	
		for(let task of listOfTask) {
			createLi(task);
		}
	}

	addTaskSave()

})()
