import { useState } from 'react'
// import './App.css'
import TechWoman from './components/TechWoman'
import { AppRoutes } from './Routes'

function App() {
  const [women, setWomen] = useState<string[]>([
    'Glória',
    'Amanda',
    'Luísa',
    'Marília'
  ])

  function createWoman() {
    setWomen([...women, 'Bianca'])
  }

  return (
    <AppRoutes />
  )
}

export default App
