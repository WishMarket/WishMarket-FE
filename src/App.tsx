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
import SearchFriends from "./pages/SearchFriends";
import FriendsList from "./pages/FriendsList";
import ScrollToTop from "./hooks/ScrollToTop";
import NaverRedirect from "./components/login/social/NaverRedirect";
import GitRedirect from "./components/login/social/GitRedirect";

function App() {
    return (
        <div>
            <BrowserRouter>
                <ScrollToTop />
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
                    <Route path="/funding/join/:id" element={<FundingAddition />}></Route>
                    <Route path="/searchfriends" element={<SearchFriends />}></Route>
                    <Route path="/friendslist" element={<FriendsList />}></Route>
                    <Route path="/login/oauth2/code/naver" element={<NaverRedirect />}></Route>
                    <Route path="/login/oauth2/code/github" element={<GitRedirect />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}
export default App;
