import React from 'react'

function ResetPass() {
  return (
    <div className='ResetPass'>
      <section className="rstPwd-sec">
        <div className="rstPwd-col-1">
            <span className="rstPwd-col-1-spn">Enter a new password</span>
        </div>
        <div className="rstPwd-col-2">
            <input type="password" name="" placeholder='Enter new password' className='rstPwd-col-2-pwd-1' />
            <input type="password" name="" id="" placeholder='Confirm password' className='rstPwd-col-2-pwd-2' />
        </div>
      </section>
    </div>
  )
}

export default ResetPass
