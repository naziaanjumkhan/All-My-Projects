import React, { useState } from "react";

const Todo = () => {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault()
    if(newTodo){
        setTodos([...todos, {text:newTodo, completed:false}])
        setNewTodo('')
    }

  }

  const handleDelete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed
    setTodos(newTodos)
  };


  return (
    <div>
      <div className="main">
      <h1>Todo App</h1>
      <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        placeholder="Add New Todo" 
        value={newTodo}
        onChange={(e)=> setNewTodo(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>

      <ul>
      
        {
            todos.map((todo,index)=>(
            <li key={index}>
            <span style={{ textDecoration : todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
            <br/>
            <button onClick={()=>handleDelete(index)}>Delete</button>
            </li>
        ))}
    
      </ul>
      </div>

      
    </div>
  );
};

export default Todo;
