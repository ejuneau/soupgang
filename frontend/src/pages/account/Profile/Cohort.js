import { useEffect } from "react"
export default function Cohort() {
    useEffect(() => {
        document.title = "Cohort | OpenKitchen 🧑‍🍳";
        // window.scrollTo(0, 0);
      }, [])
    return(
        <div className="cohorts">
          <h1>No Cohorts in your area :(</h1>
          <p>Hot singles, on the other hand...</p>
        </div>
    )
}