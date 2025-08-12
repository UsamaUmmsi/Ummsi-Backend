import { useEffect, useState } from 'react';
import './App.css';
import axios from "axios";

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
  },[])

  return (
    <>
    <div className="container">
    <h1>Ummsi-With-FullStack</h1>
    <p>JOKES: {jokes.length}</p>
    {
    jokes.map((joke) => (
        <div key={joke.id}>
          <h3>{joke.joke}</h3>
          <p>{joke.content}</p>
        </div>
      ))
    }
    </div>
    </>
  )
}

export default App
