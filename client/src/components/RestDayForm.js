import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom"

const RestDayForm = () => {

    const [completionMessage, setCompletionMessage] = useState();

    const [errors, setErrors] = useState({});

    
    const navigate = useNavigate();

    const submitHandler = (e)=> {
        e.preventDefault();

        axios.post("http://localhost:8000/api/workouts",
        {
            completionMessage,
        }, 
        { withCredentials: true }
        )
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            navigate("/community")
        })
        .catch ((err)=>{
            console.log(err);
            console.log("err.response", err.response);
            console.log("err.response.data:", err.response.data);
            console.log("err.response.data.errors", err.response.data.errors);
            setErrors(err.response.data.errors);
        })

    }

    return (
        <div>
            <h1>Relax! You deserve it!</h1>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Tell us how your day went!</label>
                    <input type="text" value={completionMessage} onChange={(e)=>setCompletionMessage(e.target.value)}/>
                    {
                        errors.completionMessage?
                        <p>{errors.completionMessage.message}</p>
                        :null
                    }
                </div>
                <button>Post</button>
            </form>
        </div>
    )
}

export default RestDayForm

