import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";
import AddTask from "./components/AddTask";
function App() {
  const [tasks, setTask] = useState([
    {
      id: 1,
      text: "meet a friend",
      day: "5 may",
      reminder: true
    },
    {
      id: 2,
      text: "meet a doctor",
      day: "8 may",
      reminder: true
    },
    {
      id: 3,
      text: "buy for home",
      day: "10 may",
      reminder: false
    }
  ])

  const deleteTask = (id) => {
    setTask(tasks.filter((item) => item.id !== id))
  }
  const reminderToggle = (id) => {
    setTask(tasks.map((item) =>
      item.id === id ? { ...item, reminder: !item.reminder } : item
    ))
  }
  const addTask = (newtask) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const tasktosave = { id, ...newtask }
    setTask([...tasks, tasktosave])
  }
  return (
    <div className="App">
      <Header title="Task Manager Header" />
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ?
        <Tasks tasks={tasks} onDelete={deleteTask} onreminde={reminderToggle} />
        :
        "Nothing Task To Show!"}
    </div>
  );
}

export default App;
