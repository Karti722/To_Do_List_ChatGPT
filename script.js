document.addEventListener("DOMContentLoaded", function() {
    const taskList = document.getElementById("taskList");
    const addTaskButton = document.getElementById("addTask");
    const taskInput = document.getElementById("task");

    addTaskButton.addEventListener("click", function() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const taskItem = document.createElement("li");
            taskItem.innerHTML = `
                <span>${taskText}</span>
                <button class="delete">Delete</button>
            `;
            taskList.appendChild(taskItem);
            taskInput.value = "";

            // Add event listener to the delete button
            taskItem.querySelector(".delete").addEventListener("click", function() {
                taskItem.remove();
            });
        }
    });
});
