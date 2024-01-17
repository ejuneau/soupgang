import { useEffect } from "react"
export default function Payment() {
    useEffect(() => {
        document.title = "Payment | OpenKitchen 🧑‍🍳";
        window.scrollTo(0, 0);
      }, [])
    return(
        <div className="page">
            <div className="splash">
                <h1 className="splash-text">Pay the Kitchen</h1>
            </div>
            <div>
                <div>Page under Construction! Come back later 👀</div>
            </div>
        </div>
    )
}