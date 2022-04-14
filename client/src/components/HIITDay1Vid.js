import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const HIITDay1Vid = () => {
    return (
        <div>
            <h1>HIIT Workout</h1>
            <h3>Choose a workout video!</h3>
            <h6>(Videos are listed from easiest to hardest!)</h6>
            <div className='exercise-1'>
                <h1>One</h1>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/y8eyCVRYGec" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className="exercise-2">
                <h1>Two</h1>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Vc3baTfl0WI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className="exercise-3">
                <h1>Three</h1>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/J4wm6qiv5pI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className="exercise-4">
                <h1>Four</h1>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/ml6cT4AZdqI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className="exercise-5">
                <h1>Five</h1>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/yVUcHEOr450" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    )
}

export default HIITDay1Vid