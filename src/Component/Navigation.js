import React from "react";
import Home from "../Pages/Home";
import About from "../Pages/About";
import OrderSummary from "../Pages/OrderSummary";
import PageNotFound from "../Pages/PageNotFound";
import { Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";

const Navigation = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="order-summary" element={<OrderSummary />} />
        <Route path="*" element={<PageNotFound />}/>
      </Routes>
    </>
  );
};

export default Navigation;
