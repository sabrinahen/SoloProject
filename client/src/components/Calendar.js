import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


const Home = () => {

    const current = new Date();
    const date = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`;

    return (
            <div><h5 style={{textAlign: "center", fontSize: "20px", paddingTop: "20px"}}>Get Started by Clicking on Today's Date!</h5>
            <h5 style={{textAlign: "center", fontSize: "15px"}}>{date}</h5>
            <div className="calendar-body">
                <div className="month"><img src="https://www.freeiconspng.com/thumbs/sun-icon/sun-icon-31.png" alt="sun" width="40" height="40"/><h2> June </h2><img src="https://www.freeiconspng.com/thumbs/sun-icon/sun-icon-31.png" alt="sun" width="40" height="40"/></div>
                <div className="days">
                <div>SUN</div>
                <div>MON</div>
                <div>TUE</div>
                <div>WED</div>
                <div>THUR</div>
                <div>FRI</div>
                <div>SAT</div>
                </div>
                {/* <hr className="week-line"/> */}

                {/* first week */}
                <div className="first-week">
                    <div className="calendar-link1"></div>
                    <div className="calendar-link1"></div>
                    <div className="calendar-link1"></div>
                    <div><Link to={"/workout/monday"} className="calendar-link">1</Link></div>
                    <div><Link to={"/workout/thursday"} className="calendar-link">2</Link></div>
                    <div><Link to={"/workout/friday"} className="calendar-link">3</Link></div>
                    <div><Link to={"/workout/restday"} className="calendar-link">4</Link></div>
                </div>

                {/* second week */}
                <div className='second-week'>
                    <div><Link to={"/workout/sunday"} className="calendar-link">5</Link></div>
                    <div><Link to={"/workout/monday"} className="calendar-link">6</Link></div>
                    <div><Link to={"/workout/tuesday"} className="calendar-link">7</Link></div>
                    <div><Link to={"/workout/restday"} className="calendar-link">8</Link></div>
                    <div><Link to={"/workout/thursday"} className="calendar-link">9</Link></div>
                    <div><Link to={"/workout/friday"} className="calendar-link">10</Link></div>
                    <div><Link to={"/workout/restday"} className="calendar-link">11</Link></div>
                </div>

                {/* third week */}
                <div className='third-week'>
                <div><Link to={"/workout/sunday"} className="calendar-link">12</Link></div>
                    <div><Link to={"/workout/monday"} className="calendar-link">13</Link></div>
                    <div><Link to={"/workout/tuesday"} className="calendar-link">14</Link></div>
                    <div><Link to={"/workout/restday"} className="calendar-link">15</Link></div>
                    <div><Link to={"/workout/thursday"} className="calendar-link">16</Link></div>
                    <div><Link to={"/workout/friday"} className="calendar-link">17</Link></div>
                    <div><Link to={"/workout/restday"} className="calendar-link">18</Link></div>
                </div>

                {/* fourth week */}
                <div className='fourth-week'>
                    <div><Link to={"/workout/sunday"} className="calendar-link">19</Link></div>
                    <div><Link to={"/workout/monday"} className="calendar-link">20</Link></div>
                    <div><Link to={"/workout/tuesday"} className="calendar-link">21</Link></div>
                    <div><Link to={"/workout/restday"} className="calendar-link">22</Link></div>
                    <div><Link to={"/workout/thursday"} className="calendar-link">23</Link></div>
                    <div><Link to={"/workout/friday"} className="calendar-link">24</Link></div>
                    <div><Link to={"/workout/restday"} className="calendar-link">25</Link></div>
                </div>

                {/* fifth week */}
                <div className='fifth-week'>
                    <div><Link to={"/workout/sunday"} className="calendar-link">26</Link></div>
                    <div><Link to={"/workout/monday"} className="calendar-link">27</Link></div>
                    <div><Link to={"/workout/tuesday"} className="calendar-link">28</Link></div>
                    <div><Link to={"/workout/restday"} className="calendar-link">29</Link></div>
                    <div><Link to={"/workout/thursday"} className="calendar-link">30</Link></div>
                    <div className='calendar-link1'></div>
                    <div className='calendar-link1'></div>
                </div>
            </div>
        </div>
    )
}

export default Home
