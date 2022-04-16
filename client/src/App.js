import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Navbar from './components/Navbar';
import LoginPage from './components/LoginPage';
import Home from './views/Home';
import LegDay1Vid from './components/LegDay1Vid';
import NewWorkoutForm from './components/NewWorkoutForm';
import OneWorkout from './components/DisplayOneWorkout';
import AllWorkouts from './components/DisplayAllWorkouts';
import EditWorkoutForm from './components/EditWorkoutForm';
import Register from './components/Register';
import Profile from './components/Profile';
import Legs1 from './views/Legs1';
import Legs2 from './views/Legs2';
import Arms1 from './views/Arms1';
import HIIT1 from './views/HIIT1';
import Community from './views/Community';
import RestDayForm from './components/RestDayForm';
import RestDay from './views/RestDay';
import ProfilePage from './views/ProfilePage'



function App() {
  return (
    <BrowserRouter>
    <div className="App">
    {/* <Navbar/> */}
    <Routes>
        <Route element={<LoginPage />} path="/"/>
        <Route element={<Register />} path="/register"/>
        <Route element={<Home/>} path="/home"/>
        <Route element={<Legs1/>} path="/workout/legs1"/>
        <Route element={<Legs2/>} path="/workout/legs2"/>
        <Route element={<Arms1/>} path="/workout/arms1"/>
        <Route element={<HIIT1/>} path="/workout/hiit1"/>
        <Route element={<RestDay/>} path="/workout/restday"/>
        <Route element={<ProfilePage />} path="/user/profile/:username"/>
        <Route element={<NewWorkoutForm/>} path="/workout/new"/>
        <Route element={<EditWorkoutForm/>} path="/workout/edit/:id"/>
        <Route element={<Community/>} path="/community" />
        <Route element={<OneWorkout/>} path="/workout/:id" />
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
