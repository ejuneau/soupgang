import { NavLink } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../UserContext";
import Logo from '../assets/logo-blue.png';
export default function Footer() {
    const {user} = useContext(UserContext);
    return(
        <footer>
            <NavLink to="/" id="logo" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}><img src={Logo} alt="OpenKitchen Logo" />OpenKitchen</NavLink>  
            <nav>
            <NavLink to="/privacy/"      className={({ isActive, isPending }) => isPending ? "custom-underline blue pending" : isActive ? "custom-underline blue active" : "custom-underline blue"}>Privacy</NavLink>  
                <NavLink to="/contact/"  className={({ isActive, isPending }) => isPending ? "custom-underline blue pending" : isActive ? "custom-underline blue active" : "custom-underline blue"}>Contact</NavLink>
                {user?<NavLink to="/profile/"    className={({ isActive, isPending }) => isPending ? "custom-underline blue pending" : isActive ? "custom-underline blue active" : "custom-underline blue"}>Profile</NavLink>:<NavLink to="/login/"    className={({ isActive, isPending }) => isPending ? "custom-underline white pending" : isActive ? "custom-underline white active" : "custom-underline white"}>Login</NavLink>}               
            </nav>        </footer>
    )
}