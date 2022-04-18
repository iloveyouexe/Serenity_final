import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing.jsx";
import Timer from "./pages/Timer.jsx";
import Articles from "./pages/Articles.jsx";
import Navbar from './components/Navbar.jsx';
import Users from "./pages/Users.jsx";
import Breathing from "./pages/Breathing.jsx";
import Chart from "./pages/Chart.jsx";


const App = () => {
    return (
        <BrowserRouter>
         <Navbar />
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/timer" element={<Timer />} />
                <Route path="/articles" element={<Articles />} />
                <Route path="/users" element={<Users />} />
                <Route path="/breathing" element={<Breathing />} />
                <Route path="/chart" element={<Chart />} />
            </Routes>
        </BrowserRouter>
    )
};

export default App;