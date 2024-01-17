import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [movies, setMovies] = useState([])

  useEffect(() =>{
    fetch('https://ghibliapi.dev/films')
    .then((res) => res.json())
    .then((res) => {
      console.log(res)
      const sgMovies = Object.values(res)
      setMovies(sgMovies)

    })
  }, [])

  const [time, setTime] = useState(new Date())
  useEffect(() =>{
    setInterval(() =>{
      setTime(new Date())
    }, 1000)
  }, [])

  useEffect(() => {
    function getScroll(){
      const currentScroll = document.documentElement.scrollTop;
      console.log(currentScroll)
    }

    document.addEventListener('scroll', getScroll)
  })

  function handleChange(event){
    setCount(Number(event.target.value));
  }

  return (
    <>
      <h1>Week 2</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          +1
        </button>
        <input onChange={handleChange} value={count}></input>
        <button onClick={() => setCount((count) => count - 1)}>
          -1
        </button>
      </div>
      <div>
      <button onClick={() => setCount((count) => count + 10)}>
          +10
        </button>
        <button onClick={() => setCount((count) => count - 10)}>
          -10
        </button>
      </div>

      <h2>Studio Ghibli Movies</h2>
      <ul>
        {movies.map(movie => (
          <li>{movie.title} {movie.release_date}</li>
        ))}
      </ul>
      <h2>Time</h2>
      <time>{time.toTimeString()}</time>
    </>
  )
}

export default App
