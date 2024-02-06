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
