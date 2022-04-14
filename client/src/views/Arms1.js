import React, { useState, useEffect } from 'react';
import ArmsDay1Vid from "../components/ArmsDay1Vid";
import NewWorkoutForm from "../components/NewWorkoutForm";
import Navbar from '../components/Navbar';

const Arms1 = () => {
    return (
        <div>
            <Navbar/>
            <ArmsDay1Vid/>
            <NewWorkoutForm/>
        </div>
    )
}

export default Arms1