import React from 'react'
import {Link, NavLink} from 'react-router-dom';
import './Navigation.css';
import Home from './Home';
import Services from './Services'
import Contact from './Contact'
import About from './About';
import Login from './Login';
import Register from './Register';

function Navigation() {
  const navLinkStyle = ({isActive}) => {
    return {
      color: isActive? '#0057ff':'black',
    }
  }
  return (
    <div>
      <header>
        <h1>Kresti Investment LLC</h1>
        <nav>
            <ul>
                <li><NavLink style={navLinkStyle} to = '/' element = {<Home />} className = 'home'>Home</NavLink></li>
                <li><NavLink style={navLinkStyle} to = '/Services' element = {<Services />} className ='services'>Services</NavLink></li>
                <li><NavLink style={navLinkStyle} to = '/Contact' element = {<Contact />} className = 'contact'>Contact Us</NavLink></li>
                <li><NavLink style={navLinkStyle} to = '/About' element = {<About />} className = 'about'>About Us</NavLink></li>
            </ul>
            <div className = 'col-nav-btn'>
              <Link to = '/Register' element = {<Register />}><button className = 'nav-btn-1'>Register</button ></Link>
              <Link to = '/Login' element = {<Login />}><button className = 'nav-btn-2'>Log In</button></Link>
            </div>
        </nav>
      </header>
    </div>
  )
}


export default Navigation