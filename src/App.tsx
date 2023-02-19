import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./css/main.css";
import Home from "./pages/Home";
import Category from "./pages/Category";
import ProductDetail from "./pages/ProductDetail";
import Profile from "./pages/Profile";
import Wishlist from "./pages/Wishlist";
import ReceivedGift from "./pages/ReceivedGift";
import Account from "./pages/Account";
import SearchProduct from "./pages/SearchProduct";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import FindPasswd from "./pages/FindPasswd";
import ChangePasswd from "./pages/ChangePasswd";
import FundingStart from "./pages/FundingStart";
import FundingAddition from "./pages/FundingAddition";
import Friends from "./pages/Friends";
import FriendWishlist from "./pages/FriendWishlist";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/category/:id" element={<Category />}></Route>
                    <Route path="/category/product/:id" element={<ProductDetail />}></Route>
                    <Route path="/profile" element={<Profile />}></Route>
                    <Route path="/wish" element={<Wishlist />}></Route>
                    <Route path="/received" element={<ReceivedGift />}></Route>
                    <Route path="/account" element={<Account />}></Route>
                    <Route path="/search" element={<SearchProduct />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/login/findpasswd" element={<FindPasswd />}></Route>
                    <Route path="/login/findpasswd/changepasswd" element={<ChangePasswd />}></Route>
                    <Route path="/signup" element={<Signup />}></Route>
                    <Route path="/funding/start/:id" element={<FundingStart />}></Route>
                    {/* funding join은 params 다른것으로 받아야함 ex) fundingId */}
                    <Route path="/funding/join/:id" element={<FundingAddition />}></Route>
                    <Route path="/friends" element={<Friends />}></Route>
                    <Route path="/friends/:id" element={<FriendWishlist />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}
export default App;