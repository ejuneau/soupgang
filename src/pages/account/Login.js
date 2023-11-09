import { useEffect, useState, useContext } from "react"
import AuthContext from "../../backend/AuthContext";
import { useNavigate, Navigate } from "react-router";

import SignIn from "../../blocks/SignIn";
import SignUp from "../../blocks/SignUp";

export default function Login() {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [logSign, setLogSign] = useState("log");
    useEffect(() => {
        document.title = logSign==="log"?"Login | OpenKitchen 🧑‍🍳":logSign==="sign"?"Sign Up | OpenKitchen 🧑‍🍳": null;
        window.scrollTo(0, 0);
      }, [logSign]);
      if (!user) {
              
    return(
        <div className="page">
            <div className="splash">
                {logSign === "log" && <h1>Log into your OK account.</h1>}
                {logSign === "sign" && <h1>Sign Up for OpenKitchen.</h1>}
            </div>
            <div className="toggle-container">
                <button className={`toggle left-toggle ${logSign === "log" && "active-toggle"}`} onClick={()=>setLogSign("log")}>Log In</button>
                <p>/</p>
                <button className={`toggle right-toggle ${logSign === "sign" && "active-toggle"}`} onClick={() =>setLogSign("sign")}>Sign Up</button>
            </div>
            <div className="form-container">
                {logSign === "log" ? <SignIn /> : null}
                {logSign === "sign" ? <SignUp /> : null}
            </div>
        </div>
    )
      }
      else {
        return <Navigate replace to="/profile" />
      }
}