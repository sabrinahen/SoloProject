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
                    "Thank you for joining our community! You can now log in!",
                );
                setErrors({});
            })
            .catch((err) => {
                console.log(err);
                setErrors(err.response.data.errors);
            })

    }


    return (
        <div className='log-reg-page'>
            <div>
            <div style={{display:"flex", justifyContent:"center"}}>
            <img src="https://www.freeiconspng.com/thumbs/sun-icon/sun-icon-31.png" alt="sun" width="40" height="40"/><h1> Join Our Community! </h1><img src="https://www.freeiconspng.com/thumbs/sun-icon/sun-icon-31.png" alt="sun" width="40" height="40"/>
            </div>
            <div className="log-reg-form">
                <form onSubmit={register}>
                    <div>
                        <h3>Username:</h3>
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
                        <h3>Email:</h3>
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
                        <h3>Password:</h3>
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
                        <h3>Confirm Password:</h3>
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
                        <button className="log-reg-button">Register</button>
                    </div>
                    {confirmReg ? <h4 style={{ color: "#FFB6C1" }}>{confirmReg}</h4> : null}
                </form>
            </div>
            </div>
        </div>
    )
}


export default Register;