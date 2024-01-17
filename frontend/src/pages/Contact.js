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
                <div style={{height: "calc(100vh - 10rem - 400px - 5vh)", backgroundColor: "#E5E5E5" }}>
                    <h1 style={{marginTop: "0"}}>This is a portfolio project</h1>
                    <p>just email me</p>
                    <a href="mailto:rcjuneau8@gmail.com">rcjuneau8@gmail.com</a>
                </div>
            </div>
        </div>
    )
}