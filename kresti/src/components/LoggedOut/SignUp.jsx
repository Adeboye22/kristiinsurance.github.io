import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from './Onboarding/NavBar'
import FootBar from './Onboarding/FootBar'
import './SignUp.css'
import BusinessGoals from '../../assets/Business_goals_2.jpg'

function SignUp() {
  return (
    <div className='SignUp'>
      <NavBar />
      <section className="sgnUp-sec">
        <div className="sgnUp-col-1">
            <img src={BusinessGoals} alt="" className="sgnUp-col-1-img" />
        </div>
        <div className="sgnUp-col-2">
            <h1 className='sgnUp-h1'> Create your account </h1>
            <div className="sgnUp-input">
                <input type="text" name="" id="" placeholder="First Name" className='sgnUp-Fname'/>
                <input type="text" placeholder="Last Name" className='sgnUp-Lname' />
                <input type="email" name="" id="" placeholder="Enter your Email" className='sgnUp-Email' />
                <input type="password" name="" id="" placeholder="Enter a Password" className='sgnUp-pwd-1' />
                <input type="password" name="" id="" placeholder="Confirm Password" className='sgnUp-pwd-2' />
                <input type="submit" value="Continue" className='sgnUp-sbmt' />
            </div>
            <div className="sgnUp-checkBox">
                <input type="checkbox" name="" id="" className='sgnUp-chkBx' />
                <span className='sgn-privacy'>By proceeding, I agree to the <Link className='sgnUp-prv'>Privacy Statement</Link> and <Link className='sgn-terms'>Terms of Service</Link></span>
            </div>
        </div>
      </section>
      <FootBar />
    </div>
  )
}

export default SignUp
