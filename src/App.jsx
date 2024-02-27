import { useEffect, useState } from "react"
import { NewTodoForm } from "./components/NewTodoForm"
import { TodoList } from "./components/TodoList"

export default function App() {
    const [todos, setTodos] = useState(() => {            // <-- Initialize state with a function, todos is stat variable, setTodos is a function
        const localValue = localStorage.getItem("ITEMS")    // <-- Get the value from local storage
        if (localValue == null) return []                   // <-- If there is no value, return an empty array

        return JSON.parse(localValue)                       // <-- Otherwise, parse the value and return it
    })

    useEffect(() => {
        localStorage.setItem("ITEMS", JSON.stringify(todos))    // <-- Function to run when the todos change, saves the todos to local storage
    }, [todos])             // <-- Run this effect whenever the todos change, dependencies array

    function addTodo(title) {
        setTodos(currentTodos => {   // <-- Use the function form of setState to update the todos
            return [
                ...currentTodos,    // <-- Spread in the current todos
                { id: crypto.randomUUID(), title, completed: false },    // <-- Add a new todo object to the end of the array
            ]
        })
    }

    function toggleTodo(id, completed) {        // <-- Function to toggle the completed property of a todo
        setTodos(currentTodos => {                  // <-- Use the function form of setState to update the todos
            return currentTodos.map(todo => {           // <-- Map over the todos
                if (todo.id === id) {                 // <-- If the todo has the matching id
                    return { ...todo, completed }    // <-- Update the completed property by creating a new object
                }

                return todo
            })
        })
    }

    function deleteTodo(id) {                               // <-- Function to delete a todo
        setTodos(currentTodos => {                              // <-- Use the function form of setState to update the todos
            return currentTodos.filter(todo => todo.id !== id)    // <-- Filter out the todo with the matching id
        })
    }

    return (
        <>
            <NewTodoForm onSubmit={addTodo} />   
            <h1 className="header">Todo List</h1>
            <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
        </>
    )
}