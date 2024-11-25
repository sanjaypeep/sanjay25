// script.js
// Add Event Listener for the Add Task Button
document.getElementById("add-task-btn").addEventListener("click", function () {
    const title = document.getElementById("task-title").value;
    const date = document.getElementById("task-date").value;
    const time = document.getElementById("task-time").value;
  
    if (title && date && time) {
      // Create a new task element
      const taskDisplay = document.getElementById("task-display");
      const taskItem = document.createElement("li");
      taskItem.innerHTML = `
        <span>${title}</span>
        <span>${date} @ ${time}</span>
      `;
  
      // Append the task to the list
      taskDisplay.appendChild(taskItem);
  
      // Clear input fields
      document.getElementById("task-title").value = "";
      document.getElementById("task-date").value = "";
      document.getElementById("task-time").value = "";
    } else {
      alert("Please fill in all fields to add a task.");
    }
  });
  
  
  // Toggle between tasks and settings view
  const settingsBtn = document.getElementById('settings-btn');
  const tasksSection = document.getElementById('tasks-section');
  const settingsSection = document.getElementById('settings-section');
  
  settingsBtn.addEventListener('click', () => {
    tasksSection.classList.add('hidden');
    settingsSection.classList.remove('hidden');
  });
  
  // Handle country and language changes
  const countrySelect = document.getElementById('country-select');
  const languageSelect = document.getElementById('language-select');
  
  countrySelect.addEventListener('change', () => {
    alert(`Country changed to: ${countrySelect.value}`);
  });
  
  languageSelect.addEventListener('change', () => {
    alert(`Language changed to: ${languageSelect.value}`);
  });