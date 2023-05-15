import React from 'react'
import {FaBars, FaTimes} from "react-icons/fa"
import {Link, NavLink} from 'react-router-dom';

function Navigation() {
  return (
    <div>
      <header>
        <h1>Kresti Investment LLC</h1>
        <nav>
            <ul>
                <li><Link>Home</Link></li>
                <li><Link>Services</Link></li>
                <li><Link>Contact Us</Link></li>
                <li><Link>About US</Link></li>
                <Link><button>Register</button></Link>
                <Link><button>Log In</button></Link>
            </ul>
        </nav>
      </header>
    </div>
  )
}

export default Navigation