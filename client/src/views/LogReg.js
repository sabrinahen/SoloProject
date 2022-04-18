import React, { useState, useEffect } from 'react';
import LoginPage from "../components/LoginPage";
import Register from "../components/Register";
import LoginPageHeader from '../components/LoginPageHeader';

const LogReg = (props) => {
    return (
        <div >
            <LoginPageHeader/>
            <div className='log-reg-display'>
                <Register/>
                <LoginPage/>
            </div>
        </div>
    )
}

export default LogReg;
