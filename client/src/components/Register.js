import React, { useState, useEffect } from 'react';
import axios from "axios";



const Register = (props) => {

    const [confirmReg, setConfirmReg] = useState("");
    const [errors, setErrors] = useState({});

    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    const register = (e) => {
        e.preventDefault();

        axios.post("http://localhost:8000/api/users/register",
            user,
            {
                withCredentials: true
            })
            .then((res) => {
                console.log(res.data);
                setUser({
                    username: "",
                    email: "",
                    password: "",
                    confirmPassword: "",
                });
                setConfirmReg(
                    "Thank you for joining our community! Click here to log in!",
                );
                setErrors({});
            })
            .catch((err) => {
                console.log(err);
                setErrors(err.response.data.errors);
            })

    }


    return (
        <div className="log-reg-page">
            <div className="title-body"> 
            <h1 class="title">
                <span class="title-content">Improve Yourself</span>
                <span class="title-content title-second">With Others</span>
                <span class="title-content title-third">Join Our Community</span>
                <span class="title-content title-fourth">At FitGirl Summer</span>
            </h1>
            </div>

            <h1>Register</h1>
            {confirmReg ? <h4 style={{ color: "#FFB6C1" }}>{confirmReg}</h4> : null}
            <div className="log-reg-form">
                <form onSubmit={register}>
                    <div>
                        <label>Username</label>
                        {errors.username ? (
                            <span className="error-text">
                                {errors.username.message}
                            </span>
                        ) : null}
                        <input
                            type="text"
                            name="username"
                            value={user.username}
                            //long hand notation
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                    <div>
                        <label>Email</label>
                        {errors.email ? (
                            <span className="error-text">{errors.email.message}</span>
                        ) : null}
                        <input
                            type="email"
                            name="email"
                            value={user.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Password</label>
                        {errors.password ? (
                            <span className="error-text">
                                {errors.password.message}
                            </span>
                        ) : null}
                        <input
                            type="password"
                            name="password"
                            value={user.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Confirm Password</label>
                        {errors.confirmPassword ? (
                            <span className="error-text">
                                {errors.confirmPassword.message}
                            </span>
                        ) : null}
                        <input
                            type="password"
                            name="confirmPassword"
                            value={user.confirmPassword}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="center">
                        <button>Register Me</button>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default Register;