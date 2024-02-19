import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Toppings from './components/Toppings'
import Table from './components/Table'
import Linted from './components/Linted'

function App() {
  const toppings = [
    "pepperoni",
    "mushrooms",
    "mozzarella",
    "ham",
    "sausage",
    "bacon",
    "black olives",
    "chicken",
    "green peppers",
    "red peppers",
    "hotdog",
    "bacon",
    "spinach",
    "garlic",
    "ham",
    "pineapple",
    "feta",
    "tomatoes",
    "red onion"
  ];

  const [count, setCount] = useState(0)
  const csv = `name,age,town|John Smith,12,Toronto|John Smith,12,Toronto`

  return (
    <>
      <div className="App">
        <Toppings toppings={toppings} />
        <hr />
        <Table csv={csv.replaceAll("|", "\n")} />
        <Linted />
      </div>
    </>
  )
}

export default App
