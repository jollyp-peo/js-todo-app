# 🎯 To-Do List Web App

A simple and responsive to-do list application built with HTML, CSS, and JavaScript. It allows users to add, complete, edit, and delete tasks with persistent local storage. When all tasks are completed, a celebratory confetti animation is triggered.

## 🚀 Features

- ✅ Add tasks via an input form
- 📝 Edit tasks directly in the input field
- ❌ Delete individual tasks
- ☑️ Mark tasks as completed with a checkbox
- 📊 Dynamic progress bar and task stats
- 💾 Persistent data using `localStorage`
- 🎉 Confetti celebration when all tasks are completed

## 📦 Tech Stack

- HTML
- CSS
- JavaScript (Vanilla)
- [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti) (for celebration)

## 📸 Screenshots

![Todo-List](src/Screenshot%20from%202025-05-10%2023-18-31.png)



## 🔧 How It Works

- On form submission, a task is added to the `todo` array and saved to local storage.
- Tasks are rendered dynamically to the DOM with checkboxes and action icons.
- Toggling a checkbox updates the `completed` status and re-renders the UI.
- The progress bar updates as tasks are completed.
- When all tasks are completed, the app launches a confetti celebration.

## 🧠 Key Functions

- `addTask()`: Adds a new task.
- `renderTask()`: Displays tasks from the array to the DOM.
- `toggleCheck(index)`: Toggles task completion status.
- `deleteTask(index)`: Removes a task.
- `editTask(index)`: Edits an existing task.
- `updateStat()`: Updates progress bar and task summary.
- `celebrate()`: Triggers the confetti animation.

## ✅ Getting Started

1. Clone or download the repository.
2. Open `index.html` in a browser.
3. Start adding tasks!

## 📌 Notes

- This app uses browser `localStorage` so your tasks persist even after reloading the page.
- Make sure to serve the app from a local server or deploy it to fully utilize features like the confetti animation (for some browsers).

## 🎨 Customization

- Modify the color scheme in the `:root` section of the CSS.
- Replace icons or animation styles as needed.

## 🛡️ License

This project is open-source and available under the [MIT License](LICENSE).

Feel free to contribute or use it as a starting point for your own projects! 😊

## Author
[Jollyp](https://github.com/jolly-peo)