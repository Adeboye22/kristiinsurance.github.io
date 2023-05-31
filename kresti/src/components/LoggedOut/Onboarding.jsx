import React from 'react'
import NavBar from './Onboarding/NavBar'
import FootBar from './Onboarding/FootBar';
import './Onboarding.css'

function Onboarding() {
  return (
    <React.Fragment>
        <div className = "Onboarding">
          <div className="Onbd-Overlay">
            <NavBar />
            <h1 className='Onbd-h1'>THE POTENCY OF INSURANCE INTEGRATION</h1>
            <FootBar />
          </div> 
        </div>
    </React.Fragment>

  )
}

export default Onboarding
