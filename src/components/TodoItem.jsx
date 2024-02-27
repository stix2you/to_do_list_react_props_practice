export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {    // <-- Destructure all the props passed form TodoList.jsx to use for Item UI
    return (
      <li>
        <label>
          <input
            type="checkbox"
            checked={completed}
            onChange={e => toggleTodo(id, e.target.checked)}
          />
          {title}
        </label>
        <button onClick={() => deleteTodo(id)} className="btn btn-danger">
          Delete
        </button>
      </li>
    )
  }