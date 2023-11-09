import { useState } from "react";
import { signUpHandle } from "../backend/firebase";
const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== password2) {
            setError("Passwords do not match");
        } else {
            setEmail("");
            setPassword("");
            const res = await signUpHandle(email, password);
            if (res.error) setError(res.error);
        }
    };

    return (
        <div className="sign-up-block">
            {error ? <div>{error}</div> : null}
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    value={email}
                    placeholder="Your Email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Your Password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                />
                                <input
                    type="password"
                    name="password2"
                    placeholder="Confirm Password"
                    required
                    onChange={(e) => setPassword2(e.target.value)}
                />
                <div className="button-container">
                    <input type="submit" value="submit" className="button"/>
                </div>
            </form>
        </div>
    )
}
export default SignUp;