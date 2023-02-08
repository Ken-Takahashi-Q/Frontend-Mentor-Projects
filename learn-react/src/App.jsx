import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import MyButton from '../components/MyButton'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("John")
  
  const user = {
    firstName: "John",
    lastName: "Doe",
    imgPic: ""
  }

  const [ifTrue, setIfTrue] = useState(true);

  const product = [
    {title: 'Cabbage', id: 1},
    {title: 'Garlic', id: 2},
    {title: 'Apple', id: 3}
  ];

  function handleClick() {
    setCount(count + 1)
  }

  return (
    <div className="App">
      <h1 style={{color: "gray"}}>Welcome to my app</h1>
      <p>{count}</p>
      <p>My name is {user.firstName} {user.lastName}</p>
      <button onClick={handleClick}>Increase</button>
      <MyButton /><br />

      {ifTrue ? "It's true" : "No, False"}

      <ul>
        {product.map(item => {
          <li key={item.id}>{item.title}</li>
        })}
      </ul>
    </div>
  )
}

export default App
