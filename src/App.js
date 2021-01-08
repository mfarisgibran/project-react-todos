import { useState } from 'react'

export default function App() {
  const [todos, setTodos] = useState([])

  const [todo, setTodo] = useState('')

  const handleChange = (event) => {
    setTodo(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setTodos([...todos, todo])
  }

  return (
    <div>
      <h1>Project React Todo</h1>

      <form onSubmit={handleSubmit}>
        <fieldset>
          <input type="text" name="todo" onChange={handleChange} />
        </fieldset>
        <input type="submit" value="Add todo" />
      </form>

      <ul>
        {todos.map((todo, index) => {
          return <li key={index}>{todo}</li>
        })}
      </ul>
    </div>
  )
}
