import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
    const navigate = useNavigate();
    const is_staff = sessionStorage.getItem("is_staff");
    const is_superuser = sessionStorage.getItem("is_superuser");
    console.log(is_staff);

    const handleCollaps = () => {
        var element = document.getElementById("navMenu");
        element.classList.toggle("collapse");
    };

    const handleUserClass = () => {
        var element = document.getElementById("userId");
        element.classList.toggle("user_class");
    };

    const handleLogout = () => {
        handleUserClass();
        sessionStorage.clear();
        navigate("/login");
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-white py-4 fixed-top">
                <div className="container nav_main">
                    <a className="navbar-brand d-flex justify-content-between align-items-center order-lg-0" href="/">
                        {/* <img src="images/shopping-bag-icon.png" alt="site icon" /> */}
                        <span className="text-uppercase fw-lighter ms-2">BRAND</span>
                    </a>

                    <div className="order-lg-2 nav-btns">
                        <button type="button" className="btn position-relative">
                            <i className="fa fa-shopping-cart"></i>
                            <span className="position-absolute top-0 start-100 translate-middle badge bg-primary">5</span>
                        </button>
                        {/* <button type="button" className="btn position-relative">
                            <i className="fa fa-heart"></i>
                            <span className="position-absolute top-0 start-100 translate-middle badge bg-primary">2</span>
                        </button> */}
                        {/* <button type="button" className="btn position-relative">
                            <Link to={"/login"}>

                            </Link>
                        </button> */}

                        <button class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" onClick={handleUserClass} style={{ backgroundColor: "white", border: "none" }}>
                            <i style={{ color: "black" }} className="fa fa-user"></i>
                        </button>
                        <ul class="dropdown-menu" id="userId">
                            <li>
                                <a class="dropdown-item" href="#" onClick={handleUserClass}>
                                    My Profile
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#" onClick={handleUserClass}>
                                    Change Password
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#" onClick={handleLogout}>
                                    Logout
                                </a>
                            </li>
                        </ul>
                    </div>

                    <button className="navbar-toggler border-0" type="button" title="Title" data-bs-toggle="collapse" data-bs-target="#navMenu" onClick={handleCollaps}>
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse order-lg-1" id="navMenu">
                        <ul className="navbar-nav mx-auto text-center">
                            <li className="nav-item px-2 py-2">
                                <a className="nav-link text-uppercase text-dark" href="#header">
                                    home
                                </a>
                            </li>
                            <li className="nav-item px-2 py-2">
                                <a className="nav-link text-uppercase text-dark" href="#collection">
                                    collection
                                </a>
                            </li>
                            <li className="nav-item px-2 py-2">
                                <a className="nav-link text-uppercase text-dark" href="#special">
                                    specials
                                </a>
                            </li>
                            <li className="nav-item px-2 py-2">
                                <a className="nav-link text-uppercase text-dark" href="#blogs">
                                    blogs
                                </a>
                            </li>

                            {is_staff === "true" && (
                                <Link style={{ textDecoration: "none" }} to={"/vendor/products/new_product"}>
                                    <li className="nahttp://localhost:5173/admin/products/new_productv-item px-2 py-2">
                                        <a className="nav-link text-uppercase text-dark" href="#about">
                                            Vendor
                                        </a>
                                    </li>
                                </Link>
                            )}

                            {is_superuser === "true" && (
                                <Link style={{ textDecoration: "none" }} to={"/admin/products"}>
                                    <li className="nav-item px-2 py-2 border-0">
                                        <a className="nav-link text-uppercase text-dark" href="#popular">
                                            Admin
                                        </a>
                                    </li>
                                </Link>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
