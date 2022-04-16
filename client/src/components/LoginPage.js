import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const login = (event) => {
        event.preventDefault();
        axios
            .post(
                "http://localhost:8000/api/users/login",
                {
                    email: email,
                    password: password,
                },
                {
                    withCredentials: true,
                },
            )
            .then((res) => {
                console.log(res, "res");
                console.log(res.data, "is res data!");
                navigate("/home");
            })
            .catch((err) => {
                console.log(err.response.data);
                setErrorMessage(err.response.data.message);
            });
    };
    
    return (
        <div >
            <div className="title-body"> 
            <h1 class="title">
                <span class="title-content">Improve Yourself</span>
                <span class="title-content title-second">With Others</span>
                <span class="title-content title-third">Join FitGirl Summer</span>
                <span class="title-content title-fourth">Today</span>
            </h1>
            </div>

            <div className="log-reg-form">
            <form onSubmit={login}>
                <div>
                    <label>Email: </label>
                    <input
                        type="text"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label>Password: </label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button>Sign In!</button>
                <h2><Link to={"/register"}>Don't have an account? Click here to join the community!</Link></h2>
            </form>
            </div>
        </div>
    )
}

export default LoginPage;
