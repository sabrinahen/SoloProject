import React, {useState, useEffect} from "react";
import  {useParams} from "react-router-dom";
import axios from "axios";



const Profile = (props)=>{

    const {username} = useParams();

    const [userWorkoutList, setUserWorkoutList] = useState([]);


useEffect(()=>{
    axios.get(`http://localhost:8000/api/workoutsbyuser/${username}`,
        { withCredentials: true }
    )
        .then((res)=>{
            console.log(res.data);
            setUserWorkoutList(res.data);
        })
        .catch((err)=>{
            console.log(err)
        })
    


}, [])




    return(
        <div style={{ textAlign: "center" }}>
            <h1>Welcome {username}</h1>

            {
                userWorkoutList.map((workout, index) => (
                    <div key={index}>
                        <p>{workout.completionMessage}</p>
                        <p>{workout.recipeName}</p>
                        <p>{workout.recipeLink}</p>
                    </div>
                ))
            }
            
        </div>
    )
}



export default Profile;