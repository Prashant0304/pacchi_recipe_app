import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";

const Navbar =()=>{
    const [show,setShow]=useState(false);
    
    const toggleMenu=()=>{
        setShow(!show);
    }

    return(
       <nav className="navWrapper">
        <div>
            <Link to="/">
            <i>{"Pacchi "}</i>
            <span>Recipe</span>
            </Link>
        </div>
        <div className={show ? "linkWrapper show" : "linkWrapper"}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="about">About</NavLink>
            <NavLink to="login">Login</NavLink>
        </div>
        <div className="burgerMenu" onClick={toggleMenu}>
            &#9776;
        </div>
       </nav>
    );
};

export default Navbar; 