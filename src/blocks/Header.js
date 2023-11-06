import { NavLink } from "react-router-dom"
import Logo from '../assets/logo.png';

export default function Header() {
    var prevScrollpos = window.scrollY;
    window.onscroll = function() {
        var currentScrollPos = window.scrollY;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbar").style.top = "0";
        } else if (currentScrollPos > 80) {
            document.getElementById("navbar").style.top = "-5rem";
        }
      prevScrollpos = currentScrollPos;
    } 
    return(
        <header id="navbar">
                <NavLink to="/" id="logo" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}><img src={Logo} alt="OpenKitchen Logo" />OpenKitchen</NavLink>  
            <nav>
                <NavLink to="/about"    className={({ isActive, isPending }) => isPending ? "custom-underline pending" : isActive ? "custom-underline active" : "custom-underline"}>About</NavLink>  
                <NavLink to="/menus"    className={({ isActive, isPending }) => isPending ? "custom-underline pending" : isActive ? "custom-underline active" : "custom-underline"}>Menus</NavLink>  
                <NavLink to="/contact"  className={({ isActive, isPending }) => isPending ? "custom-underline pending" : isActive ? "custom-underline active" : "custom-underline"}>Contact</NavLink>
                <NavLink to="/login"    className={({ isActive, isPending }) => isPending ? "custom-underline pending" : isActive ? "custom-underline active" : "custom-underline"}>Login</NavLink>               
            </nav>
        </header>
    )
}