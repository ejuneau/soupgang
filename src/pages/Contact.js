import { useEffect } from "react"
export default function Contact() {
    useEffect(() => {
        document.title = "Contact | OpenKitchen 🧑‍🍳";
        window.scrollTo(0, 0);
      }, [])
    return(
        <div className="page">
            <div className="splash">
                <h1 className="splash-text">Contact the Kitchen</h1>
            </div>
            <div>
                <div>Page under Construction! Come back later 👀</div>
            </div>
        </div>
    )
}