import { useState } from "react";
import { Todologic } from "./Todologic";
import "./App.css";

const initialTasks = [];
const initialLogic = new Todologic(initialTasks);
function App() {
  const [todoLogic, setTodoLogic] = useState(initialLogic);
  const [input, setInput] = useState("");

  const updateLogic = (a) => {
    const newLogic = new Todologic(todoLogic.getTasks());
    a(newLogic);
    setTodoLogic(newLogic);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;
    updateLogic((logic) => logic.addTask(input));
    setInput("");
  };

  const handleDelete = (id) => {
    updateLogic((logic) => logic.toggleDeleteTask(id));
  };
  const handleComplete = (id) => {
    updateLogic((logic) => logic.toggleComplete(id));
  };
  return (
    <div className="toto-app">
      <h1>To-Do List</h1>
      <form onSubmit={handleAdd} className="todo-form">
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ketiikan apa yang ingin di lakukan" />
        <button type="submit">Tambah</button>
      </form>
      <ul className="todo-list">
        {todoLogic.getTasks().map((t) => (
          <li key={t.id} className={t.completed ? "completed" : ""}>
            <span onClick={() => handleComplete(t.id)}>{t.text}</span>
            <button onClick={() => handleDelete(t.id)}>🗑️</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
