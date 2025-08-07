 import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get('/api/jokes')
    .then((responce) => {
      setJokes(responce.data)
    })
    .catch((error) => {
      console.log(error);   
    })
  })

  return (
    <>
    <h1>Ummsi-With-FullStack</h1>
    <p>Jokes: {jokes.length}</p>

    {
    jokes.map((joke) => (
        <div key={joke.id}>
          <h3>{joke.joke}</h3>
          <p>{joke.content}</p>
        </div>
      ))
    }
    </>
  )
}

export default App
