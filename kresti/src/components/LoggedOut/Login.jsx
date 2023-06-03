import React from 'react';
import './Login.css';
import NavBar from './Onboarding/NavBar';
import KrestiPadlock from '../../assets/Kresti_padlock.gif';
import FootBar from './Onboarding/FootBar';
import { Link } from 'react-router-dom';
import SignUp from './SignUp';

function Login() {
  return (
    <div className='Login'>
        <NavBar />
      <section className="lgn-sec">
        <div className="lgn-col-1">
            <img src={KrestiPadlock} alt="" className='lgn-img'/>
        </div>
        <div className="lgn-col-2">
            <h1 className="lgn-h1">Let's get started</h1>
            <div className="lgn-input">
                <input type="email" name="" id="" placeholder="Enter your username" className='lgn-uName'/>
                <input type="password" name="" id="" placeholder="Password" className='lgn-pwd'/>
                <input type="button" value="Log in" className='lgn-btn'/>
            </div>
            <div className="lgn-hr">
                <hr className='lgn-hr-1'/> <span className="lgn-hr-spn"> Don't have an account? </span> <hr className='lgn-hr-2'/>
            </div>
            <div className="lgn-sgn">
                <span className="lgn-spn-1">Click <Link to='/signup' element={SignUp} className='lgn-spn-2-lnk'>here</Link> to signup with us today.</span>
            </div>
            
        </div>
      </section>
      <FootBar />
    </div>
  )
}

export default Login
