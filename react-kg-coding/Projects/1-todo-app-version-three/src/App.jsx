import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";  // Correct import path and case
import "./App.css";

function App() {
  const todoItems = [
    {
      name: 'Buy Milk',
      dueDate: '4/10/2023',
    },
    {
      name: 'Go to college',
      dueDate: '4/10/2023',
    },
  ];

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems} /> 
    </center>
  );
}

export default App;
