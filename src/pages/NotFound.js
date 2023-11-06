import { Link } from "react-router-dom";
import { useEffect } from "react";
import LostImage from '../assets/404image.png'
export default function NotFound() {
    useEffect(() => {
        document.title = "Not Found! | OpenKitchen 🧑‍🍳";
        window.scrollTo(0, 0);
      }, [])
    return(
        <div className="page" style={{height: "calc(100vh - 5rem)"}}>
        <div className="splash">
            <h2>4️⃣🥴4️⃣ - Kitchen's Closed.</h2>
            <Link to="/soupgang/" className="button">Take me back home</Link>
            <p><em>Wasn't trying to break this site? <Link to="/soupgang/contact">Tell us about it</Link></em>.</p>
        </div>
        <img src={LostImage} alt="There is no soup for you to find here." />
        </div>
    )
}