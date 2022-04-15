import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const HIITDay1Vid = () => {
    return (
        <div>
            <h1 className="workout-title">HIIT Workout</h1>
            <h3>Choose a workout video!</h3>
            <h6>(Videos are listed from easiest to hardest!)</h6>
            <div className="vid-top-row">
            <div className='exercise'>
                <h1>One</h1>
                <iframe width="224" height="126" src="https://www.youtube.com/embed/y8eyCVRYGec" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <h3>Duration: 20 minutes</h3>
            </div>
            <div className="exercise">
                <h1>Two</h1>
                <iframe width="224" height="126" src="https://www.youtube.com/embed/Vc3baTfl0WI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <h3>Duration: 40 minutes</h3>
            </div>
            <div className="exercise">
                <h1>Three</h1>
                <iframe width="224" height="126" src="https://www.youtube.com/embed/J4wm6qiv5pI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <h3>Duration: 20 minutes</h3>
            </div>
            </div>
            <div className="vid-bottom-row">
            <div className="exercise">
                <h1>Four</h1>
                <iframe width="224" height="126" src="https://www.youtube.com/embed/ml6cT4AZdqI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <h3>Duration: 30 minutes</h3>
            </div>
            <div className="exercise">
                <h1>Five</h1>
                <iframe width="224" height="126" src="https://www.youtube.com/embed/yVUcHEOr450" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <h3>Duration: 45 minutes</h3>
            </div>
            </div>
        </div>
    )
}

export default HIITDay1Vid