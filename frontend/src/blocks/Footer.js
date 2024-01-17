import { NavLink } from "react-router-dom";
import Logo from '../assets/logo-blue.png';
import { useAuth } from "../contexts/AuthContent";
export default function Footer() {
    const { currentUser } = useAuth();
    return(
        <footer>
            <NavLink to="/" id="logo" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}><img src={Logo} alt="OpenKitchen Logo" />OpenKitchen</NavLink>  
            <nav>
            <NavLink to="/privacy/"      className={({ isActive, isPending }) => isPending ? "custom-underline blue pending" : isActive ? "custom-underline blue active" : "custom-underline blue"}>Privacy</NavLink>  
                <NavLink to="/contact/"  className={({ isActive, isPending }) => isPending ? "custom-underline blue pending" : isActive ? "custom-underline blue active" : "custom-underline blue"}>Contact</NavLink>
                {currentUser?<NavLink to="/profile/"    className={({ isActive, isPending }) => isPending ? "custom-underline blue pending" : isActive ? "custom-underline blue active" : "custom-underline blue"}>Profile</NavLink>:<NavLink to="/login/"    className={({ isActive, isPending }) => isPending ? "custom-underline white pending" : isActive ? "custom-underline white active" : "custom-underline white"}>Login</NavLink>}               
            </nav>        </footer>
    )
}