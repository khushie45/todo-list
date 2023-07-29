import { useEffect, useState } from "react"
import "./styles.css"

export default function App() {
  const [newItem, setNewItem] = useState("")
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue === null) return []
    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  function handleSubmit(e) {
    e.preventDefault()
    if (newItem === "") {
      alert("You must write something!!")
    } else {
      setTodos((currentTodos) => {
        if (newItem === "") {
          alert("Cannot add empty item")
          return [
            ...currentTodos
          ]
        } else {
          return [
          ...currentTodos,
          {
            id: crypto.randomUUID(),
            title: newItem,
            completed: false
          }
          ]  
        }
      })
      setNewItem("")
    }
  } 

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }
        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return ( 
    <div className="main-div">  
      <form onSubmit={handleSubmit} className="new-item-form">
        <h1>Todo List</h1>
        <input value={newItem} onChange={e => setNewItem(e.target.value)}
        type="text" />
        <button className="btn">Add Item</button>
      </form> 
      <ul className="list">
        {todos.length === 0 && "No Todos"}
        {todos.map(todo => {
          return (
            <li key={todo.id}>
            <label>
              <input type="checkbox" checked={todo.completed} onChange={e => toggleTodo(todo.id, e.target.checked)}/>
              {todo.title}
            </label>
            <button onClick={() => deleteTodo(todo.id)} className="btn btn-danger">Delete</button>
          </li>
          )
        })}
    </ul>  
    </div>
  )
}