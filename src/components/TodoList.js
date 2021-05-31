/* Every component we make must return JSX elements and components */
import DeleteTodo from './DeleteTodo'


function TodoList({ todos, setTodos }) {
  function handleToggleTodo(todo) {
    const updatedTodos = todos.map((t) =>
      t.id === todo.id
        ? {
            ...t,
            done: !t.done
          }
        : t
    );
    setTodos(updatedTodos);
  }

  if (!todos.length) {
    return <p>No todos left!</p>;
  }

  return (
    <ul>
      {todos.map((todo) => (
        <li
          onDoubleClick={() => handleToggleTodo(todo)}
          style={{
            textDecoration: todo.done ? "line-through" : ""
          }}
          key={todo.id}
        >
          {todo.text}
          <DeleteTodo todo={todo} setTodos={setTodos} />
        </li>
      ))}
    </ul>
  );
}


export default TodoList;

//...
    
/*if a todo's id is equal to the one we clicked on, just update that todo's done value to its opposite, otherwise, do nothing (return it)
      const updatedTodos = todos.map((t) =>
      t.id === todo.id
        ? {
            ...t,
            done: !t.done
          }
        : t
      );
      setTodos(updatedTodos);
  }

  if (!todos.length) {
    return <p>No todos left!</p>;
  }
      
  return (
  /*To map over array items with to display each of these list items, we can take the array that is on props.todos.
To display this within TodoList, we once again need to use a set of curly braces to display Using props.todo.map, we will map over this array just like we would a normal JavaScript array.
    <ul>
    {todos.map((todo) => (
  /*Childs in the list should have a "unique key prop. To keep track of the order of each of the items in our list. Use a unique identifier, a unique value that is only associated with one piece of data. In our case, todo.id. If we were to update a todo's text or done value, the key is what tells React which todo item needs to be updated
    <li
      onClick={() => handleToggleTodo(todo)}
/*onClick prop gives an element to register that event. In this case, it's the li element.To connect it to a function to handle our click event. We' call handleToggleTodo and create it within our TodoList component. Our function to handle the event doesn't receive any event data. This function updates our todo's state.

We want handleToggleTodo to go through the todos array and see if the one that the user has clicked on exists in our array. If so, its done value can be toggled to the opposite boolean value.

To receive the appropriate todo data for  list item that is clicked on, we can call handleToggleTodo as an inline arrow function and pass the todo data as an argument:
      style={{
       textDecoration: todo.done ? "line-through" : ""
      }}
/*If we change one of our todos array to have a done value of true, we see that that style rule is applied                   
      key={todo.id}
     >
     {todo.text}
    
     <DeleteTodo todo={todo} setTodos={setTodos} />
    </li>
    ))}
    </ul>
  );
}
/*Within our inner function, we get access to each todo's data. To display that data, we can take each todo which we know is an object. We can use a set of curly braces to output the dynamic value of whatever is on todo.text.*/
