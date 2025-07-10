import Header from "../components/Header"
import Banner from "../components/Banner"
import FilterBar from "../components/FilterBar";
import ProductList from "../components/ProductList";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <>
      <Header />
      <FilterBar/>
      <Banner />
      <ProductList/>
      <Hero/>
      <Footer/>
      
    </>
  );
};

export default Home;