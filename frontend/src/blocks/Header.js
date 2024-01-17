import { NavLink } from "react-router-dom";
import { useState } from "react";
import Hamburger from "./Hamburger";
import { useAuth } from "../contexts/AuthContent";
import Logo from '../assets/logo.png';


export default function Header() {
    const {currentUser} = useAuth();
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

                <NavLink to="/"          className={({ isActive, isPending }) => isPending ? "custom-underline white pending" : isActive ? "custom-underline white active" : "custom-underline white"} onClick={()=>toggleHamburger()} >Home</NavLink>
                <NavLink to="/about/"    className={({ isActive, isPending }) => isPending ? "custom-underline white pending" : isActive ? "custom-underline white active" : "custom-underline white"} onClick={()=>toggleHamburger()} >About</NavLink>  
                <NavLink to="/menus/"    className={({ isActive, isPending }) => isPending ? "custom-underline white pending" : isActive ? "custom-underline white active" : "custom-underline white"} onClick={()=>toggleHamburger()} >Menus</NavLink>  
                <NavLink to="/contact/"  className={({ isActive, isPending }) => isPending ? "custom-underline white pending" : isActive ? "custom-underline white active" : "custom-underline white"} onClick={()=>toggleHamburger()} >Contact</NavLink>

                {currentUser?
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