import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import Car from './components/Car'

function App() {


  return (
    <div className='main'>
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
      <Car
        img="../images/car-2.jpg"
        name='BMW XE4'
        YOM='2020'
        transmissionMode='Automatic'
        hp='3000'
        country='Kenyan Used'
        description='EN ROUTE TO THE PORT OF MOMBASA! EXPECTED TIME OF ARRIVAL MARCH, 2024.

//                         Specs include a Multifunctional steering wheel, Head up display, memory seats with heating function, rear amrest, sunroof, leather seats, adaptive headlights, analogue instrument cluster, Premium surround sound system, dual zone climate controls, and traction control.'
        price='1,900,000'
        availability='AVAILABLE'
        stock='OUR STOCK'
      />
      <Car
        img="../images/car-3.jpg"
        name='Golf TSI'
        YOM='2023'
        transmissionMode='Automatic'
        hp='3400'
        country='Kenyan Used'
        description='The Golf TSI is specced with a 1.2L turbocharged petrol engine, slightly smaller in displacement from its older brother the TSI 1.4L. It comes with fabric seats, dual zone climate controls, steering wheel controls, android infotainment display screen with an analogue clock on the sleep screen, and a flat bottomed steering wheel.'
        price='3,200,000'
        availability='AVAILABLE'
        stock='OUR STOCK'
      />
      <Car
        img="../images/car-5.jpg"
        name='Audi Q3'
        YOM='2023'
        transmissionMode='Automatic'
        hp='3200'
        country='Kenyan Used'
        description='The Q3 is an excellent German Crossover SUV now in its 2nd Generation since the first began in 2011. Typ F3, 2nd Gen, began in 2018 and still continues until date. They are available in two engine variants, the 1.4L and the 2.0L turbocharged petrol engines. The 2.0L version is available in this unit with a power rating of 197hp and 280Nm of torque driving from 0-100kph in 8 seconds. It is mated to Quattro All Wheel Drive system that gives the reliability of driving all four wheel on demand.</'
        price='5,200,000'
        availability='AVAILABLE'
        stock='OUR STOCK'
      />
      <Car
        img="../images/car-4.jpg"
        name='Range Rover'
        YOM='2020'
        transmissionMode='Automatic'
        hp='4200'
        country='Kenyan Used'
        description='Evoque has been in the market from 2011 with the first production being done by Land Rover LTD until 2012 and the other production years done by Jaguar Land Rover from 2013. It is a subcompact luxury crossover SUV meant for both urban and off-road experiences. It performs well in the city and excels as well offroading as Land Rover has done well in creating a reliable most efficient Terrain Response system including Grass, Gravel, Snow, and Sand modes. It has specially tweaked comfort to the standards Land Rover has maintained over the years and delivers great performance!'
        price='9,800,000'
        availability='AVAILABLE'
        stock='OUR STOCK'
      />
      <Car
        img="../images/car-6.jpg"
        name='VolksWagen Tiguan'
        YOM='2020'
        transmissionMode='Automatic'
        hp='2900'
        country='Kenyan Used'
        description='Tiguan began production in 2007 with the first gen Tiguan being based on the PQ46 platform that was also used in the Passat, Sharan, and Ŝkoda. This platform was initially made for large cars featuring a fully independent suspension on the rear. Volkswagen Tiguan fits the class of perfect crossovers that deliver every other aspect in SUVs by Volkswagen except space. It is also a very good fuel consumer running a 1.4L turbocharged petrol engine which may sound absurd because of the body size but still does a good job.'
        price='3,800,000'
        availability='AVAILABLE'
        stock='OUR STOCK'
      />
      <Car
        img="../images/car-7.jpg"
        name='Mazda CX-5'
        YOM='2022'
        transmissionMode='Automatic'
        hp='2700'
        country='Kenyan Used'
        description='To begin with, Mazda did an elegant design on the Atenza which makes it among the top beautiful designs in a comparable class, in the automobiles industry. Comfort was not left out, driving the Atenza feels like an S-Class of sorts, as bumps or rubles are never a bother. The leather seats that are heated both in the front and the rear coupled with the dual zone climate controls make up a highly enjoyable ride. It goes on to have a retractable blind at the cars rear glass shield. Safety begins with lane keep assist, adaptive cruise control, and Blindspot Monitoring Assist necessary during lane change. What a Car!'
        price='2,800,000'
        availability='AVAILABLE'
        stock='OUR STOCK'
      />
      <Car
        img="../images/car-8.jpg"
        name='Vitz W3'
        YOM='2017'
        transmissionMode='Automatic'
        hp='2100'
        country='Kenyan Used'
        description='Toyota used the Vitz nameplate majorly for the Japanese market and the Yaris for international markets. As a direct consumer of the Japanese market, we got the Vitz nameplate. It has been a very popular car in a lot of markets achieving over 3.5 Million sales in excess of the projected number in over 70 countries. This is the beauty of Japanese engineering!'
        price='850,000'
        availability='AVAILABLE'
        stock='OUR STOCK'
      />
    </div>
  )
}

export default App
