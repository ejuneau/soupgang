import { useEffect } from "react"
export default function Login() {
    useEffect(() => {
        document.title = "Login | OpenKitchen 🧑‍🍳";
        window.scrollTo(0, 0);
      }, [])
    return(
        <div className="page">
            <div className="splash">
                <h1>Log into your OK account.</h1>
            </div>
            <div>
                <div>Page under Construction! Come back later 👀</div>
            </div>
        </div>
    )
}