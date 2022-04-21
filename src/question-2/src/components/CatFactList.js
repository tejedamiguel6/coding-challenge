import CatFact from './CatFact'

const CatFactList = ({ catFacts }) => {
  return (
    <div className='container'>
      <ul className='grid'>
        {catFacts.map((fact) => (
          <CatFact fact={fact} />
        ))}
      </ul>
    </div>
  )
}

export default CatFactList
