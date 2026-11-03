import { useState } from "react"

function TodoForm({ onAddTodo }) {
    const [value, setValue] = useState('')
    function HandleChange(e) {
        setValue(e.target.value)
    }
    function HandleSubmit(e) {
        e.preventDefault()
        if(!value.trim())return
        onAddTodo(value)
        setValue("")

    }
    return (
        <form onSubmit={HandleSubmit}>
            <input type="text" onChange={HandleChange} value={value} />

            <button type="submit">add task</button>

        </form>
    )
}
export default TodoForm