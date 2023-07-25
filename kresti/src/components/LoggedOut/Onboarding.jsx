import React from 'react'
import NavBar from './Onboarding/NavBar'
import FootBar from './Onboarding/FootBar';
import './Onboarding.css'

function Onboarding() {
  return (
    <div className = "Onboarding">
      <div className="Onbd-Overlay">
        <NavBar />
        <div className="Onbd-txt">
          <span className='Onbd-spn'></span>
        </div>
        <FootBar />
      </div> 
    </div>
  )
}

export default Onboarding
