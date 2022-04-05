import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


const Home = () => {
    return (
        <div>
            <div className="calendar-body">
                <div className="month">June</div>
                <div className="days">SUN MON TUE WED THUR FRI SAT</div>
                <hr className="week-line"/>

                {/* first week */}
                <div className="first-week"><span className="white">29 30 32</span>
                <a href='/'>1</a>
                <a href='/'>2</a>
                <a href='/'>3</a>
                <a href='/'>4</a>
                </div>

                {/* second week */}
                <div className='second-week'>
                <a href='/'>5</a>
                <a href='/'>6</a>
                <a href='/'>7</a>
                <a href='/'>8</a>
                <a href='/'>9</a>
                <a href='/'>10</a>
                <a href='/'>11</a>
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
