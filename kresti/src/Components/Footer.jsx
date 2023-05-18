import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import './Footer.css'
import Login from './Login';

function Footer() {
  return (
    <div>
      <footer>
        <hr />
        <section className = 'footerCol-1'>
          <div>
            <span className = 'footerCol-1-a'>Already have an account?</span><span><Link to = '/Login' element = 'Login' className = 'footerCol-1-b'>Log in</Link></span>
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

export default Footer;