import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom"

const RestDayForm = () => {


    return (
        <div className="rest-day"> 
            <h1><img src="https://www.freeiconspng.com/thumbs/sun-icon/sun-icon-31.png" alt="sun" width="80" height="80"/>Rest Day<img src="https://www.freeiconspng.com/thumbs/sun-icon/sun-icon-31.png" alt="sun" width="80" height="80"/></h1>
            <h2>You've worked so hard!</h2>
            <h4>Use this day to give your body time to recover!</h4>
        </div>
    )
}

export default RestDayForm

