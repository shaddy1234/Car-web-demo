import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import Car from './components/Car'

function App() {


  return (
    <>
      <Car
        img="../images/car-1.jpg"
        name='Nissan NOTE'
        YOM='2021'
        transmissionMode='Automatic'
        hp='2700'
        country='Kenyan Used'
        description='Nissan Note comes with a wide range of equipments with some models adopting a 4 Wheel drive system like the one listed above. You still get a large number of safety features making the Nissan Note a very competitive mini Multipurpose van. The safety features include Anti-collision brake assist, Traction control, and lane keep assist. The drivetrain gets you sorted in any kind of terrain especially while offroading.'
        price='1,200,000'
        availability='AVAILABLE'
        stock='OUR STOCK'
      />
    </>
  )
}

export default App
