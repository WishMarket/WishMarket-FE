import Header from "../components/header/Header";
import MainCarousel from "../components/main/MainCarousel";
import FamousFunding from "../components/main/FamousFunding";
import ProductList from "../components/main/ProductList";
import Footer from "../components/footer/Footer";

export default function Home() {
    return (
        <>
            <Header />
            <MainCarousel />
            <FamousFunding />
            <ProductList />
            <Footer />
        </>
    );
}
