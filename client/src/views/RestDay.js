import React, { useState, useEffect } from 'react';
import RestDayForm from "../components/RestDayForm";
import Navbar from '../components/Navbar';

const RestDay = () => {
    return (
        <div>
            <Navbar/>
            <RestDayForm/>
        </div>
    )
}

export default RestDay
