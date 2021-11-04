
(function(){
	const btnNew = document.querySelector('.btn-new')
	const input = document.querySelector('.form-in')
	const list = document.querySelector('.list-task')

	const createLi = () => {
	  const li = document.createElement('li')
	  li.classList.add('task')
	  return li
	}
	const btnDelete = () => {
	  const btn = document.createElement('button')
	  btn.classList.add('delete')
	  btn.innerText = 'deletar'
	  return btn
	}
	const clearInput = () => {
	  input.value = ''
	  input.focus()
	}
	const createTask = e => {
	  e.preventDefault()
	  const valor = input.value
	  const li = createLi()
	  const btn = btnDelete()
	  li.innerHTML = `<p>${valor}</>`
	  li.appendChild(btn)
	  list.appendChild(li)
	  clearInput()
	}

	document.addEventListener('click', e => {
	  const el = e.target
	  if (!input.value) {
	    e.preventDefault()
	    input.focus()
	  } else if (el.classList.contains('btn-new')) {
	    createTask(e)
	  }

	  if (el.classList.contains('delete')) {
	    el.parentElement.remove()
	  }
	})
})()
