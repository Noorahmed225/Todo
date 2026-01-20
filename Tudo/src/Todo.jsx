import React, { useState } from 'react';
import "./Todo.css";

const Todo = () => {

  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);

  // Add task
  const addTask = () => {
    if (input.trim() === "") return;

    setTasks([...tasks, input]);
    setInput("");
  };

  // Delete task
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="Container">
      <h1>Todo list</h1>

      <div className="Inputbox">
        <input
          type="text"
          placeholder="Enter task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="Add" onClick={addTask}>Add</button>
      </div>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
                  {task}
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;


