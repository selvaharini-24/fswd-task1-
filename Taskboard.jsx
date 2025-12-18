import React, { useState } from "react";

function TaskDashboard() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;

    setTasks([...tasks, task]);
    setTask("");
  };

  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div style={styles.container}>
      <h2>📝 Task List Dashboard</h2>

      <div style={styles.inputBox}>
        <input
          type="text"
          placeholder="Enter a task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          style={styles.input}
        />
        <button onClick={addTask} style={styles.addBtn}>
          Add
        </button>
      </div>

      {tasks.length === 0 ? (
        <p style={styles.empty}>No tasks added yet.</p>
      ) : (
        <ul style={styles.list}>
          {tasks.map((t, index) => (
            <li key={index} style={styles.item}>
              {t}
              <button
                onClick={() => removeTask(index)}
                style={styles.deleteBtn}
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const styles = {
  container: {
    width: "400px",
    margin: "50px auto",
    padding: "20px",
    background: "#f4f6f8",
    borderRadius: "10px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
    fontFamily: "Arial"
  },
  inputBox: {
    display: "flex",
    marginBottom: "15px"
  },
  input: {
    flex: 1,
    padding: "8px",
    fontSize: "16px"
  },
  addBtn: {
    padding: "8px 15px",
    marginLeft: "5px",
    background: "#007bff",
    color: "white",
    border: "none",
    cursor: "pointer"
  },
  list: {
    listStyle: "none",
    padding: 0
  },
  item: {
    background: "white",
    padding: "10px",
    marginBottom: "8px",
    display: "flex",
    justifyContent: "space-between",
    borderRadius: "5px"
  },
  deleteBtn: {
    background: "transparent",
    border: "none",
    cursor: "pointer",
    fontSize: "16px"
  },
  empty: {
    textAlign: "center",
    color: "#666"
  }
};

export default TaskDashboard;
