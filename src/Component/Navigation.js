import React from "react";
import Home from "../Pages/Home";
import About from "../Pages/About";
import OrderSummary from "../Pages/OrderSummary";
import Product from "../Pages/Product";
import PageNotFound from "../Pages/PageNotFound";
import Featured from "../Pages/NestedPages.js/Featured";
import New from "../Pages/NestedPages.js/New";
import Users from "../Pages/Users";
import DetailPage from "../Pages/DetailPage";
import Admin from "../Pages/Admin";
import Profile from "../Pages/Profile";
import SignIn from "../Pages/SignIn";
import { Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import RequireAuth from "../Utilities/RequireAuth";

const Navigation = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="order-summary" element={<OrderSummary />} />
        <Route path="product" element={<Product />}>
          <Route index element={<Featured />} />
          <Route path="featured" element={<Featured />} />
          <Route path="new" element={<New />} />
        </Route>
        <Route path="users" element={<Users />}>
          <Route path=":userId" element={<DetailPage />} />
          <Route path="admin" element={<Admin />} />
        </Route>
        <Route
          path="profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
        <Route path="signIn" element={<SignIn />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default Navigation;
