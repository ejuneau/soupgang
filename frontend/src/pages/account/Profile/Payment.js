import { useEffect } from "react"
export default function Payment() {
    useEffect(() => {
        document.title = "Payment | OpenKitchen 🧑‍🍳";
        // window.scrollTo(0, 0);
      }, [])
    return(
        <div className="payment">
          <h1>Stripe integration coming soon 😎</h1>
          <p>This is just a portfolio project but I'll be more than happy to take your money.</p>
        </div>
    )
}