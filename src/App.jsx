import { useState } from "react";
import "./App.css";
import { Link, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Products from "./components/admin/products/Products";
import VendorProducts from "./components/vendor/products/Products";
import ProductInReview from "./components/admin/product-in-review/ProductInReview";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/admin/product/:id" element={<Products />} />
                <Route path="/vendor/products/new_product" element={<VendorProducts />} />
                <Route path="/admin/products/" element={<ProductInReview />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
