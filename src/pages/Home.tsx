import Accessories from "../components/Accessories";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Instalink from "../components/Instalink";
import Navbar from "../components/Navbar";
import SecondCarousel from "../components/SecondCarousel";

const Home = () => {
  return (
    <div>
      <div
        id="banner"
        className="top-0 left-0 right-0 bg-[#F4E0EA] h-6 flex items-center justify-center"
      >
        <p
          className="text-black text-xs font-bold tracking-widest px-2"
          style={{ letterSpacing: "2px" }}
        >
          FREE WORLDWIDE SHIPPING OVER $175
        </p>
        <p
          className="text-black text-xs font-light tracking-widest px-2"
          style={{ letterSpacing: "2px" }}
        >
          |
        </p>
        <p
          className="text-black text-xs font-medium tracking-widest px-2"
          style={{ letterSpacing: "2px" }}
        >
          USE CODE: TSUKI
        </p>
      </div>
      <Header />
      <Navbar />
      <Accessories />
      <Carousel />
      <SecondCarousel />
      <Instalink />
      <Footer />
    </div>
  );
};

export default Home;
