import React from "react";
import Header from "../components/header/Header";
import FundingAdditionForm from "../components/funding_addition/FundingAdditionForm";
import Footer from "../components/footer/Footer";

export default function FundingAddition() {
    return (
        <>
            <Header />
            <FundingAdditionForm />
            <Footer />
        </>
    );
}
