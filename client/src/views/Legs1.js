import React, { useState, useEffect } from 'react';
import LegDay1Vid from "../components/LegDay1Vid";
import NewWorkoutForm from "../components/NewWorkoutForm";
import Navbar from '../components/Navbar';

const Legs1 = () => {
    return (
        <div>
            <Navbar/>
            <LegDay1Vid/>
            <NewWorkoutForm/>
        </div>
    )
}

export default Legs1
