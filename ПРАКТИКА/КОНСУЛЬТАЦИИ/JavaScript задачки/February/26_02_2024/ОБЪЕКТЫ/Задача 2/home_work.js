// Задача 2: "Менеджер задач"
// Вы разрабатываете простой менеджер задач. 
// Вам нужно создать объект, который будет представлять список задач,
// В объекте должны быть методы для добавления новой задачи, удаления задачи и отметки задачи как выполненной.
// Пример const taskManager = new TaskManager(); 
// taskManager.addTask("Помыть посуду"); taskManager.addTask("Выучить JavaScript"); 
// taskManager.completeTask("Выучить JavaScript"); 
// taskManager.showTasks(); 



let managerTasks = function () {
    let numTask = 0, countActiveTasks = 0, countCompleteTasks = 0;
    let tasksList = '', tasksCompleteList = '', taskChangeList = ' ';
    let objTasks = {
        tasks: [],
        completedTasks: [],
    };

    // Добавление новой задачи
    // Ввод количества активных задач
    countActiveTasks = Number(prompt("Введите количество задач:", 3));
    for (let i = 0; i < countActiveTasks; i++) {
        Object.values(objTasks.tasks.push(prompt("Введите новую задачу: ", "Помыть посуду")));
        tasksList += `${i + 1}. ${Object.values(objTasks.tasks)[i]}\n`
    }

    // Отметить выполненным задачу
    // Ввод количества задач, которые завершены
    countCompleteTasks = Number(prompt("Введите количество задач, которые завершены:", 2));
    for (let i = 0; i < countCompleteTasks; i++) {
        Object.values(objTasks.completedTasks.push(prompt("Список активных задач:\n" + tasksList + "\nСписок выполненных задач:\n" + tasksCompleteList + "\nНапишите номер задачи которую отметить выполненной:")));
        numTask = Number(Object.values(objTasks.completedTasks)[i] - 1);
        taskChangeList = "";
        for (let j = 0; j < Object.keys(objTasks.tasks).length; j++) {
            if (numTask == j) {
                tasksCompleteList += `${i + 1}. ${Object.values(objTasks.tasks)[numTask]}\n`;
                Object.values(objTasks.tasks.splice(numTask, 1));
            }
            if (Object.values(objTasks.tasks)[j] != undefined) {
                taskChangeList += `${j + 1}. ${Object.values(objTasks.tasks)[j]}\n`;
            }
        }
        tasksList = `${taskChangeList}\n`;
    }
    numTask = 0;

    // Удалить задачу
    let stateFlag = confirm("Список активных задач:\n" + tasksList + "Список выполненных задач:\n" + tasksCompleteList + "\nУдалить задачу?");
    if (stateFlag == true) {
        numTask  = Number(prompt("Список активных задач:\n" + tasksList + "\nСписок выполненных задач:\n" + tasksCompleteList + "\nНапишите номер задачи которую нужно удалить:"));
         numTask -= 1;
         taskChangeList = "";
        for (let j = 0; j < Object.keys(objTasks.tasks).length; j++) {
            if (numTask == j) {
                Object.values(objTasks.tasks.splice(numTask, 1));
            }
            if (Object.values(objTasks.tasks)[j] != undefined) {
                taskChangeList += `${j + 1}. ${Object.values(objTasks.tasks)[j]}\n`;
            }
        }
        tasksList = `${taskChangeList}\n`;
        return `Список активных задач:\n${tasksList} Список выполненных задач:\n${tasksCompleteList}`;
    }
    else{
        return `Список активных задач:\n${tasksList} Список выполненных задач:\n${tasksCompleteList}`;
    }
}

alert(managerTasks());