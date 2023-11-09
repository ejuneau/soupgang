import { useContext } from "react";
import AuthContext from "../../backend/AuthContext";
import { useNavigate, Navigate } from "react-router";
import { signOutHandle } from "../../backend/firebase";
function Profile() {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogout = async () => {
        await  signOutHandle();
    };
    if (!user) {
        return <Navigate replace to="/login" />
    }
    return (
        <div className="page">
            <div className="splash">
                <h1>Howdy, {user.displayName}</h1>
                <div className="button-container">
                    <button onClick={handleLogout} className="button">Logout</button>
                </div>            </div>
            <div className="profile-container">
                <h1>Your Profile</h1>
                <form>
                </form>
            </div>
        </div>
    )
}
export default Profile;