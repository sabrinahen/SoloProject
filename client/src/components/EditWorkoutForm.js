import React, {useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';

const EditWorkoutForm = (props) => {

    const [completion, setCompletion] = useState();
    const [completionMessage, setCompletionMessage] = useState();
    const [recipeName, setRecipeName] = useState();
    const [recipeLink, setRecipeLink] = useState();
    const [audioType, setAudioType] = useState();
    const [audioName, setAudioName] = useState();
    const [audioLink, setAudioLink] = useState();

    const [user, setUser] = useState({});
    const [workout, setWorkout] = useState([]);
    const [errors, setErrors] = useState({});

    const { id } = useParams();

    const navigate = useNavigate();
    
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/workouts/${id}`)
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                setCompletion(res.data.completion);
                setCompletionMessage(res.data.completionMessage);
                setRecipeName(res.data.recipeName);
                setRecipeLink(res.data.recipeLink);
                setAudioType(res.data.audioType);
                setAudioName(res.data.audioName);
                setAudioLink(res.data.audioLink);
            })
            .catch((err)=>console.log(err))
    },[id])

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/workouts/${id}`)
            .then ((res)=> {
                console.log(res);
                console.log(res.data);
                setWorkout(res.data)
            })
            .catch((err)=>{
                console.log(err)
                navigate("/error")
            })
    }, [id])

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

    const submitHandler = (e)=> {
        e.preventDefault();

        axios.put(`http://localhost:8000/api/workouts/${id}`,
        {
            completion,
            completionMessage,
            recipeName,
            recipeLink,
            audioType,
            audioName,
            audioLink
        })
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            navigate(`/user/profile/${workout.createdBy?.username}`)
            // FIX THE NAVIGATE TO BRING IT TO DISPLAY 1 PAGE
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
            <h1 style={{marginTop: "15px", marginBottom: "15px", textAlign: "center"}}>Edit Post</h1> 
            <form onSubmit={submitHandler} className="edit-form">
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
                    <h3>Tell us how your workout and/or day went!</h3>
                    <textarea rows="3" cols="32" value={completionMessage} onChange={(e)=>setCompletionMessage(e.target.value)}/>
                    {
                        errors.completionMessage?
                        <p>{errors.completionMessage.message}</p>
                        :null
                    }
                </div>
                <div>
                    <h3>Share the healthy recipe you made today!</h3>
                    <h3>Name of Recipe:</h3>
                    <input type="text" value={recipeName} onChange={(e)=>setRecipeName(e.target.value)}/>
                    {/* {
                        errors.recipeName?
                        <p>{errors.recipeName.message}</p>
                        :null
                    } */}
                    <h3>Link:</h3>
                    <input type="text" value={recipeLink} onChange={(e)=>setRecipeLink(e.target.value)}/>
                    {/* {
                        errors.recipeLink?
                        <p>{errors.recipeLink.message}</p>
                        :null
                    } */}
                </div>
                <div>
                    <h3>What did you listen to?</h3>
                    <select value={audioType} onChange={(e)=>setAudioType(e.target.value)}>
                        <option defaultValue hidden>Select an Option</option>
                        <option value="playlist">Playlist</option>
                        <option value="song">Song</option>
                        <option value="audiobook">Audiobook</option>
                        <option value="podcast">Podcast</option>
                    </select>
                    <h3>Name:</h3>
                    <input type="text" value={audioName} onChange={(e)=>setAudioName(e.target.value)}/>
                    {/* {
                        errors.audioName?
                        <p>{errors.audioName.message}</p>
                        :null
                    } */}
                    <h3>Link:</h3>
                    <input type="text" value={audioLink} onChange={(e)=>setAudioLink(e.target.value)}/>
                    {/* {
                        errors.audioLink?
                        <p>{errors.audioLink.message}</p>
                        :null
                    } */}
                </div>
                <div>
                    <button className="edit-form-button">Update!</button>
                </div>
            </form>
        </div>
    )
}

export default EditWorkoutForm;
