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
                <h3>How did it go?</h3>
                <div>
                    <select value={completion} name="completion" onChange={(e)=>setCompletion(e.target.value)}>
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
                    <label>Tell us how your workout and/or day went!</label>
                    <input type="text" value={completionMessage} onChange={(e)=>setCompletionMessage(e.target.value)}/>
                    {
                        errors.completionMessage?
                        <p>{errors.completionMessage.message}</p>
                        :null
                    }
                </div>
                <div>
                    <h5>Share the healthy recipe you made today!</h5>
                    <label>Name of Recipe:</label>
                    <input type="text" value={recipeName} onChange={(e)=>setRecipeName(e.target.value)}/>
                    {
                        errors.recipeName?
                        <p>{errors.recipeName.message}</p>
                        :null
                    }
                    <label>Link:</label>
                    <input type="text" value={recipeLink} onChange={(e)=>setRecipeLink(e.target.value)}/>
                    {
                        errors.recipeLink?
                        <p>{errors.recipeLink.message}</p>
                        :null
                    }
                </div>
                <div>
                    <h5>What did you listen to?</h5>
                    <select value={audioType} onChange={(e)=>setAudioType(e.target.value)}>
                        <option defaultValue hidden>Select an Option</option>
                        <option value="Playlist">Playlist</option>
                        <option value="Song">Song</option>
                        <option value="Audiobook">Audiobook</option>
                        <option value="Podcast">Podcast</option>
                    </select>
                    <label>Name:</label>
                    <input type="text" value={audioName} onChange={(e)=>setAudioName(e.target.value)}/>
                    {
                        errors.audioName?
                        <p>{errors.audioName.message}</p>
                        :null
                    }
                    <label>Link:</label>
                    <input type="text" value={audioLink} onChange={(e)=>setAudioLink(e.target.value)}/>
                    {
                        errors.audioLink?
                        <p>{errors.audioLink.message}</p>
                        :null
                    }
                </div>
                <div>
                    <button>Post</button>
                </div>
            </form>
        </div>
    )
}

export default NewWorkoutForm;
