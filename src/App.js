import { useState } from 'react'

export default function App() {
  const [todos, setTodos] = useState([
    'Reading documentation',
    'Attending online class',
    'Going out with friends',
  ])

  const [todo, setTodo] = useState('')

  const handleChange = (event) => {
    setTodo(event.target.value)
  }

  const handleSubmit = (event) => {
    setTodos([...todos, todo])
  }

  return (
    <div>
      <h1>Project React Todo</h1>

      <form>
        <fieldset>
          <input type="text" name="todo" onChange={handleChange} />
          <code>{todo}</code>
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
