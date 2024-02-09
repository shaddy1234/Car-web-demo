import React from 'react'
import './Car.css'

function Navbar() {
  return (
    <div>
        <header className="header">
            <img 
                src="../images/logo.png" 
                className="header--image"
            />
            <h2 className="header--title">Kim's Web</h2>

            <div >
                <ul className='navbar'>
                    <li><a href="#">Vehicles In our Yard</a></li>
                    <li><a href="#">Vehicles Outside our Stock</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </header>
    </div>
  )
}

export default Navbar
