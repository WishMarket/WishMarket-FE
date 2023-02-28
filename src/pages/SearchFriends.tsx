import React from "react";
import Footer from "../components/footer/Footer";
import FriendsForm from "../components/search_friends/FriendsForm";
import Header from "../components/header/Header";

export default function SearchFriends() {
    return (
        <>
            <Header />
            <FriendsForm />
            <Footer />
        </>
    );
}
