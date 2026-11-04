
import { useState } from "react";
import TodoForm from "./Components/TodoForm";
import "./App.css";

function App() {
    const [todos, setTodos] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const [editValue, setEditValue] = useState("");
    
    const [searchValue,setSearchValue] = useState("")
    const [filterValue,setFilterValue] = useState("all")


    function AddTodo(title) {
        const newTodo = {
            id: Date.now(),
            title: title,
            completed: false
        };

        setTodos(prev => [...prev, newTodo]);
    }

    function DeleteTodo(id) {
        setTodos(prev => prev.filter(todo => todo.id !== id));
    }

    function ToggleTodo(id) {
        setTodos(prev => prev.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completed: !todo.completed
                };
            }
            return todo;
        }));
    }

    function EditTodo(id, newTitle) {
        setTodos(prev => prev.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    title: newTitle
                };
            }
            return todo;
        }));
    }

    function showEditInput(task) {
        setEditingId(task.id);
        setEditValue(task.title);
    }

    function SaveEdit(id) {
        if (!editValue.trim()) return;

        EditTodo(id, editValue.trim());
        setEditingId(null);
        setEditValue("");
    }

    function CancelEdit() {
        setEditingId(null);
        setEditValue("");
    }

    const searchTodos = todos.filter((task)=>{
        return task.title.toLowerCase().includes(searchValue.toLocaleLowerCase())
    })
    const completedCount = todos.filter(todo => todo.completed).length;

    return (
        <main className="app-container">
            <div className="todo-wrapper">

                <header className="app-header">
                    <span className="app-label">PRODUCTIVITY APP</span>
                    <h1>My Todo List<span>.</span></h1>
                    <p>Organize your day, one task at a time.</p>
                </header>

                <section className="todo-card">

                    <div className="todo-stats">
                        <div>
                            <span>Total Tasks</span>
                            <strong>{todos.length}</strong>
                        </div>

                        <div>
                            <span>Completed</span>
                            <strong>{completedCount}</strong>
                        </div>

                        <div>
                            <span>Remaining</span>
                            <strong>{todos.length - completedCount}</strong>
                        </div>
                    </div>

                    <TodoForm onAddTodo={AddTodo} />

                    <div className="task-section">
                        <h2>Your Tasks</h2>

                        {todos.length === 0 ? (
                            <div className="empty-state">
                                <span>✦</span>
                                <h3>No tasks yet!</h3>
                                <p>Add your first task and get started.</p>
                            </div>
                        ) : (
                            <div className="task-list">
                                <input type="search" value={searchValue} />
                                {todos.map(task => (
                                    <div
                                        className={`task-item ${task.completed ? "completed" : ""}`}
                                        key={task.id}
                                    >
                                        {editingId === task.id ? (
                                            <div className="edit-container">
                                                <input
                                                    value={editValue}
                                                    onChange={e => setEditValue(e.target.value)}
                                                    onKeyDown={e => {
                                                        if (e.key === "Enter") SaveEdit(task.id);
                                                        if (e.key === "Escape") CancelEdit();
                                                    }}
                                                    autoFocus
                                                />

                                                <button className="save-btn" onClick={() => SaveEdit(task.id)}>
                                                    Save
                                                </button>

                                                <button className="cancel-btn" onClick={CancelEdit}>
                                                    Cancel
                                                </button>
                                            </div>
                                        ) : (
                                            <>
                                                <div className="task-info">
                                                    <button
                                                        className="check-btn"
                                                        onClick={() => ToggleTodo(task.id)}
                                                    >
                                                        {task.completed ? "✓" : ""}
                                                    </button>

                                                    <span className="task-title">
                                                        {task.title}
                                                    </span>
                                                </div>

                                                <div className="task-actions">
                                                    <button
                                                        className="edit-btn"
                                                        onClick={() => showEditInput(task)}
                                                    >
                                                        Edit
                                                    </button>

                                                    <button
                                                        className="delete-btn"
                                                        onClick={() => DeleteTodo(task.id)}
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </section>

                <footer>
                    Built with React <span>♥</span>
                </footer>

            </div>
        </main>
    );
}

export default App;
