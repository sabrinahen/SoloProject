import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


const Home = () => {

    const current = new Date();
    const date = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`;

    return (
        <div>
            <h5>Today's date is {date}!</h5>
            <div className="calendar-body">
                <div className="month"><h2>June</h2></div>
                <div className="days">
                <div>SUN</div>
                <div>MON</div>
                <div>TUE</div>
                <div>WED</div>
                <div>THUR</div>
                <div>FRI</div>
                <div>SAT</div>
                </div>
                <hr className="week-line"/>

                {/* first week */}
                <div className="first-week">
                    <div className="white">29</div>
                    <div className="white">30</div>
                    <div className="white">31</div>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                </div>

                {/* second week */}
                <div className='second-week'>
                    <div>5</div>
                    <div>6</div>
                    <div>7</div>
                    <div>8</div>
                    <div>9</div>
                    <div>10</div>
                    <div>11</div>
                </div>

                {/* third week */}
                <div className='third-week'>
                <a href='/'>12</a>
                <a href='/'>13</a>
                <a href='/'>14</a>
                <a href='/'>15</a>
                <a href='/'>16</a>
                <a href='/'>17</a>
                <a href='/'>18</a>
                </div>

                {/* fourth week */}
                <div className='fourth-week'>
                <a href='/'>19</a>
                <a href='/'>20</a>
                <a href='/'>21</a>
                <a href='/'>22</a>
                <a href='/'>23</a>
                <a href='/'>24</a>
                <a href='/'>25</a>
                </div>

                {/* fifth week */}
                <div className='fifth-week'>
                <a href='/'>26</a>
                <a href='/'>27</a>
                <a href='/'>28</a>
                <a href='/'>29</a>
                <a href='/'>30</a>
                <span className='white'>1 2</span>
                </div>
            </div>
        </div>
    )
}

export default Home
