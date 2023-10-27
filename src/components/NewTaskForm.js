import React,{useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [taskText, setTaskText] = useState("");
  const [taskCategory, setTaskCategory] = useState(categories[0]);
  
  const handleTextChange = (e) => {
    setTaskText(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setTaskCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onTaskFormSubmit && typeof onTaskFormSubmit === 'function') {
    onTaskFormSubmit({ text: taskText, category: taskCategory });
    }
    setTaskText("");
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={taskText} onChange={handleTextChange}/>
      </label>
      <label>
        Category
        <select name="category" value={taskCategory} onChange={handleCategoryChange}>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
