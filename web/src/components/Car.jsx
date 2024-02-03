import React from 'react'
import './Car.css'

function Car() {
    return (
        <div className='one'>
            <img src="../images/car-1.jpg" alt="Photo-1" className='car-photo' />
            <div className='car-details'>
                <span>NISSAN NOTE </span>
                <span>2021</span>
            
            <p>Nissan Note comes with a wide range of equipments with some models adopting a 4 Wheel drive system like the one listed above. You still get a large number of safety features making the Nissan Note a very competitive mini Multipurpose van. The safety features include Anti-collision brake assist, Traction control, and lane keep assist. The drivetrain gets you sorted in any kind of terrain especially while offroading.</p>
            <br />
            <hr />
            <span>KES 1,200,000</span>
            <span>AVAILABLE</span>
            </div>
        </div>
    )
}

export default Car
