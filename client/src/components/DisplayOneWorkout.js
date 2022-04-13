import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom"


const OneWorkout = () => {

    const [workout, setWorkout] = useState([]);
    const [user, setUser] = useState({});

    const navigate = useNavigate();

    const {id} = useParams();

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

    const deleteOneWorkout = ()=>{
        axios.delete(`http://localhost:8000/api/workouts/${id}`)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                navigate("/workouts")
                
            })
            .catch((err) => console.log(err))
    }

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

    // useEffect(()=>{
    //     axios.get(`http://localhost:8000/api/workoutbyuser/${username}`,
    //         { withCredentials: true }
    //     )
    //         .then((res)=>{
    //             console.log(res.data);
    //             setUser(res.data);
    //         })
    //         .catch((err)=>{
    //             console.log(err)
    //         })
        
    
    
    // }, [])

    // useEffect(()=>{
    //     axios.get(`http://localhost:8000/api/user/${id}`)
    //         .then ((res)=> {
    //             console.log(res);
    //             console.log(res.data);
    //             setUser(res.data)
    //         })
    //         .catch((err)=>{
    //             console.log(err)
    //             navigate("/error")
    //         })
    // }, [id])


    return (
        <div>
            <Link to={`/user/profile/${workout.createdBy?.id}`}><p>{workout.createdBy?.username}</p></Link>
            <p>{workout.completion}</p>
            <p>{workout.completionMessage}</p>
            <p>Here's the new recipe I made!</p>
            <p>{workout.recipeName}: {workout.recipeLink}</p>
            <p>This is the {workout.audioType} that powered my workout!</p>
            <p>{workout.audioName}: {workout.audioLink}</p>
            <button><Link to={`/workout/edit/${workout._id}`}>Edit</Link></button>
            <button onClick={()=>deleteOneWorkout(workout._id)} >Delete</button>
        </div>
    )
}

export default OneWorkout
