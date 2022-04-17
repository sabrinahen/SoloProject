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
                navigate("/community")
                
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
    

    return (
        <div className="display-one">
            <p><img src="https://www.freeiconspng.com/thumbs/sun-icon/sun-icon-31.png" alt="sun" width="20" height="20"/><Link to={`/user/profile/${workout.createdBy?.username}`} className="username-link" style={{fontWeight:"bolder", fontSize:"30px"}}> {workout.createdBy?.username} </Link><img src="https://www.freeiconspng.com/thumbs/sun-icon/sun-icon-31.png" alt="sun" width="20" height="20"/></p>
            <p style={{fontSize:"13px"}}>{new Date(workout.createdAt).toLocaleString()}</p>
            <p style={{fontWeight:"bolder"}}>{workout.completionMessage}</p>
            {
                workout.recipeName?
                <p>Here's the <a href="{workout.recipeLink}">{workout.recipeName}</a> I made!</p>
                :null
            }
            {
                workout.audioType?
                <p>This is the {workout.audioType} that powered my workout!</p>
                :null
            }
            {
                workout.audioName?
                    <p><a href="{workout.audioLink}">{workout.audioName}</a></p>
                    :null
            }
            {
                workout.createdBy?._id===user._id?
                    <div>
                        <button onClick={()=>deleteOneWorkout(workout._id)} className="display-one-buttons">Delete</button>
                        <button className="display-one-buttons"><Link to={`/workout/edit/${workout._id}`} className="display-one-buttons" style={{color: "white"}}>Edit</Link></button>
                    </div>
                    :null
            }
            {/* <div className="heart-shape"></div> */}
        </div>
    )
}

export default OneWorkout
