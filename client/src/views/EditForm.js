import React, { useState, useEffect } from 'react';
import EditWorkoutForm from "../components/EditWorkoutForm";
import Navbar from '../components/Navbar';

const EditForm = () => {
    return (
        <div>
            <Navbar/>
            <EditWorkoutForm/>
        </div>
    )
}

export default EditForm
