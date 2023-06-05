import React from 'react';
import './ForgotPass.css';

function ForgotPass() {
  return (
    <div className='ForgotPass'>
      <section className="fgtPwd">
        <div className="fgtPwd-col-1">
            <h2>Reset Password</h2>
        </div>
        <div className="fgtPwd-col-2">
            <span className="fgtPwd-2-spn">A mail will be sent to the registered email. Kindly follow the link sent to your email to reset your password.</span>
        </div>
        <div className="fgtPwd-col-3">
          <span className="fgtPwd-col-3-span"><em>Enter your email address:</em></span>
          <input type="email" name="" id="" className='fgtPwd-col-3-inpt-email' />
          <button className="fgtPwd-col-btn-1">
                Reset Password
          </button>
        </div>
      </section>
    </div>
  )
}

export default ForgotPass
