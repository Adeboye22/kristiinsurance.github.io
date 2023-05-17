import React from 'react'
import {Link, NavLink} from 'react-router-dom';
import './Navigation.css';
import Home from './Home';
import Services from './Services'
import Contact from './Contact'
import About from './About';

function Navigation() {
  return (
    <div>
      <header>
        <h1>Kresti Investment LLC</h1>
        <nav>
            <ul>
                <li><Link to = '/' element = {<Home />} className = 'home'>Home</Link></li>
                <li><Link to = '/Services' element = {<Services />} className ='services'>Services</Link></li>
                <li><Link to = '/Contact' element = {<Contact />} className = 'contact'>Contact Us</Link></li>
                <li><Link to = '/About' element = {<About />} className = 'about'>About US</Link></li>
            </ul>
            <div className = 'col-nav-btn'>
              <Link to = ''><button className = 'nav-btn-1'>Register</button ></Link>
              <Link to = ''><button className = 'nav-btn-2'>Log In</button></Link>
            </div>
        </nav>
      </header>
    </div>
  )
}


export default Navigation