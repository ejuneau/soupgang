import { NavLink } from "react-router-dom";
import Logo from '../assets/logo-blue.png';
export default function Footer() {
    return(
        <footer>
            <NavLink to="/" id="logo" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}><img src={Logo} alt="OpenKitchen Logo" />OpenKitchen</NavLink> 
        </footer>
    )
}