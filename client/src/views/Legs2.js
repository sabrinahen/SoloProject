import React, { useState, useEffect } from 'react';
import LegDay2Vid from "../components/LegDay2Vid";
import NewWorkoutForm from "../components/NewWorkoutForm";
import Navbar from '../components/Navbar';

const Legs2 = () => {
    return (
        <div>
            <Navbar/>
            <LegDay2Vid/>
            <NewWorkoutForm/>
        </div>
    )
}

export default Legs2
