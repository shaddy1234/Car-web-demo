import React from 'react'
import './Car.css'
import './data'

function Car() {
    return (
        <div className='main'>
            <div className='one'>
                <img src="../images/car-1.jpg" alt="Photo-1" className='car-photo' />
                <div className='car-details'>
                    <span>Nissan NOTE </span>
                    <span>2021</span>
                    <div className='moves'>
                        <button>Automatic</button>
                        <button>2700CC</button>
                        <button>Kenyan Used</button>
                    </div>

                    <div className='paragraph'>Nissan Note comes with a wide range of equipments with some models adopting a 4 Wheel drive system like the one listed above. You still get a large number of safety features making the Nissan Note a very competitive mini Multipurpose van. The safety features include Anti-collision brake assist, Traction control, and lane keep assist. The drivetrain gets you sorted in any kind of terrain especially while offroading.</div>
                    <br />
                    <hr />
                    <div className='bottom'>
                        <span>KES 1,200,000</span>
                        <button className='availability'>AVAILABLE</button>
                        <button className='stock'> OUR STOCK</button>
                    </div>
                </div>
            </div>
            <div className='one'>
                <img src="../images/car-2.jpg" alt="Photo-1" className='car-photo' />
                <div className='car-details'>
                    <span>BMW XE4 </span>
                    <span>2020</span>
                    <div className='moves'>
                        <button>Automatic</button>
                        <button>3000CC</button>
                        <button>Kenyan Used</button>
                    </div>

                    <div className='paragraph'>EN ROUTE TO THE PORT OF MOMBASA! EXPECTED TIME OF ARRIVAL MARCH, 2024.

                        Specs include a Multifunctional steering wheel, Head up display, memory seats with heating function, rear amrest, sunroof, leather seats, adaptive headlights, analogue instrument cluster, Premium surround sound system, dual zone climate controls, and traction control.</div>
                    <br />
                    <hr />
                    <div className='bottom'>
                        <span>KES 1,900,000</span>
                        <button className='availability'>AVAILABLE</button>
                        <button className='stock'>OUR STOCK</button>
                    </div>
                </div>
            </div>
            <div className='one'>
                <img src="../images/car-3.jpg" alt="Photo-1" className='car-photo' />
                <div className='car-details'>
                    <span>Audi Q5 </span>
                    <span>2023</span>
                    <div className='moves'>
                        <button>Automatic</button>
                        <button>3200CC</button>
                        <button>Kenyan Used</button>
                    </div>

                    <div className='paragraph'>NEN ROUTE TO THE PORT OF MOMBASA! EXPECTED TIME OF ARRIVAL 16th MARCH, 2024.

                        Specs include a Quattro AWD setup, Powered heated, half leather seats, Multifunctional steering wheel, Bang & Olufsen premium surround sound system, dual zone climate controls, adaptive cruise control, Blindspot Monitoring Assist, and Lane keep assist.</div>
                    <br />
                    <hr />
                    <div className='bottom'>
                        <span>KES 2,200,000</span>
                        <button className='availability'>AVAILABLE</button>
                        <button className='stock'>FOREIGN STOCK</button>
                    </div>
                </div>
            </div>
            <div className='one'>
                <img src="../images/car-3.jpg" alt="Photo-1" className='car-photo' />
                <div className='car-details'>
                    <span>Audi Q5 </span>
                    <span>2023</span>
                    <div className='moves'>
                        <button>Automatic</button>
                        <button>3200CC</button>
                        <button>Kenyan Used</button>
                    </div>

                    <div className='paragraph'>NEN ROUTE TO THE PORT OF MOMBASA! EXPECTED TIME OF ARRIVAL 16th MARCH, 2024.

                        Specs include a Quattro AWD setup, Powered heated, half leather seats, Multifunctional steering wheel, Bang & Olufsen premium surround sound system, dual zone climate controls, adaptive cruise control, Blindspot Monitoring Assist, and Lane keep assist.</div>
                    <br />
                    <hr />
                    <div className='bottom'>
                        <span>KES 2,200,000</span>
                        <button className='availability'>AVAILABLE</button>
                        <button className='stock'>FOREIGN STOCK</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Car
