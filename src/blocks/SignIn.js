import { useState } from "react";
import { signInHandle } from "../backend/firebase";

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setEmail("");
        setPassword("");
        const res = await signInHandle(email, password);
        if (res.error) {
            setError(res.error)
        }
    };

    return (
        <div className="sign-in-block">
            {error ? <div>{error}</div> : null}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="email"
                    value={email}
                    placeholder="Your Email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    name="password"
                    value={password}
                    placeholder="Your Password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div className="button-container">
                    <input type="submit" value="submit" className="button" />
                </div>
            </form>
        </div>
    )
}
export default SignIn;