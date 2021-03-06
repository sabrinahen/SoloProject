import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const LegDay2Vid = () => {
    return (
        <div>
            <h1 className="workout-title">Glutes and Quads</h1>
            <div className="vid-top-row">
            <div className='exercise'>
                <h1>Barbell Squats</h1>
                <iframe width="224" height="126" src="https://www.youtube.com/embed/1xMaFs0L3ao" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <h3>4 sets of 8-12 reps</h3>
            </div>
            <div className="exercise">
                <h1>Reverse Lunges</h1>
                <iframe width="224" height="126" src="https://www.youtube.com/embed/ZZvRoS5Y48Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <h3>4 sets of 8-12 reps with each leg</h3>
            </div>
            <div className="exercise">
                <h1>Quad-Focused Leg Press</h1>
                <iframe width="224" height="126" src="https://www.youtube.com/embed/A218isnErfM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <h3>4 sets of 8-12 reps</h3>
            </div>
            </div>
            <div className="vid-bottom-row">
            <div className="exercise">
                <h1>Dumbbell Sumo Squats</h1>
                <iframe width="224" height="126" src="https://www.youtube.com/embed/Ps_3vy3feLc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <h3>4 sets of 8-12 reps</h3>
            </div>
            <div className="exercise">
                <h1>Bulgarian Split Squats</h1>
                <iframe width="224" height="126" src="https://www.youtube.com/embed/WmOUkoloCNY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <h3>4 sets of 8-12 reps with each leg</h3>
            </div>
            </div>
            <div className='cardio'>
                <h2>Finish your workout with some low-intensity steady-state (LISS) cardio!</h2>
                <h3>Treadmill</h3>
                <h3>Speed: 3 | Incline: 10-12 | Duration: 15 minutes</h3>
            </div>
        </div>
    )
}

export default LegDay2Vid