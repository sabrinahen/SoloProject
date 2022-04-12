import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const LegDay1Vid = () => {
    return (
        <div>
            <h1>Glutes and Hamstrings</h1>
            <div className='exercise-1'>
                <h1>Hamstring Curls</h1>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/F488k67BTNo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <h3>4 sets of 8-12 reps with each leg</h3>
            </div>
            <div className="exercise-2">
                <h1>Barbell Hip Thrusts</h1>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Zp26q4BY5HE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <h3>4 sets of 8-12 reps</h3>
            </div>
            <div className="exercise-3">
                <h1>Conventional Deadlifts</h1>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/GxsLrTzyGUU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <h3>4 sets of 8-12 reps</h3>
            </div>
            <div className="exercise-4">
                <h1>Back Extensions</h1>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/dS9pWwgs4HU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <h3>4 sets of 8-12 reps</h3>
            </div>
            <div className="exercise-5">
                <h1>Single Leg Romanian Deadlifts</h1>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/I6a_9bumsyM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <h3>4 sets of 8-12 reps with each leg</h3>
            </div>
            <div className='cardio'>
                <h2>Finish your workout with some low-intensity steady-state (LISS) cardio!</h2>
                <h3>Treadmill</h3>
                <h3>Speed: 3 | Incline: 10-12 | Duration: 15 minutes</h3>
            </div>
        </div>
    )
}

export default LegDay1Vid