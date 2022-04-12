import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom"


const AllWorkouts = (props) => {


    const [workoutList, setWorkoutList] = useState([]);
    const [user, setUser] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/workouts")
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setWorkoutList(res.data);
            })
            .catch((err) => console.log(err))
    }, [])

    const deleteWorkout = (idFromBelow)=>{
        axios.delete(`http://localhost:8000/api/workouts/${idFromBelow}`)
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                setWorkoutList(workoutList.filter(workout => workout._id !== idFromBelow))
            })
            .catch((err)=>console.log(err))
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



    return (
        <div>
            {
                workoutList.map((workout, index) => (
                    <div
                        key={workout._id}
                    >
                        <Link to={`/user/profile/${workout.createdBy?.username}`}>{workout.createdBy?.username}</Link>
                        <p>{workout.completion}</p>
                        <br/>
                        <p>{workout.completionMessage}</p>
                        <br/>
                        {
                            workout.recipeName?
                            <p>{workout.createdBy?.username} made something new today!</p>
                            :null
                        }
                        <Link to={`/workout/${workout._id}`}>See More</Link>
                        <button onClick={()=>deleteWorkout(workout._id)} >Delete</button>
                        <Link to={`/workout/edit/${workout._id}`}>Edit</Link>

                    </div>

                ))
            }


        </div>
    )
}




export default AllMovies;