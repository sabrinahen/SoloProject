import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const CompleteWorkoutForm = (props) => {

    const [completion, setCompletion] = useState("");
    // const []

    return (
        <div>
            <form>
                <h3>How did it go?</h3>
                <div className="radio-toolbar">
                    <div>
                        <input type="radio" id="completed" name="completed" value="I finished my workout!" />
                        <label for="radioApple">I finished my workout!</label>
                    </div>
                    <div>
                        <input type="radio" id="partial" name="completed" value="I did some of my workout!" />
                        <label for="radioApple">I did some of my workout!</label>
                    </div>
                    <div>
                        <input type="radio" id="none" name="none" value="I didn't do my workout today." />
                        <label for="radioApple">I didn't do my workout today.</label>
                    </div>
                </div>
                <div>
                    <label>Tell us how your workout and/or day went!</label>
                    <input type="text" value="message"/>
                </div>
                <div>
                    <button>Post</button>
                </div>
            </form>
        </div>
    )
}

export default CompleteWorkoutForm;
