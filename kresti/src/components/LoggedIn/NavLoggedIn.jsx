import React from 'react'
import {Link, NavLink} from 'react-router-dom';
import Homepage from './Homepage';
import Services from './Services'
import Contact from './Contact'
import About from './About';
import Register from './Register';

function NavLoggedIn() {
  const navLinkStyle = ({isActive}) => {
    return {
      color: isActive? '#0057ff':'black',
    }
  }
  return (
    <div>
      <header className='flex'>
        <h1>Kresti Investment Agency</h1>
        <nav className='flex'>
            <ul className='flex'>
                <li><NavLink style={navLinkStyle} to = '/Homepage' element = {<Homepage />} className = 'home'>Home</NavLink></li>
                <li><NavLink style={navLinkStyle} to = '/Services' element = {<Services />} className ='services'>Services</NavLink></li>
                <li><NavLink style={navLinkStyle} to = '/Contact' element = {<Contact />} className = 'contact'>Contact Us</NavLink></li>
                <li><NavLink style={navLinkStyle} to = '/About' element = {<About />} className = 'about'>About Us</NavLink></li>
            </ul>
            <div className = 'col-nav-btn'>
              <Link to = '/Register' element = {<Register />}><button className = 'nav-btn-1'>Register</button ></Link>
            </div>
        </nav>
      </header>
    </div>
  )
}


export default NavLoggedIn