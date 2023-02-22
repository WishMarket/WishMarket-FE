import React from "react";
import Header from "../components/header/Header";
import FriendsContainer from "../components/friends_list/FriendsContainer";
import Footer from "../components/footer/Footer";

export default function FriendsList() {
    return (
        <>
            <Header />
            <FriendsContainer />
            <Footer />
        </>
    );
}
