import React, { useRef } from 'react';



function AddTodo({ setTodos }) {
    const inputRef = useRef();
  
    function handleAddTodo(event) {
      event.preventDefault();
      const text = event.target.elements.addTodo.value;
      const todo = {
        id: Math.random(),
        text,
        done: false
      };
      setTodos((prevTodos) => {
        return prevTodos.concat(todo);
      });
      inputRef.current.value = "";
    }
  
    return (
      <form onSubmit={handleAddTodo}>
        <input ref={inputRef} name="addTodo" placeholder="Add todo" />
        <button type="submit">Submit</button>
      </form>
    );
  }
  
 export default AddTodo;