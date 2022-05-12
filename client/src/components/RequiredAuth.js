import React, { useState, useEffect } from 'react';
import axios from "axios";
import {Navigate} from "react-router-dom"

const RequiredAuth = ({children}) => {

    const [user, setUser] = useState({});

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

    if (!user) {
        return (<Navigate to="/"/>)
    }

    return children
}

export default RequiredAuth
