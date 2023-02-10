import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./css/main.css";
import Home from "./pages/Home";
import Category from "./pages/Category";
import ProductDetail from "./pages/ProductDetail";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import FindPasswd from "./pages/FindPasswd";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/category" element={<Category />}></Route>
                    <Route path="/category/:id" element={<ProductDetail />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/login/findpasswd" element={<FindPasswd />}></Route>
                    <Route path="/signup" element={<Signup />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}
export default App;
