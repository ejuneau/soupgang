import { Link } from "react-router-dom";
import { useEffect } from "react";
import Slideshow from "../blocks/Slideshow";
import LambShepherdsPie from '../assets/food/lamb shepherd\'s pie.png';


export default function Home() {
  useEffect(() => {
    document.title = "Home | OpenKitchen 🧑‍🍳"
    window.scrollTo(0, 0);
  }, [])
    return(
      <div className="page">
        <div className="splash">
          <img src={LambShepherdsPie} alt="Lamb Shepherd's Pie" />
          <h1 className="image-text">Kitchen's Open.</h1>
          <p className="subtitle image-text">Crowd-sourced, home-made meals every week.</p>
          <p className="image-text">#9OUTTA9</p>
        </div>
        <div className="about-info">
          <h1>What are we?</h1>
          <div className="text-CTA">
            <p>Open Kitchen is a meal provider service, done differently. With a focus on community and a passion for authentic recipes, your meals won't come from a faceless big brand, but neighbours, families, and - if we do our job right - new friends.</p>
            <Link to="/about" className="button">Learn more</Link>
          </div>
        </div>
        <div className="how-it-works">
          <h1>Here's how it works:</h1>
          <div className="steps">
            <p><b>On the first Monday of the month: </b>Vote with your cohort on what dishes you want, and when.</p>
            <p><b>On the Sunday of that week: </b>Choices are locked in! Your menu and schedule are set.</p>
            <p><b>Over the rest of the month: </b>Receive the dishes you and your cohort voted on.</p>
            <p><b>After every meal: rate it #outta9</b></p>
          </div>
          <Link to="/account" className="button">Sign me up</Link>
        </div>
        
        <Slideshow truncated={true}/>
      </div>
    )
  }