const input = document.querySelector("#input")
const display = document.querySelector(".Tareas")
var tasks = []

function displayTasks() { // Muestra las tareas en pantalla
    let result = ""
    for (let index = 0; index < tasks.length; index++) {
        const element = tasks[index];
        result += `<div id="${index}" class="task">
            <input type="checkbox" onclick="selectTask(${index})">
            <span>${element}</span>
            <button onClick="deleteTask(${index})"><img src="./svg/caneca.svg"></button>
        </div>`
    }
    display.innerHTML = result
}

function addTask() { // Agrega una nueva tarea
    if (input.value.replaceAll(" ","") == "") return
    tasks.push(input.value)
    input.value = ""
    displayTasks()
}

function deleteTask(index) { // Elimina la tarea
    if (index >= 0 && index < tasks.length) tasks.splice(index, 1)
    displayTasks()
}

function selectTask(index) { // Selecciona una tarea
    const task = document.getElementById(index)
    task.classList.toggle("-selected")
}