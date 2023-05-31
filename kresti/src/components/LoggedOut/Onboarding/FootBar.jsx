import React from 'react';
import { Link } from 'react-router-dom';
import './FootBar.css'


function FootBar() {
  return (
    <div className = 'FootBar'>
        <footer>
            <hr />
            <section className = 'footerCol-1'>
                <div>
                    <span className = 'footerCol-1-a'>Already have an account?</span><span className = 'footerCol-1-b'><Link to = '/Login' element = 'Login' className = 'footerCol-1-b'>Log in</Link></span>
                </div>
                <div className = 'footerCol-2'>
                    <article>Privacy</article>
                    <article>Terms</article>
                    <article>Get Help</article>
                </div>
            </section>
        </footer>
    </div>
  )
}

export default FootBar
