import { useEffect } from "react"
export default function Cohort() {
    useEffect(() => {
        document.title = "Cohort | OpenKitchen 🧑‍🍳";
        window.scrollTo(0, 0);
      }, [])
    return(
        <div className="page">
            <div className="splash">
                <h1 className="splash-text">Your cohort</h1>
            </div>
            <div>
                <div>Page under Construction! Come back later 👀</div>
            </div>
        </div>
    )
}