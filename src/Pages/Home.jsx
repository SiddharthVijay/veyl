import Hero from "../components/Hero";
import Benefits from "../components/Benefits";
import Banner from "../components/Banner";
import Purchase from "../components/Purchase";
import Footer from "../components/Footer";
import Product from "../components/Product";
import Featured from "../components/Featured";

function Home() {
  return (
    <>
      <Hero />
      <Featured />
      <Product />
      <Benefits />
      <Banner />
      <Purchase />
      <Footer /> 
    </>
  );
}

export default Home;
