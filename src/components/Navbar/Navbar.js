import '../Navbar/Navbar.css'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'


function Navbar() {

    const [active , setActive] = useState(false)

    const handleActive = () => setActive(!active)

    return ( 
        <nav className="navbar">
            <div className="nav-container">
                
                <h1 className="Logo"><NavLink to="/">Riya Paul</NavLink></h1>
                
                <ul className={active ? "NavLinks active" : "NavLinks" }>
                    <li><NavLink onClick={handleActive} exact to="/" className="pageactive">Home</NavLink></li>
                    <li><NavLink onClick={handleActive} to="/about">About</NavLink></li>
                    <li><NavLink onClick={handleActive} to="/photos">Photos</NavLink></li>
                    <li><NavLink onClick={handleActive} to="/publications">Publications</NavLink></li>
                </ul>

                <div className="nav-icon" onClick={handleActive}>
                    <i className={active ? "fas fa-times" : "fas fa-bars"}></i>
                </div>

            </div>
        </nav>
    );
}
 
export default Navbar; 