import React from 'react'
import '../Onboarding/NavBar.css'

function NavBar() {
  return (
    <div>
      <header>
        <h1>Kresti Investment LLC</h1>
        <div className='NavBar-col-btn'>
            <button className='sign-up-btn'>Sign up</button>
            <button className='login-btn'>Log in</button>
        </div>
      </header>
    </div>
  )
}

export default NavBar
