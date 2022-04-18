import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom"


const OneWorkout = (props) => {

    const {socket} = props;
    const [workout, setWorkout] = useState([]);
    const [workoutList, setWorkoutList] = useState([]);
    const [user, setUser] = useState({});
    const [commentList, setCommentList] = useState([]);
    const [comment, setComment] = useState("");

    const navigate = useNavigate();

    const {id} = useParams();

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/workouts/${id}`)
            .then ((res)=> {
                console.log(res);
                console.log(res.data);
                setWorkout(res.data)
                setCommentList(res.data.messages);
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
    
    const addAComment = () => {
        axios.post("http://localhost:8000/api/comments/",
            {
                comment,
                associatedWorkout: id
            })
            .then((res) => {
                console.log(res.data);
                setCommentList([res.data, ...commentList ])
            })
            .catch((err) => {
                console.log(err);
            })
        }

        // useEffect(() => {
        //     socket.on("Update_chat_likes", (data) => {
        //         console.log("our socket updated list", data)
        //         setWorkoutList(data)
        //     })
        // }, [])

        const likeWorkout = (workoutFromBelow) => {
            axios.put(`http://localhost:8000/api/likes/${workoutFromBelow._id}`,
                {
                    likes: workoutFromBelow.likes + 1
                }
            )
                .then((res) => {
                    console.log(res.data);
    
                    let updatedWorkoutList = workoutList.map((workout, index) => {
                        if (workout === workoutFromBelow) {
                            let workoutHolder = { ...res.data };
                            return workoutHolder;
                        }
                        return workout;
                    });
    
                    // setWorkoutList(updatedWorkoutList);
                    socket.emit("Update_chat", updatedWorkoutList)
                })
        }

    return (
        <div>
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
            <button onClick={() => likeWorkout(workout)} className="like-button">Like! </button>
            <p>{workout.likes}</p>
            {/* <div className="heart-shape"></div> */}
        </div>


        <div className="comment-input">
            <h3>Add A Comment</h3>
            <textarea rows="5" cols="50" value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
            <button onClick={addAComment}className="comment-button">Post!</button>
        </div>
        <div>
        {
                    commentList ?
                        commentList.map((comment, index) => (
                            <div key={index}>
                                <p style={{fontSize:"12px"}}>{new Date(comment.createdAt).toLocaleString()}</p>
                                <p>{comment.comment}</p>
                                {/* <button onClick={() => likeComment(comment)}>Like {comment.likes}</button> */}
                            </div>
                        ))
                        : null
                }
        </div>
        </div>
    )
}

export default OneWorkout
