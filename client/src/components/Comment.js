import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom"

const Comment = () => {

    const {socket} = props;
    const [workout, setWorkout] = useState({});
    const [commentList, setCommentList] = useState([]);
    const [comment, setComment] = useState("");
    const navigate = useNavigate();

    const {id} = useParams();


    return (
        <div>
        
        </div>
    )
}

export default Comment
