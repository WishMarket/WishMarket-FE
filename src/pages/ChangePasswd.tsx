import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import ChangePasswdForm from "../components/login/findpasswd/ChangePasswdForm";

export default function ChangePasswd() {
    return (
        <>
            <Header />
            <ChangePasswdForm />
            <Footer />
        </>
    );
}
