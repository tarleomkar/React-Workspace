import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import Todoitem1 from "./components/Todoitem1";
import TodoItem2 from "./components/TodoItem2";
import "./App.css"

function App() {
  return (
    <center className="todo-container">
      <AppName/>
      <AddTodo/>
      <div className="items-container"></div>
      <Todoitem1/>
      <TodoItem2></TodoItem2>
    </center>
  );
}

export default App;