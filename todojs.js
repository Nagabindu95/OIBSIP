let tasks = {
    pending: [],
    completed: []
};

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    let task = {
        text: taskText,
        time: new Date().toLocaleString()
    };

    tasks.pending.push(task);
    taskInput.value = "";
    showTasks("pending");
}

function markComplete(taskText) {
    let taskIndex = tasks.pending.findIndex(task => task.text === taskText);
    if (taskIndex !== -1) {
        let task = tasks.pending.splice(taskIndex, 1)[0];
        tasks.completed.push(task);
    }

    showTasks("pending");
    showTasks("completed");
}

function deleteTask(taskText, type) {
    tasks[type] = tasks[type].filter(task => task.text !== taskText);
    showTasks(type);
}

function showTasks(type) {
    let taskList = document.getElementById(type + "Tasks");
    let taskArray = tasks[type];

    taskList.innerHTML = ""; // Clear the task list

    if (taskArray.length === 0) {
        taskList.innerHTML = `<li>No ${type} tasks available.</li>`;
    } else {
        taskArray.forEach(task => {
            let li = document.createElement("li");
            li.innerHTML = `
                <span class="task-text">${task.text}</span>
                <span style="font-size: 0.8rem; color: #ccc;">(${task.time})</span>
                <div class="task-buttons">
                    ${type === "pending" ? `<button onclick="markComplete('${task.text}')">✔</button>` : ""}
                    <button onclick="deleteTask('${task.text}', '${type}')">🗑</button>
                </div>
            `;
            taskList.appendChild(li);
        });
    }

    document.getElementById("pendingTasksContainer").style.display = type === "pending" ? "block" : "none";
    document.getElementById("completedTasksContainer").style.display = type === "completed" ? "block" : "none";
}
