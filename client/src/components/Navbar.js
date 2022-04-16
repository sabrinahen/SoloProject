import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";

const Navbar = (props) => {

    const [user, setUser]= useState("")

    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/users",
            { withCredentials: true }
        )
            .then((res) => {
                console.log(res.data);
                setUser(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const logout = (e) => {
        axios
            .post(
                "http://localhost:8000/api/users/logout",
                {},
                {
                    withCredentials: true,
                },
            )
            .then((res) => {
                console.log(res);
                console.log(res.data);
                navigate("/");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return(
        <div className="navbar">
            <div className="nav-top">
                <img src="https://www.freeiconspng.com/thumbs/sun-icon/sun-icon-31.png" alt="sun" width="60" height="60"/>
                <h3 className="project-title">FitGirl Summer</h3>
                <img src="https://www.freeiconspng.com/thumbs/sun-icon/sun-icon-31.png" alt="sun" width="60" height="60"/>
            </div>
            <div className="nav-bottom">
                <div className="nav-bottom-left">
                    <h5 className="hello">Hello, {user.username}!</h5>
                    <h5><Link to={"/home"} className="link">Home</Link></h5>
                    <h5><Link to={`/user/profile/${user.username}`} className="link">My Activity</Link></h5>
                    <h5><Link to={"/community"}className="link">Community</Link></h5>
                </div>
                <div className="nav-bottom-right">
                    <button onClick={logout} className="log-out-button">Logout</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
