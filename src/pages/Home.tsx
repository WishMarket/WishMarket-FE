import Header from "../components/header/Header";
import MainCarousel from "../components/main/MainCarousel";
import FamousFund from "../components/main/FamousFund";
import ProductList from "../components/main/ProductList";
import Footer from "../components/footer/Footer";

export default function Home() {
    return (
        <>
            <Header />
            <MainCarousel />
            <FamousFund />
            <ProductList />
            <Footer />
        </>
    );
}
