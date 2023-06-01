import React from 'react'
import {Link} from 'react-router-dom';
import '../Onboarding/NavBar.css'
import Login from '../Login';
import Onboarding from '../Onboarding';
import SignUp from '../SignUp';


function NavBar() {
  return (
    <div>
      <header>
        <Link to="/" element={<Onboarding />} className='navBar-h1'><h1>Kresti Investment LLC</h1></Link>
        <div className='NavBar-col-btn'>
            <Link to = "/Signup" element = {<SignUp />}><button className='sign-up-btn'>Sign up</button></Link>
            <Link  to = "/Login" element = {<Login />}><button className='login-btn'>Log in</button></Link>
        </div>
      </header>
    </div>
  )
}

export default NavBar