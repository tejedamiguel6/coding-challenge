import { useState, useEffect } from 'react'
import './App.css'

import CatFactList from './components/CatFactList'

function App() {
  const [catFacts, setCatFact] = useState([])

  useEffect(() => {
    const fetchCatFacts = async () => {
      const catFacts = await fetch(`https://catfact.ninja/facts?limit=9`)
      const res = await catFacts.json()
      // console.log(res.data, 'render')

      const sortingAlphabetica = res.data.sort((a, b) => {
        return a.fact === b.fact ? 0 : a.fact < b.fact ? 1 : -1
      })
      setCatFact(sortingAlphabetica)
    }

    fetchCatFacts()
  }, [])

  return (
    <div className='container'>
      <div>
        <h2 style={{ textAlign: 'center' }}>Cat Facts</h2>
        <CatFactList catFacts={catFacts} />
      </div>
    </div>
  )
}

export default App
