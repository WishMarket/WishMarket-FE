import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./css/main.css";
import Home from "./pages/Home";
function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    {/* <Route path="/login" element={<Login />}></Route> */}
                </Routes>
            </BrowserRouter>
        </div>
    );
}
export default App;
