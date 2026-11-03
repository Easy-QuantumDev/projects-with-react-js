import { useState } from "react"
import TodoForm from "./Components/TodoForm";

function App() {

    const [todos, setTodos] = useState([])

    function AddTodo(title) {
        const newTodo = {
            id: Date.now(),
            title: title,
            completed: false
        };
        setTodos(prev => [...prev, newTodo])
    }
    function DeleteTodo(id) {
        setTodos(prev => prev.filter(todo => todo.id !== id))
    }
    function ToggleTodo(id) {
        setTodos(prev => prev.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completed: !todo.completed
                }
            }
            return todo
        }))
    }
    return (
        <div>
            <TodoForm onAddTodo={AddTodo} />
            {todos.map((task) => {
                return (


                    <div key={task.id}>

                        <h1>{task.title}</h1>
                        <button onClick={() => DeleteTodo(task.id)}>delete task</button>
                        <button onClick={() => ToggleTodo(task.id)}>{task.completed ? "Undo" : "Complete"}</button>
                    </div>
                )
            })}

        </div>
    )
}
export default App