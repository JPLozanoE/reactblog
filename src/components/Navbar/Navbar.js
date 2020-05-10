import React from 'react'
import {Link,NavLink, withRouter} from 'react-router-dom'
// NavLink se utiliza para tener la classe active

const Navbar =(props) =>{
    setTimeout(()=>{
        props.history.push('/about')
    },2000);
    return(
        <nav className="nav-wrapper blue darken-3">
            <div className="container">
                <a className="brand-logo">Reactblog</a>
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    )
}
export default withRouter(Navbar)