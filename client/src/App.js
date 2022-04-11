import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Navbar from './components/Navbar';
import LoginPage from './components/LoginPage';
import Home from './components/Home';
import LegDay1Vid from './components/LegDay1Vid';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Home/>
    {/* <Navbar/> */}
    {/* <LegDay1Vid /> */}
    <Routes>
        {/* <Route element={<LoginPage/>} path="/" /> */}
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
