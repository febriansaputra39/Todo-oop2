class Task {
  constructor(id, text, completed = false) {
    this.id = id;
    this.text = text;
    this.completed = completed; // default tidak undefined
  }
}

export class Todologic {
  constructor(tasks = []) {
    this.tasks = tasks.map((t) => new Task(t.id, t.text, t.completed));
    this.nextId = tasks.length ? Math.max(...tasks.map((t) => t.id)) + 1 : 1;
  }

  addTask(text) {
    const newTask = new Task(this.nextId, text);
    this.tasks.push(newTask);
    this.nextId++;
  }

  // diganti agar sesuai dengan App.jsx
  toggleDeleteTask(taskId) {
    this.tasks = this.tasks.filter((t) => t.id !== taskId);
  }

  toggleComplete(taskId) {
    const task = this.tasks.find((t) => t.id === taskId);
    if (task) task.completed = !task.completed;
  }

  getTasks() {
    return this.tasks;
  }
}
