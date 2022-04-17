import React, { useState, useEffect } from 'react';
import OneWorkout from "../components/DisplayOneWorkout";
import NewWorkoutForm from "../components/NewWorkoutForm";
import Navbar from '../components/Navbar';

const SelectOneWorkout = () => {
    return (
        <div>
            <Navbar/>
            <OneWorkout/>
        </div>
    )
}

export default SelectOneWorkout
