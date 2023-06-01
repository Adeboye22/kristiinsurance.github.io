import React from 'react'
import {Link} from 'react-router-dom';
import '../Onboarding/NavBar.css'
import Login from '../Login';


function NavBar() {
  return (
    <div>
      <header>
        <h1>Kresti Investment LLC</h1>
        <div className='NavBar-col-btn'>
            <Link><button className='sign-up-btn'>Sign up</button></Link>
            <Link  to = "/Login" element = {<Login />}><button className='login-btn'>Log in</button></Link>
        </div>
      </header>
    </div>
  )
}

export default NavBar
