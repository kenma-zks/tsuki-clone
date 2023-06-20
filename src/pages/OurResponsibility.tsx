import Banner from "../components/Banner";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const OurResponsibility = () => {
  return (
    <div>
      <Banner />
      <Header />
      <Navbar />
      <div className="w-full flex flex-col justify-center items-center">
        <p
          className="text-2xl font-montserrat font-medium mt-10 mb-4"
          style={{ letterSpacing: "-0.6px" }}
        >
          OUR RESPONSIBILITY
        </p>
        <img
          src="https://cdn.shopify.com/s/files/1/2321/0267/files/SHOP_THE_3000_x_3000_px_3000_x_2000_px_3500_x_2000_px_4000_x_2000_px.jpg?v=1642518269"
          alt="our responsibility"
          className="w-2/5"
        />
        <p
          className="w-2/5 text-center font-montserrat mt-4 mb-4"
          style={{ letterSpacing: "-0.3px", lineHeight: "1.5" }}
        >
          We believe that ethical sourcing is multi-faceted. It isn’t simply
          using organic materials, or paying at least minimum wage, it’s the
          process of systematically choosing the best option across a variety of
          factors. We produce many different products with different industry
          standards, so with each new addition, we learn more about how to
          assess the social, environmental, and individual impacts we make by
          running this business.
        </p>
      </div>
    </div>
  );
};

export default OurResponsibility;
