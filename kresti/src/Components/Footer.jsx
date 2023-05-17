import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import './Footer.css'

function Footer() {
  return (
    <div>
      <footer>
        <hr />
        <section className = 'col-1'>
          <div>
            <span className = 'col-1-a'>Already have an account?</span><span><Link className = 'col-1-b'>Log in</Link></span>
          </div>
          <div className = 'col-2'>
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