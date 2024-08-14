import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import "./signup.css";

const Signup = () => {
    const navigate = useNavigate();
    let [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
    });
    let [cp, setCp] = useState("");

    const handleSignup = async (e) => {
        e.preventDefault();

        await axios
            .post("https://webwizards.pythonanywhere.com/auth/signup", user)
            .then((res) => {
                console.log(res);
                navigate("/login");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="login_div">
            <div className="form-container">
                <p className="title">Welcome back</p>
                <form className="form">
                    <input
                        value={user.username}
                        type="text"
                        className="input"
                        placeholder="Username"
                        onChange={(e) => {
                            setUser({ ...user, username: e.target.value });
                            console.log(user);
                        }}
                    />
                    <input
                        value={user.email}
                        type="email"
                        className="input"
                        placeholder="Email"
                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                    />
                    <input
                        value={user.password}
                        type="password"
                        className="input"
                        placeholder="Password"
                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                    />
                    <input
                        value={cp}
                        type="password"
                        className="input"
                        placeholder="Confirm Password"
                        onChange={(e) => setCp(e.target.value)}
                    />
                    {/* <p className="page-link">
                        <span className="page-link-label">Forgot Password?</span>
                    </p> */}
                    <button className="form-btn" onClick={handleSignup}>
                        Sign up
                    </button>
                </form>
                <p className="sign-up-label">
                    Already have an account?{" "}
                    <Link to={"/login"}>
                        <span className="sign-up-link">Log in</span>
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Signup;
