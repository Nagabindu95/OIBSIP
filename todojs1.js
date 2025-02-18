// Initialize task storage for pending and completed tasks
let tasks = {
    pending: [],
    completed: []
};

// Function to add a new task
function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if (taskText === "") return;

    let task = {
        text: taskText,
        time: new Date().toLocaleString(),
        completed: false
    };

    // Add task to pending tasks list
    tasks.pending.push(task);

    taskInput.value = ""; // Clear input field

    // Refresh task display
    showTasks("pending");
}

// Function to mark task as completed
function markComplete(button) {
    let taskText = button.parentElement.parentElement.innerText.split("✔")[0].trim();

    // Find and move task from pending to completed
    let task = tasks.pending.find(task => task.text === taskText);
    if (task) {
        task.completed = true;
        tasks.pending = tasks.pending.filter(task => task.text !== taskText);
        tasks.completed.push(task);
    }

    // Refresh task display
    showTasks("pending");
    showTasks("completed");
}

// Function to delete a task
function deleteTask(button) {
    let taskText = button.parentElement.parentElement.innerText.split("✔")[0].trim();

    tasks.pending = tasks.pending.filter(task => task.text !== taskText);
    tasks.completed = tasks.completed.filter(task => task.text !== taskText);

    // Refresh task display
    showTasks("pending");
    showTasks("completed");
}

// Function to display tasks in either "pending" or "completed"
function showTasks(type) {
    let taskList = document.getElementById(type + "Tasks");
    let taskArray = tasks[type];

    taskList.innerHTML = ""; // Clear the list before updating

    taskArray.forEach(task => {
        let li = document.createElement("li");
        li.innerHTML = `
            ${task.text} <span style="font-size: 0.8rem;">(${task.time})</span>
            <div class="task-buttons">
                ${type === "pending" ? `<button onclick="markComplete(this)">✔</button>` : ""}
                <button onclick="deleteTask(this)">🗑</button>
            </div>
        `;
        taskList.appendChild(li);
    });

    // Show the corresponding task section
    document.querySelectorAll('.task-list').forEach((list) => {
        list.style.display = "none";
    });
    document.getElementById(type + "Tasks").parentElement.style.display = "block";
}
