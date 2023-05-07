import { useState } from 'react'
import '../App.css'
import TechWoman from './TechWoman'

export function TechWomanList() {
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
    <>
      {women.map((mulher) => {
        return <TechWoman name={mulher} />
      })}

      <button onClick={createWoman}>
        Adicionar nome
      </button>
    </>
  )
}

