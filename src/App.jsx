import React from "react";

function App() {
  return (
    <>
      <h1>Todo List</h1>
      <h2>What needs to be done?</h2>
      <div>
        <input type="text"/>
        <button>Add</button>
      </div>
      <div>
        <button>Show all tasks</button>
        <button>Show active tasks</button>
        <button>Show completed tasks</button>
      </div>
      <h2>3 tasks remaining</h2>
      <li>
        <input type="checkbox"/>
        Eat
        <div>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </li>
      <li>
        <input type="checkbox"/>
        Sleep
        <div>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </li>
      <li>
      <input type="checkbox"/>
        Repeat
        <div>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </li>
    </>
  )
}

export default App