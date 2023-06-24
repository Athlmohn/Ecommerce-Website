import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Home from "../components/Home/Home";
import Productdetails from "../components/ProductDetails/Productdetails";
import SignUp from "../components/SignUp/SignUp";
import SignIn from "../components/SignIn/SignIn";

function RoutesLayout() {

  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/product/:id" element={<Productdetails />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default RoutesLayout;
