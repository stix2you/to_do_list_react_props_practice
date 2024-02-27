import { useState } from "react"

export function NewTodoForm({ onSubmit }) {     // props.onSubmit sent from App.jsx, destructured here to onSubmit
  const [newItem, setNewItem] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    if (newItem === "") return

    onSubmit(newItem)     // onSubmit is function that was passed from App.jsx via props

    setNewItem("")
  }

  return (                   // create a form that will update the state of newItem when the input changes
    <form onSubmit={handleSubmit} className="new-item-form">   
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input   // input field that will update the state of newItem when the input changes
          value={newItem}
          onChange={e => setNewItem(e.target.value)}
          type="text"
          id="item"
        />
      </div>
      <button className="btn">Add</button>
    </form>
  )
}