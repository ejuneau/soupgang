import { useEffect, useState } from "react"
import { useNavigate, Navigate } from "react-router";

import SignIn from "../../blocks/SignIn";
import SignUp from "../../blocks/SignUp";

export default function Login() {
    const { user } = false;
    const navigate = useNavigate();
    const [inUp, setInUp] = useState("in");
    useEffect(() => {
        document.title = inUp==="in"?"Login | OpenKitchen 🧑‍🍳":inUp==="up"?"Sign Up | OpenKitchen 🧑‍🍳": null;
        window.scrollTo(0, 0);
      }, [inUp]);
      if (!user) {
              
    function toggleInUp() {
        inUp === "in"? setInUp("up"):setInUp("in");

    }
    return(
        <div className="page">
            <div className="splash">
                {inUp === "in" && <h1>Log into your OK account.</h1>}
                {inUp === "up" && <h1>Sign Up for OpenKitchen.</h1>}
            </div>
            <div className="toggle-container">
                <button className={`toggle left-toggle ${inUp === "in" && "active-toggle"}`} onClick={()=>toggleInUp()}>Log In</button>
                <p>/</p>
                <button className={`toggle right-toggle ${inUp === "up" && "active-toggle"}`} onClick={() =>toggleInUp()}>Sign Up</button>
            </div>
            <div className="form-container">
                    {inUp === "in" ? <SignIn toggleInUp={toggleInUp}/> : null}
                    {inUp === "up" ? <SignUp toggleInUp={toggleInUp}/> : null}
            </div>
        </div>
    )
      }
      else {
        return <Navigate replace to="/profile" />
      }
}