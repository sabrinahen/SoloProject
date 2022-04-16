import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom"

const NewWorkoutForm = (props) => {

    const [completion, setCompletion] = useState();
    const [completionMessage, setCompletionMessage] = useState();
    const [recipeName, setRecipeName] = useState();
    const [recipeLink, setRecipeLink] = useState();
    const [audioType, setAudioType] = useState();
    const [audioName, setAudioName] = useState();
    const [audioLink, setAudioLink] = useState();

    const [errors, setErrors] = useState({});

    
    const navigate = useNavigate();

    const submitHandler = (e)=> {
        e.preventDefault();

        axios.post("http://localhost:8000/api/workouts",
        {
            completion,
            completionMessage,
            recipeName,
            recipeLink,
            audioType,
            audioName,
            audioLink
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
            <form onSubmit={submitHandler}>
                <div className="workout-form">
                <div className="exercise-form">
                <h5>How did it go?</h5>
                <div>
                    <select style={{ marginBottom: "10px"}} value={completion} name="completion" onChange={(e)=>setCompletion(e.target.value)}>
                        <option defaultValue hidden>Select an Option</option>
                        <option value="I completed my workout!">I completed my workout!</option>
                        <option value="I did some of my workout!">I did some of my workout!</option>
                        <option value="I didn't do my workout today.">I didn't do my workout today.</option>
                    </select>
                    {
                        errors.completion?
                        <p>{errors.completion.message}</p>
                        :null
                    }
                </div>
                <div>
                    <h6>Tell us how your workout and/or day went!</h6>
                    <textarea rows="3" cols="32" value={completionMessage} onChange={(e)=>setCompletionMessage(e.target.value)}></textarea>
                    {
                        errors.completionMessage?
                        <p style={{ color: "#FFB6C1", fontSize: "10px" }}>{errors.completionMessage.message}</p>
                        :null
                    }
                </div>
                </div>
                <div className="exercise-form">
                    <h5>Share the healthy recipe you made today!</h5>
                    <h6>Name of Recipe:</h6>
                    <input type="text" value={recipeName} onChange={(e)=>setRecipeName(e.target.value)}/>
                    {
                        errors.recipeName?
                        <p>{errors.recipeName.message}</p>
                        :null
                    }
                    <h6>Link:</h6>
                    <input type="text" value={recipeLink} onChange={(e)=>setRecipeLink(e.target.value)}/>
                    {
                        errors.recipeLink?
                        <p>{errors.recipeLink.message}</p>
                        :null
                    }
                </div>
                <div className="exercise-form">
                    <h5>What did you listen to?</h5>
                    <select value={audioType} onChange={(e)=>setAudioType(e.target.value)}>
                        <option defaultValue hidden>Select an Option</option>
                        <option value="Playlist">Playlist</option>
                        <option value="Song">Song</option>
                        <option value="Audiobook">Audiobook</option>
                        <option value="Podcast">Podcast</option>
                    </select>
                    <h6>Name:</h6>
                    <input type="text" value={audioName} onChange={(e)=>setAudioName(e.target.value)}/>
                    {
                        errors.audioName?
                        <p>{errors.audioName.message}</p>
                        :null
                    }
                    <h6>Link:</h6>
                    <input type="text" value={audioLink} onChange={(e)=>setAudioLink(e.target.value)}/>
                    {
                        errors.audioLink?
                        <p>{errors.audioLink.message}</p>
                        :null
                    }
                </div>
                <div>
                    
                </div>
                </div>
                <button className="workout-button">Post</button>
            </form>
        </div>
    )
}

export default NewWorkoutForm;
