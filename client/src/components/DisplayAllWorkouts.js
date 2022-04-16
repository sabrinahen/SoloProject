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
        <div style={{textAlign: "center"}}>
            <h1 style={{marginTop: "15px", marginBottom: "15px"}}>Community</h1>
            {
                workoutList.map((workout, index) => (
                    <div className="display-all"
                        key={workout._id}
                    >
                        <p><img src="https://www.freeiconspng.com/thumbs/sun-icon/sun-icon-31.png" alt="sun" width="10" height="10"/><Link to={`/user/profile/${workout.createdBy?.username}`} className="username-link">{workout.createdBy?.username}</Link><img src="https://www.freeiconspng.com/thumbs/sun-icon/sun-icon-31.png" alt="sun" width="10" height="10"/></p>
                        <p>{workout.completion}</p>
                        <p>{workout.completionMessage}</p>
                        {
                            workout.recipeName?
                            <p>I made something new today!</p>
                            :null
                        }
                        {
                            workout.audioName?
                            <p>I listened to something new today!</p>
                            :null
                        }
                        <Link to={`/workout/${workout._id}`}>See More</Link>
                    </div>

                ))
            }


        </div>
    )
}




export default AllWorkouts;