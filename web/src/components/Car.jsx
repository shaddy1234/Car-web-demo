import React from 'react'
import './Car.css'
import './data'

function Car(props) {
    return (
        <div className='one'>
            <img src="../images/car-1.jpg" alt="Photo-1" className='car-photo' />
            <div className='car-details'>
                <span>{props.name} </span>
                <span>2021</span>
                <div className='moves'>
                    <button>Automatic</button>
                    <button>2700CC</button>
                    <button>Kenyan Used</button>
                </div>

                <p>Nissan Note comes with a wide range of equipments with some models adopting a 4 Wheel drive system like the one listed above. You still get a large number of safety features making the Nissan Note a very competitive mini Multipurpose van. The safety features include Anti-collision brake assist, Traction control, and lane keep assist. The drivetrain gets you sorted in any kind of terrain especially while offroading.</p>
                <br />
                <hr />
                <div className='bottom'>
                    <span>KES 1,200,000</span>
                    <button className='availability'>AVAILABLE</button>
                    <button className='stock'> OUR STOCK</button>
                </div>
            </div>
        </div>
    )
}

export default Car
