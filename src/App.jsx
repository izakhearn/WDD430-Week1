import "./styles.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid"; // Import the uuid library
import { todoItem } from "./todoitem";

function App() {
    const [todos, setTodos] = useState("");
    const [todoList, setTodoList] = useState([]);

    const addTodo = () => {
        if (todos === "") {
            return;
        }
        setTodoList([...todoList, { id: uuidv4(), title: todos, completed: false }]); 
        setTodos("");
    };

    const toggleTodo = (id, completed) => {
        setTodoList(todoList.map((todo) => (todo.id === id ? { ...todo, completed } : todo)));
    };

    const removeTodo = (id) => {
        setTodoList(todoList.filter((todo) => todo.id !== id));
    };

    return (
        <div className="App">
            <h1>Todo</h1>
            <input type="text" value={todos} onChange={(e) => setTodos(e.target.value)} />
            <button onClick={addTodo}>Add</button>
            <ul>
                {todoList.map((todo) => todoItem(todo.completed, todo.id, todo.title, toggleTodo, removeTodo))}
            </ul>
        </div>
    );
}

export default App;