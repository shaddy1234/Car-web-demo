import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import data from './components/data'
import Car from './components/Car'

function App() {
  const cars = data.map((car) => {
    return <Car key={car.id} {...car} />
  })

  return (
    <div>
      <section className='main'>{cars}</section>
    </div>
  )
}

export default App
