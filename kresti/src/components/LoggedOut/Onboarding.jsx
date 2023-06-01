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
            <div className="Onbd-txt">
              <span className='Onbd-spn'></span>
            </div>
            <FootBar />
          </div> 
        </div>
    </React.Fragment>

  )
}

export default Onboarding
