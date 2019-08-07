import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom';

export default withRouter(function Navbar(props) {
    // setTimeout(() => {
    //     props.history.push('/about')
    // }, 2000);
    return (
        <div>
           <nav className="nav-wrapped red darken3">
               <div className="container">
                   <Link to="/" className="brand-logo">Poke</Link>
                   <ul className="right">
                       <li><NavLink to="/">Home</NavLink></li>
                       <li><NavLink to='/about'>About</NavLink></li>
                       <li><NavLink to='/contact'>Contact</NavLink></li>                    
                   </ul>
               </div>
           </nav>
        </div>
    )
})
