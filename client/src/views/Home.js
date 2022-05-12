import React, { useState, useEffect } from 'react';
import axios from "axios";
import {Navigate} from "react-router-dom"
import LegDay1Vid from "../components/LegDay1Vid";
import Calendar from "../components/Calendar";
import Navbar from '../components/Navbar';

const Legs1 = () => {

    // const [user, setUser] = useState({});

    // useEffect(() => {
    //     axios.get("http://localhost:8000/api/users",
    //         { withCredentials: true }
    //     )
    //         .then((res) => {
    //             console.log(res.data);
    //             setUser(res.data);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         })
    // }, [])

    return (
        <div>
            <Navbar/>
            <Calendar/>
        </div>
    )
}

export default Legs1
