import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const ArmsDay1Vid = () => {
    return (
        <div>
            <h1 className="workout-title">Arm Workout</h1>
            <div className="vid-top-row">
            <div className='exercise'>
                <h1>Dumbbell Shoulder Press</h1>
                <iframe width="224" height="126" src="https://www.youtube.com/embed/B-aVuyhvLHU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <h3>4 sets of 8-12 reps</h3>
            </div>
            <div className="exercise">
                <h1>Dumbbell Chest Fly</h1>
                <iframe width="224" height="126" src="https://www.youtube.com/embed/UKwkChzThig" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <h3>4 sets of 8-12 reps</h3>
            </div>
            <div className="exercise">
                <h1>Dumbbell Front Raises</h1>
                <iframe width="224" height="126" src="https://www.youtube.com/embed/sOcYlBI85hc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <h3>4 sets of 8-12 reps</h3>
            </div>
            </div>
            <div className="vid-bottom-row">
            <div className="exercise">
                <h1>Tricep Kickbacks</h1>
                <iframe width="224" height="126" src="https://www.youtube.com/embed/ZO81bExngMI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <h3>4 sets of 8-12 reps with each arm</h3>
            </div>
            <div className="exercise">
                <h1>Dumbbell Bicep Curls</h1>
                <iframe width="224" height="126" src="https://www.youtube.com/embed/av7-8igSXTs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <h3>4 sets of 8-12 reps</h3>
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

export default ArmsDay1Vid

