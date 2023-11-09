import { NavLink } from "react-router-dom";
import Logo from '../assets/logo-blue.png';
export default function Footer() {
    return(
        <footer>
            <NavLink to="/" id="logo" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}><img src={Logo} alt="OpenKitchen Logo" />OpenKitchen</NavLink>  
            <nav>
            <NavLink to="/privacy/"      className={({ isActive, isPending }) => isPending ? "custom-underline blue pending" : isActive ? "custom-underline blue active" : "custom-underline blue"}>Privacy</NavLink>  
                <NavLink to="/contact/"  className={({ isActive, isPending }) => isPending ? "custom-underline blue pending" : isActive ? "custom-underline blue active" : "custom-underline blue"}>Contact</NavLink>
                <NavLink to="/login/"    className={({ isActive, isPending }) => isPending ? "custom-underline blue pending" : isActive ? "custom-underline blue active" : "custom-underline blue"}>Login</NavLink>               
            </nav>        </footer>
    )
}