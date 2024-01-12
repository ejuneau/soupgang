import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import Hamburger from "./Hamburger";
import UserContext from "../UserContext";
import Logo from '../assets/logo.png';


export default function Header() {
    const {user} = useContext(UserContext);
    const [hamburgerOpen, setHamburgerOpen] = useState(false);
    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen);
    }
    var prevScrollpos = window.scrollY;
    window.onscroll = function() {
        if (!hamburgerOpen) {
        var currentScrollPos = window.scrollY;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbar").style.top = "0";
        } else if (currentScrollPos > 80) {
            document.getElementById("navbar").style.top = "-5rem";
        }
      prevScrollpos = currentScrollPos;
    }
    } 
    return(
        <header id="navbar">
            <NavLink to="/" id="logo" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}><img src={Logo} alt="OpenKitchen Logo" />OpenKitchen</NavLink>  
            <nav>
                {hamburgerOpen &&
                <NavLink to="/"          className={({ isActive, isPending }) => isPending ? "custom-underline white pending" : isActive ? "custom-underline white active" : "custom-underline white"} onClick={()=>toggleHamburger()} >Home</NavLink>
                }
                <NavLink to="/about/"    className={({ isActive, isPending }) => isPending ? "custom-underline white pending" : isActive ? "custom-underline white active" : "custom-underline white"} onClick={()=>toggleHamburger()} >About</NavLink>  
                <NavLink to="/menus/"    className={({ isActive, isPending }) => isPending ? "custom-underline white pending" : isActive ? "custom-underline white active" : "custom-underline white"} onClick={()=>toggleHamburger()} >Menus</NavLink>  
                <NavLink to="/contact/"  className={({ isActive, isPending }) => isPending ? "custom-underline white pending" : isActive ? "custom-underline white active" : "custom-underline white"} onClick={()=>toggleHamburger()} >Contact</NavLink>
                {user?
                <NavLink to="/profile/"  className={({ isActive, isPending }) => isPending ? "custom-underline white pending" : isActive ? "custom-underline white active" : "custom-underline white"} onClick={()=>toggleHamburger()} >Profile</NavLink>
                :
                <NavLink to="/login/"    className={({ isActive, isPending }) => isPending ? "custom-underline white pending" : isActive ? "custom-underline white active" : "custom-underline white"} onClick={()=>toggleHamburger()} >Login</NavLink>
                }               
            </nav>
            <div className="hamburger" onClick={toggleHamburger}>
                <Hamburger hamburgerOpen={hamburgerOpen} />
            </div>
        </header>
    )
}