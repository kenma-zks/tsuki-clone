import React from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Login = () => {
  return (
    <div>
      <Banner />
      <Header />
      <Navbar />
      <div className="w-1/4 flex flex-col items-center mx-auto mt-20 pb-20">
        <p className="text-2xl font-montserrat">Login </p>
        <p className="text-sm font-montserrat mt-4">
          Don't have an account? Sign up here.
        </p>
        <div className="w-full h-10 border border-black mt-10">
          <p className="text-sm text-gray-500 font-montserrat text-left pl-4 pt-2">
            Email
          </p>
        </div>
        <div className="w-full h-10 border border-black mt-4">
          <p className="text-sm text-gray-500 font-montserrat text-left pl-4 pt-2">
            Password
          </p>
        </div>
        <div className="flex justify-end w-full">
          <p className="text-sm font-montserrat mt-4">Forgot your password?</p>
        </div>
        <div className="flex justify-start w-full">
          <div className="w-1/4 h-10 bg-[#F4E0EA] mt-10">
            <p className="font-semibold font-montserrat mt-2 text-center text-white rounded-md hover:bg-[#E8BED2] cursor-pointer">
              Sign In
            </p>
          </div>
          <div className="w-1.5/4 h-10 mt-10 pl-6">
            <p className="text-sm font-montserrat mt-2 text-center text-black rounded-md hover:text-[#F4E0EA] cursor-pointer">
              Return to Store
            </p>
          </div>
        </div>
      </div>
      <div className="w-full bg-black">
        <Footer />
      </div>
    </div>
  );
};

export default Login;
