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
                <img src="" alt="sun" width="500" height="600"/>
                <h3>Summertime Fine</h3>
                <img src="" alt="sun" width="500" height="600"/>
            </div>
            <div className="nav-bottom">
                <div className="nav-bottom-left">
                    <h5><Link to={"/"}>Home</Link></h5>
                    <button onClick={logout}>Logout</button>
                </div>
                <div className="nav-bottom-right">
                    {/* <h5><Link to={""}>Logout</Link></h5> */}
                </div>
            </div>
        </div>
    )
}

export default Navbar;
