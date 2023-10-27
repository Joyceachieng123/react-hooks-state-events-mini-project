import React,{useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All"); 
  const [tasks, setTasks] = useState(TASKS);
  
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleTaskAddition = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (taskText) => {
    const updatedTasks = tasks.filter((task) => task.text !== taskText);
    setTasks(updatedTasks);
  };


  const handleTaskFormSubmit = (task) => {
    const updatedTasks = [...tasks, task];
    setTasks(updatedTasks);
  }; 
  const filteredTasks =
  selectedCategory === "All"
    ? tasks
    : tasks.filter((task) => task.category === selectedCategory);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories= {CATEGORIES} selectedCategory={selectedCategory} onCategorySelect={handleCategorySelect} />
      <NewTaskForm categories= {CATEGORIES} onTaskFormSubmit={handleTaskFormSubmit}/>
      <TaskList tasks={filteredTasks} onDelete={handleDeleteTask}  />
    </div>
  );
}

export default App;
