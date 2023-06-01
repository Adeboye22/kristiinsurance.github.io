import React from 'react';
import './Login.css';
import NavBar from './Onboarding/NavBar'
import BusinessGoals from '../../assets/Business_goals_1.jpg'

function Login() {
  return (
    <div className='Login'>
        <NavBar />
      <section className="lgn-sec">
        <div className="lgn-col-1">
            <img src={BusinessGoals} alt="" className='lgn-img'/>
        </div>
        <div className="logn-col-2">
            <h1 className="lgn-h1">Let's get started</h1>
            <div className="lgn-input">
                <input type="email" name="" id="" placeholder="Enter your username"/>
                <input type="password" name="" id="" placeholder="Password"/>
                <input type="submit" value="Log in" />
            </div>
        </div>
      </section>
    </div>
  )
}

export default Login