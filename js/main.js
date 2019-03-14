let list = new TaskList();
let tasks = new CompoTaskList({
    element: document.getElementById('tasks'),
    taskList: list
});

let option1 = new Task("premier de la liste", null);
let option2 = new Task("Deuxième  liste", null);
let option3 = new Task("Troisième liste", null);

list.add(option1);
list.add(option2);
list.add(option3);

tasks.render();