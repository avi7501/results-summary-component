import { useState } from 'react'
import './App.css'
import ResultsSummaryCard from './components/ResultsSummaryCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ResultsSummaryCard/>
    </>
  )
}

export default App
