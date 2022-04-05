import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Navbar from './components/Navbar';
import LoginPage from './components/LoginPage';
import Home from './components/Home';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Home/>
    <Navbar/>
    <Routes>
        <Route element={<LoginPage/>} path="/" />
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
