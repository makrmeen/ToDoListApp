import "./App.css";
import { useState } from "react";
import  TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo"



function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Practice React", done: true},
    { id: 2, text: "Do some Quests", done: false },
    { id: 3, text: "Find motivation to keep going", done: false },
    { id: 4, text: "Do not cry", done: false }

  ]);
   /*This setTodos function is passed down to our AddTodo component, as a prop of the same name. We'll also destructure setTodos from our props object within AddTodo.  Manage state in React using the useState hook. We call the useState hook up at the top of our component. Once we call useState like a normal function, we will pass in our entire array of todos as our initial data. 
  /*To return/show our list of todos to show it. We create a set of todo data, in an array[].

   Our data is called todos, name prop the same: "todos". 
   We use the equals = operator to set a prop's value as well as a set of {curly} braces. This is because our todos array is a variable (a dynamic value):


  If we wanted to make it a string, for example, we would wrap it in a set of quotes.*/

  return (
    <div>
      <h1>Todo List</h1>
      <TodoList setTodos={setTodos} todos={todos} />
      <AddTodo setTodos={setTodos} />
    </div>
  );
}
// Every component must begin with a capital letter.component with single tag If it doesn't have anything between the two tags = children. Just one tag, it must be self-closing

export default App;
