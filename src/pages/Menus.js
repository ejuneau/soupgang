import { useEffect } from "react";
import Slideshow from "../blocks/Slideshow";
export default function Menus() {
  useEffect(() => {
		document.title = "Menus | OpenKitchen 🧑‍🍳";
    window.scrollTo(0, 0);
	  }, [])
    return(
      <div className="page">
        <div className="splash">
        <h1>What are people cooking? </h1>
        </div>
        <Slideshow truncated={false} />
      </div>
    )
  }