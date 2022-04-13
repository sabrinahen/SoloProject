import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Navbar from './components/Navbar';
import LoginPage from './components/LoginPage';
import Home from './components/Home';
import LegDay1Vid from './components/LegDay1Vid';
import NewWorkoutForm from './components/NewWorkoutForm';
import OneWorkout from './components/DisplayOneWorkout';
import AllWorkouts from './components/DisplayAllWorkouts';
import EditWorkoutForm from './components/EditWorkoutForm';
import Register from './components/Register';
import Profile from './components/Profile';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Navbar/>
    <Routes>
        <Route element={<LoginPage />} path="/"/>
        <Route element={<Register />} path="/register"/>
        <Route element={<Home/>} path="/home"/>
        <Route element={<Profile />} path="/user/profile/:username"/>
        <Route element={<NewWorkoutForm/>} path="/workout/new"/>
        <Route element={<EditWorkoutForm/>} path="/workout/edit/:id"/>
        <Route element={<AllWorkouts/>} path="/workouts" />
        <Route element={<OneWorkout/>} path="/workout/:id" />
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
