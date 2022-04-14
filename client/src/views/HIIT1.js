import React, { useState, useEffect } from 'react';
import HIITDay1Vid from "../components/HIITDay1Vid";
import NewWorkoutForm from "../components/NewWorkoutForm";
import Navbar from '../components/Navbar';

const Legs1 = () => {
    return (
        <div>
            <Navbar/>
            <HIITDay1Vid/>
            <NewWorkoutForm/>
        </div>
    )
}

export default Legs1