import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import AllWorkouts from '../components/DisplayAllWorkouts'

const Community = () => {
    return (
        <div>
            <Navbar/>
            <AllWorkouts/>
        </div>
    )
}

export default Community