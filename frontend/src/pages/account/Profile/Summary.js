import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

export default function Summary() {
  const profileData = useOutletContext();
  useEffect(() => {
    if (profileData.first_name) {
      document.title = `${profileData.first_name}'s Profile | OpenKitchen 🧑‍🍳`;
    } else if (profileData.username) {
      document.title = `${profileData.username}'s Profile | OpenKitchen 🧑‍🍳`;
    } else {
      document.title = "Profile | OpenKitchen 🧑‍🍳";
    }
  }, [profileData.first_name, profileData.username])
    return(
        <div className="summary">
          <h1>You're not in any cohorts right now.</h1>
          <p>To view your previous orders/cohorts, check out the <Link to="/profile/cohort/">cohort</Link> tab</p>
        </div>
    )
}