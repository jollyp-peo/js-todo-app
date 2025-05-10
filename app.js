const todo = JSON.parse(localStorage.getItem("todo")) || [];

const addTask = () => {
	const inputElem = document.getElementById("task");
	const input = inputElem.value.trim();
	const task = { value: input, completed: false };
	if (!input) return;
	todo.push(task);
	renderTask();
	inputElem.value = "";
};

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
	e.preventDefault();
	addTask();
	updateStat();
});

const saveToStorage = () => {
	localStorage.setItem("todo", JSON.stringify(todo));
};

const renderTask = () => {
	const list = document.querySelector(".task");
	list.innerHTML = "";
	todo
		.map((task, index) => {
			list.innerHTML += `
    <li class="task-item" onchange="toggleCheck(${index})">
      <div class="list ${task.completed ? "completed" : ""}">
            <div class="circle-checkbox">
              <input type="checkbox" name="mark" id="${index}" ${
				task.completed ? "checked" : ""
			}>
              <label for="${index}">
               <i class="bi bi-check"></i>
              </label>
            </div>
            <p>${task.value}</p>
          </div>
          <div class="btns">
            <i class="bi bi-pencil-square edit-btn" onclick="editTask(${index})"></i>
            <i class="bi bi-trash delete-btn" onclick="deleteTask(${index})"></i>
          </div>
        </li>
    `;
		})
		.join("");
	saveToStorage();
};
const toggleCheck = (index) => {
	todo[index].completed = !todo[index].completed;
	console.log(todo);
	renderTask();
	updateStat();
	saveToStorage();
};
const deleteTask = (index) => {
	todo.splice(index, 1);
	renderTask();
	updateStat();
	saveToStorage();
};
const editTask = (index) => {
	const input = document.querySelector("#task");
	input.value = todo[index].value;
	todo.splice(index, 1);
	renderTask();
	updateStat();
	saveToStorage();
};
const updateStat = () => {
	const completed = todo.filter((task) => task.completed).length;
	const total = todo.length;
	const percentage = (completed / total) * 100;
	const progressBar = document.querySelector(".progress");
	progressBar.style.width = `${percentage}%`;
	const stat = document.getElementById("num");
	stat.textContent = `${completed} / ${total}`;
  if(todo.length && completed === total) {
    celebrate();
  }
};

const celebrate = () => {
	const count = 200,
		defaults = {
			origin: { y: 0.7 },
		};

	function fire(particleRatio, opts) {
		confetti(
			Object.assign({}, defaults, opts, {
				particleCount: Math.floor(count * particleRatio),
			})
		);
	}

	fire(0.25, {
		spread: 26,
		startVelocity: 55,
	});

	fire(0.2, {
		spread: 60,
	});

	fire(0.35, {
		spread: 100,
		decay: 0.91,
		scalar: 0.8,
	});

	fire(0.1, {
		spread: 120,
		startVelocity: 25,
		decay: 0.92,
		scalar: 1.2,
	});

	fire(0.1, {
		spread: 120,
		startVelocity: 45,
	});
};

renderTask();
updateStat();
