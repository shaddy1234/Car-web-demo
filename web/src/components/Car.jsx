import React from 'react'
import './Car.css'
import './data'

function Car(props) {
    return (
        <div className='main'>
            <div className='one'>
                <img src={props.img} alt="Photo-1" className='car-photo' />
                <div className='car-details'>
                    <span>{props.name} </span>
                    <span>{props.YOM}</span>
                    <div className='moves'>
                        <button>{props.transmissionMode}</button>
                        <button>{props.hp}CC</button>
                        <button>{props.country}</button>
                    </div>

                    <div className='paragraph'>{props.description}</div>
                    <br />
                    <hr />
                    <div className='bottom'>
                        <span>KES {props.price}</span>
                        <button className='availability'>{props.availability}</button>
                        <button className='stock'>{props.stock}</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Car


// <div className='one'>
//                 <img src="../images/car-2.jpg" alt="Photo-1" className='car-photo' />
//                 <div className='car-details'>
//                     <span>BMW XE4 </span>
//                     <span>2020</span>
//                     <div className='moves'>
//                         <button>Automatic</button>
//                         <button>3000CC</button>
//                         <button>Kenyan Used</button>
//                     </div>

//                     <div className='paragraph'>EN ROUTE TO THE PORT OF MOMBASA! EXPECTED TIME OF ARRIVAL MARCH, 2024.

//                         Specs include a Multifunctional steering wheel, Head up display, memory seats with heating function, rear amrest, sunroof, leather seats, adaptive headlights, analogue instrument cluster, Premium surround sound system, dual zone climate controls, and traction control.</div>
//                     <br />
// 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
//                     <hr />
//                     <div className='bottom'>
//                         <span>KES 1,900,000</span>
//                         <button className='availability'>AVAILABLE</button>
//                         <button className='stock'>OUR STOCK</button>
//                     </div>
//                 </div>
//             </div>
//             <div className='one'>
//                 <img src="../images/car-3.jpg" alt="Photo-1" className='car-photo' />
//                 <div className='car-details'>
//                     <span>Golf TSI </span>
//                     <span>2023</span>
//                     <div className='moves'>
//                         <button>Automatic</button>
//                         <button>3400CC</button>
//                         <button>Kenyan Used</button>
//                     </div>

//                     <div className='paragraph'>The Golf TSI is specced with a 1.2L turbocharged petrol engine, slightly smaller in displacement from its older brother the TSI 1.4L. It comes with fabric seats, dual zone climate controls, steering wheel controls, android infotainment display screen with an analogue clock on the sleep screen, and a flat bottomed steering wheel.</div>
//                     <br />
//                     <hr />
//                     <div className='bottom'>
//                         <span>KES 3,200,000</span>
//                         <button className='availability'>AVAILABLE</button>
//                         <button className='stock'>OUR STOCK</button>
//                     </div>
//                 </div>
//             </div>
//             <div className='one'>
//                 <img src="../images/car-5.jpg" alt="Photo-1" className='car-photo' />
//                 <div className='car-details'>
//                     <span>Audi Q3 </span>
//                     <span>2023</span>
//                     <div className='moves'>
//                         <button>Automatic</button>
//                         <button>3200CC</button>
//                         <button>Kenyan Used</button>
//                     </div>

//                     <div className='paragraph'>The Q3 is an excellent German Crossover SUV now in its 2nd Generation since the first began in 2011. Typ F3, 2nd Gen, began in 2018 and still continues until date. They are available in two engine variants, the 1.4L and the 2.0L turbocharged petrol engines. The 2.0L version is available in this unit with a power rating of 197hp and 280Nm of torque driving from 0-100kph in 8 seconds. It is mated to Quattro All Wheel Drive system that gives the reliability of driving all four wheel on demand.</div>
//                     <br />
//                     <hr />
//                     <div className='bottom'>
//                         <span>KES 5,200,000</span>
//                         <button className='availability'>AVAILABLE</button>
//                         <button className='stock'>OUR STOCK</button>
//                     </div>
//                 </div>
//             </div>
//             <div className='one'>
//                 <img src="../images/car-4.jpg" alt="Photo-1" className='car-photo' />
//                 <div className='car-details'>
//                     <span>Range Rover</span>
//                     <span>2020</span>
//                     <div className='moves'>
//                         <button>Automatic</button>
//                         <button>4200CC</button>
//                         <button>Kenyan Used</button>
//                     </div>

//                     <div className='paragraph'>Evoque has been in the market from 2011 with the first production being done by Land Rover LTD until 2012 and the other production years done by Jaguar Land Rover from 2013. It is a subcompact luxury crossover SUV meant for both urban and off-road experiences. It performs well in the city and excels as well offroading as Land Rover has done well in creating a reliable most efficient Terrain Response system including Grass, Gravel, Snow, and Sand modes. It has specially tweaked comfort to the standards Land Rover has maintained over the years and delivers great performance!</div>
//                     <br />
//                     <hr />
//                     <div className='bottom'>
//                         <span>KES 9,800,000</span>
//                         <button className='availability'>AVAILABLE</button>
//                         <button className='stock'> OUR STOCK</button>
//                     </div>
//                 </div>
//             </div>
//             <div className='one'>
//                 <img src="../images/car-6.jpg" alt="Photo-1" className='car-photo' />
//                 <div className='car-details'>
//                     <span>VolksWagen Tiguan</span>
//                     <span>2020</span>
//                     <div className='moves'>
//                         <button>Automatic</button>
//                         <button>2900CC</button>
//                         <button>Kenyan Used</button>
//                     </div>

//                     <div className='paragraph'>Tiguan began production in 2007 with the first gen Tiguan being based on the PQ46 platform that was also used in the Passat, Sharan, and Ŝkoda. This platform was initially made for large cars featuring a fully independent suspension on the rear. Volkswagen Tiguan fits the class of perfect crossovers that deliver every other aspect in SUVs by Volkswagen except space. It is also a very good fuel consumer running a 1.4L turbocharged petrol engine which may sound absurd because of the body size but still does a good job.</div>
//                     <br />
//                     <hr />
//                     <div className='bottom'>
//                         <span>KES 3,700,000</span>
//                         <button className='availability'>AVAILABLE</button>
//                         <button className='stock'> OUR STOCK</button>
//                     </div>
//                 </div>
//             </div>
//             <div className='one'>
//                 <img src="../images/car-7.jpg" alt="Photo-1" className='car-photo' />
//                 <div className='car-details'>
//                     <span>Mazda CX-5 </span>
//                     <span>2022</span>
//                     <div className='moves'>
//                         <button>Automatic</button>
//                         <button>2700CC</button>
//                         <button>Kenyan Used</button>
//                     </div>

//                     <div className='paragraph'>To begin with, Mazda did an elegant design on the Atenza which makes it among the top beautiful designs in a comparable class, in the automobiles industry. Comfort was not left out, driving the Atenza feels like an S-Class of sorts, as bumps or rubles are never a bother. The leather seats that are heated both in the front and the rear coupled with the dual zone climate controls make up a highly enjoyable ride. It goes on to have a retractable blind at the car's rear glass shield. Safety begins with lane keep assist, adaptive cruise control, and Blindspot Monitoring Assist necessary during lane change. What a Car!</div>
//                     <br />
//                     <hr />
//                     <div className='bottom'>
//                         <span>KES 2,800,000</span>
//                         <button className='availability'>AVAILABLE</button>
//                         <button className='stock'> OUR STOCK</button>
//                     </div>
//                 </div>
//             </div>
//             <div className='one'>
//                 <img src="../images/car-8.jpg" alt="Photo-1" className='car-photo' />
//                 <div className='car-details'>
//                     <span>Vitz W3</span>
//                     <span>2017</span>
//                     <div className='moves'>
//                         <button>Automatic</button>
//                         <button>2100CC</button>
//                         <button>Kenyan Used</button>
//                     </div>

//                     <div className='paragraph'>Toyota used the Vitz nameplate majorly for the Japanese market and the Yaris for international markets. As a direct consumer of the Japanese market, we got the Vitz nameplate. It has been a very popular car in a lot of markets achieving over 3.5 Million sales in excess of the projected number in over 70 countries. This is the beauty of Japanese engineering!</div>
//                     <br />
//                     <hr />
//                     <div className='bottom'>
//                         <span>KES 850,000</span>
//                         <button className='availability'>AVAILABLE</button>
//                         <button className='stock'> OUR STOCK</button>
//                     </div>
//                 </div>
//             </div>
