import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";

const Navbar = (props) => {



    return(
        <div className="navbar">
            <div className="nav-top">
                <img src="" alt="sun" width="500" height="600"/>
                <h3>Summertime Fine</h3>
                <img src="" alt="sun" width="500" height="600"/>
            </div>
            <div className="nav-bottom">
                <div className="nav-bottom-left">
                    <h5><Link to={"/"}>Home</Link></h5>
                    {/* <h5><Link to={""}>My Activity</Link></h5> */}
                    {/* <h5><Link to={""}>Community</Link></h5> */}
                </div>
                <div className="nav-bottom-right">
                    {/* <h5><Link to={""}>Logout</Link></h5> */}
                </div>
            </div>
        </div>
    )
}

export default Navbar;
