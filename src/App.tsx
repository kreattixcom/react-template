import { useState } from 'react'

const App = () => {
  const [count, setCount] = useState<number>(0)

  function increament() {
    setCount((prev) => prev + 1)
  }

  return <button onClick={increament}>Count is {count}</button>
}

export default App
