import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    const access = sessionStorage.getItem("access");

    const fetchData = async () => {
        const access = sessionStorage.getItem("access");

        await axios
            .get("https://webwizards.pythonanywhere.com/inventory/products", {
                headers: { Authorization: `Bearer ${access}` },
            })
            .then((res) => {
                console.log(res.data);
                setProducts([...res.data]);
                console.log(products);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        if (access === null || access === undefined) {
            navigate("/login");
        }
    }, [access]);

    return (
        <>
            <div className="home">
                <div id="hero-carousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>

                    <div className="carousel-inner">
                        <div className="carousel-item active c-item">
                            <img src="https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a?fit=crop&w=2134&q=100" className="d-block w-100 c-img" alt="Slide 1" />
                            <div className="carousel-caption top-0 mt-4">
                                <p className="mt-5 fs-3 text-uppercase">Discover the hidden world</p>
                                <h1 className="display-1 fw-bolder text-capitalize">The Electronic World</h1>
                                <button className="btn btn-primary px-4 py-2 fs-5 mt-5">Go to shop</button>
                            </div>
                        </div>
                        <div className="carousel-item c-item">
                            <img src="https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a?fit=crop&w=2134&q=100" className="d-block w-100 c-img" alt="Slide 2" />
                            <div className="carousel-caption top-0 mt-4">
                                <p className="text-uppercase fs-3 mt-5">The season has arrived</p>
                                <p className="display-1 fw-bolder text-capitalize">3 available mobile</p>
                                <button className="btn btn-primary px-4 py-2 fs-5 mt-5" data-bs-toggle="modal" data-bs-target="#booking-modal">
                                    Go to shop
                                </button>
                            </div>
                        </div>
                        <div className="carousel-item c-item">
                            <img src="https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a?fit=crop&w=2134&q=100" className="d-block w-100 c-img" alt="Slide 3" />
                            <div className="carousel-caption top-0 mt-4">
                                <p className="text-uppercase fs-3 mt-5">Destination activities</p>
                                <p className="display-1 fw-bolder text-capitalize">Go Digital</p>
                                <button className="btn btn-primary px-4 py-2 fs-5 mt-5" data-bs-toggle="modal" data-bs-target="#booking-modal">
                                    Go to shop
                                </button>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#hero-carousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#hero-carousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

                <section id="collection" className="py-5">
                    <div className="m-5">
                        <div className="title text-center">
                            <h2 className="position-relative d-inline-block">New Collection</h2>
                        </div>

                        <div className="row g-0">
                            <div className="d-flex flex-wrap justify-content-center mt-5 filter-button-group">
                                <button type="button" className="btn m-2 text-dark active-filter-btn" data-filter="*">
                                    All
                                </button>
                                <button type="button" className="btn m-2 text-dark" data-filter=".best">
                                    Best Sellers
                                </button>
                                <button type="button" className="btn m-2 text-dark" data-filter=".feat">
                                    Featured
                                </button>
                                <button type="button" className="btn m-2 text-dark" data-filter=".new">
                                    New Arrival
                                </button>
                            </div>

                            <div className="collection-list mt-4 row gx-0 gy-3">
                                {products.map((product) => {
                                    return (
                                        <div className="col-md-6 col-lg-4 col-xl-3 p-2 best">
                                            <div className="collection-img position-relative">
                                                <img src={product.image1} className="w-100" />
                                                {/* <span className="position-absolute bg-primary text-black d-flex align-items-center justify-content-center">sale</span> */}
                                            </div>
                                            <div className="text-center">
                                                <div className="rating mt-3">
                                                    <span className="text-primary">
                                                        <i className="fas fa-star"></i>
                                                    </span>
                                                    <span className="text-primary">
                                                        <i className="fas fa-star"></i>
                                                    </span>
                                                    <span className="text-primary">
                                                        <i className="fas fa-star"></i>
                                                    </span>
                                                    <span className="text-primary">
                                                        <i className="fas fa-star"></i>
                                                    </span>
                                                    <span className="text-primary">
                                                        <i className="fas fa-star"></i>
                                                    </span>
                                                </div>
                                                <p className="text-capitalize my-1">{product.name}</p>
                                                <span className="fw-bold">$ {product.price}</span>
                                            </div>
                                        </div>
                                    );
                                })}

                                {/* <div className="col-md-6 col-lg-4 col-xl-3 p-2 feat">
                                    <div className="collection-img position-relative">
                                        <img src="./images/22.webp" className="w-100" />
                                    </div>
                                    <div className="text-center">
                                        <div className="rating mt-3">
                                            <span className="text-primary">
                                                <i className="fas fa-star"></i>
                                            </span>
                                            <span className="text-primary">
                                                <i className="fas fa-star"></i>
                                            </span>
                                            <span className="text-primary">
                                                <i className="fas fa-star"></i>
                                            </span>
                                            <span className="text-primary">
                                                <i className="fas fa-star"></i>
                                            </span>
                                            <span className="text-primary">
                                                <i className="fas fa-star"></i>
                                            </span>
                                        </div>
                                        <p className="text-capitalize my-1">Smart Mobile</p>
                                        <span className="fw-bold">$ 45.50</span>
                                    </div>
                                </div>

                                <div className="col-md-6 col-lg-4 col-xl-3 p-2 new">
                                    <div className="collection-img position-relative">
                                        <img src="./images/23.webp" className="w-100" />
                                    </div>
                                    <div className="text-center">
                                        <div className="rating mt-3">
                                            <span className="text-primary">
                                                <i className="fas fa-star"></i>
                                            </span>
                                            <span className="text-primary">
                                                <i className="fas fa-star"></i>
                                            </span>
                                            <span className="text-primary">
                                                <i className="fas fa-star"></i>
                                            </span>
                                            <span className="text-primary">
                                                <i className="fas fa-star"></i>
                                            </span>
                                            <span className="text-primary">
                                                <i className="fas fa-star"></i>
                                            </span>
                                        </div>
                                        <p className="text-capitalize my-1">Smart Mobile</p>
                                        <span className="fw-bold">$ 45.50</span>
                                    </div>
                                </div>

                                <div className="col-md-6 col-lg-4 col-xl-3 p-2 best">
                                    <div className="collection-img position-relative">
                                        <img src="images/24.webp" className="w-100" />
                                    </div>
                                    <div className="text-center">
                                        <div className="rating mt-3">
                                            <span className="text-primary">
                                                <i className="fas fa-star"></i>
                                            </span>
                                            <span className="text-primary">
                                                <i className="fas fa-star"></i>
                                            </span>
                                            <span className="text-primary">
                                                <i className="fas fa-star"></i>
                                            </span>
                                            <span className="text-primary">
                                                <i className="fas fa-star"></i>
                                            </span>
                                            <span className="text-primary">
                                                <i className="fas fa-star"></i>
                                            </span>
                                        </div>
                                        <p className="text-capitalize my-1">Smart Mobile</p>
                                        <span className="fw-bold">$ 45.50</span>
                                    </div>
                                </div>

                                <div className="col-md-6 col-lg-4 col-xl-3 p-2 feat">
                                    <div className="collection-img position-relative">
                                        <img src="images/25.webp" className="w-100" />
                                    </div>
                                    <div className="text-center">
                                        <div className="rating mt-3">
                                            <span className="text-primary">
                                                <i className="fas fa-star"></i>
                                            </span>
                                            <span className="text-primary">
                                                <i className="fas fa-star"></i>
                                            </span>
                                            <span className="text-primary">
                                                <i className="fas fa-star"></i>
                                            </span>
                                            <span className="text-primary">
                                                <i className="fas fa-star"></i>
                                            </span>
                                            <span className="text-primary">
                                                <i className="fas fa-star"></i>
                                            </span>
                                        </div>
                                        <p className="text-capitalize my-1">Smart Mobile</p>
                                        <span className="fw-bold">$ 45.50</span>
                                    </div>
                                </div>

                                <div className="col-md-6 col-lg-4 col-xl-3 p-2 new">
                                    <div className="collection-img position-relative">
                                        <img src="images/26.webp" className="w-100" />
                                    </div>
                                    <div className="text-center">
                                        <div className="rating mt-3">
                                            <span className="text-primary">
                                                <i className="fas fa-star"></i>
                                            </span>
                                            <span className="text-primary">
                                                <i className="fas fa-star"></i>
                                            </span>
                                            <span className="text-primary">
                                                <i className="fas fa-star"></i>
                                            </span>
                                            <span className="text-primary">
                                                <i className="fas fa-star"></i>
                                            </span>
                                            <span className="text-primary">
                                                <i className="fas fa-star"></i>
                                            </span>
                                        </div>
                                        <p className="text-capitalize my-1">Smart Mobile</p>
                                        <span className="fw-bold">$ 45.50</span>
                                    </div>
                                </div>

                                <div className="col-md-6 col-lg-4 col-xl-3 p-2 best">
                                    <div className="collection-img position-relative">
                                        <img src="images/27.webp" className="w-100" />
                                    </div>
                                    <div className="text-center">
                                        <div className="rating mt-3">
                                            <span className="text-primary">
                                                <i className="fas fa-star"></i>
                                            </span>
                                            <span className="text-primary">
                                                <i className="fas fa-star"></i>
                                            </span>
                                            <span className="text-primary">
                                                <i className="fas fa-star"></i>
                                            </span>
                                            <span className="text-primary">
                                                <i className="fas fa-star"></i>
                                            </span>
                                            <span className="text-primary">
                                                <i className="fas fa-star"></i>
                                            </span>
                                        </div>
                                        <p className="text-capitalize my-1">Smart Mobile</p>
                                        <span className="fw-bold">$ 45.50</span>
                                    </div>
                                </div>

                                <div className="col-md-6 col-lg-4 col-xl-3 p-2 feat">
                                    <div className="collection-img position-relative">
                                        <img src="images/28.webp" className="w-100" />
                                    </div>
                                    <div className="text-center">
                                        <div className="rating mt-3">
                                            <span className="text-primary">
                                                <i className="fas fa-star"></i>
                                            </span>
                                            <span className="text-primary">
                                                <i className="fas fa-star"></i>
                                            </span>
                                            <span className="text-primary">
                                                <i className="fas fa-star"></i>
                                            </span>
                                            <span className="text-primary">
                                                <i className="fas fa-star"></i>
                                            </span>
                                            <span className="text-primary">
                                                <i className="fas fa-star"></i>
                                            </span>
                                        </div>
                                        <p className="text-capitalize my-1">Smart Mobile</p>
                                        <span className="fw-bold">$ 45.50</span>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </section>

                <section id="special" className="py-5">
                    <div className="m-5">
                        <div className="title text-center py-5">
                            <h2 className="position-relative d-inline-block">Special Selection</h2>
                        </div>

                        <div className="special-list row g-0">
                            <div className="col-md-6 col-lg-4 col-xl-3 p-2">
                                <div className="special-img position-relative overflow-hidden">
                                    <img
                                        src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1722601384/Croma%20Assets/CMS/LP%20Page%20Banners/2024/BAU/pcp_smartphone_nc_newatcroma_OnePlusNord4_2Aug2024_sl3mc0.png?tr=w-1024"
                                        className="w-100"
                                    />
                                    {/* <span className="position-absolute d-flex align-items-center justify-content-center text-primary fs-4">
                                        <i className="fas fa-heart"></i>
                                    </span> */}
                                </div>
                                <div className="text-center">
                                    <p className="text-capitalize mt-3 mb-1">Smart Mobile</p>
                                    <span className="fw-bold d-block">$ 45.50</span>
                                    <a href="#" className="btn btn-primary mt-3">
                                        Add to Cart
                                    </a>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-4 col-xl-3 p-2">
                                <div className="special-img position-relative overflow-hidden">
                                    <img
                                        src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1721999361/Croma%20Assets/CMS/LP%20Page%20Banners/2024/BAU/pcp_smartphone_nc_newatcroma_Oppo_26July2024_oo9qx2.png?tr=w-1024"
                                        className="w-100"
                                    />
                                    {/* <span className="position-absolute d-flex align-items-center justify-content-center text-primary fs-4">
                                        <i className="fas fa-heart"></i>
                                    </span> */}
                                </div>
                                <div className="text-center">
                                    <p className="text-capitalize mt-3 mb-1">Smart Mobile</p>
                                    <span className="fw-bold d-block">$ 45.50</span>
                                    <a href="#" className="btn btn-primary mt-3">
                                        Add to Cart
                                    </a>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-4 col-xl-3 p-2">
                                <div className="special-img position-relative overflow-hidden">
                                    <img
                                        src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1721999356/Croma%20Assets/CMS/LP%20Page%20Banners/2024/BAU/pcp_smartphone_nc_newatcroma_Redmi_26July2024_xtvg8s.png?tr=w-1024"
                                        className="w-100"
                                    />
                                    {/* <span className="position-absolute d-flex align-items-center justify-content-center text-primary fs-4">
                                        <i className="fas fa-heart"></i>
                                    </span> */}
                                </div>
                                <div className="text-center">
                                    <p className="text-capitalize mt-3 mb-1">Smart Mobile</p>
                                    <span className="fw-bold d-block">$ 45.50</span>
                                    <a href="#" className="btn btn-primary mt-3">
                                        Add to Cart
                                    </a>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-4 col-xl-3 p-2">
                                <div className="special-img position-relative overflow-hidden">
                                    <img
                                        src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1721994599/Croma%20Assets/CMS/CAtegory/Mobile%20phone%20-%20C10/pcp_smartphone_nc_newatcroma_Redmi13_26July2024_p6dxiw.png?tr=w-1024"
                                        className="w-100"
                                    />
                                    {/* <span className="position-absolute d-flex align-items-center justify-content-center text-primary fs-4">
                                        <i className="fas fa-heart"></i>
                                    </span> */}
                                </div>
                                <div className="text-center">
                                    <p className="text-capitalize mt-3 mb-1">Smart Mobile</p>
                                    <span className="fw-bold d-block">$ 45.50</span>
                                    <a href="#" className="btn btn-primary mt-3">
                                        Add to Cart
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="offers" className="py-5">
                    <div className="container">
                        <div className="row d-flex align-items-center justify-content-center text-center justify-content-lg-start text-lg-start">
                            <div className="offers-content">
                                {/* <span className="text-white">Discount Up To 40%</span>
                                <h2 className="mt-2 mb-4 text-white">Grand Sale Offer!</h2> */}

                                {/* <a href="#" className="btn">
                                    Buy Now
                                </a> */}
                            </div>
                        </div>
                    </div>
                </section>

                <section id="blogs" className="py-5">
                    <div className="m-5">
                        <div className="title text-center py-5">
                            <h2 className="position-relative d-inline-block">Our Latest Blog</h2>
                        </div>

                        <div className="row g-3">
                            <div className="card border-0 col-md-6 col-lg-4 bg-transparent my-3">
                                <img src="images/blog_1.jpg" alt="" />
                                <div className="card-body px-0">
                                    <h4 className="card-title">Lorem ipsum, dolor sit amet consectetur adipisicing</h4>
                                    <p className="card-text mt-3 text-muted">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet aspernatur repudiandae nostrum dolorem molestias odio. Sit fugit adipisci omnis quia itaque
                                        ratione iusto sapiente reiciendis, numquam officiis aliquid ipsam fuga.
                                    </p>
                                    <p className="card-text">
                                        <small className="text-muted">
                                            {" "}
                                            <span className="fw-bold">Author: </span>John Doe{" "}
                                        </small>
                                    </p>
                                    <a href="#" className="btn">
                                        Read More
                                    </a>
                                </div>
                            </div>

                            <div className="card border-0 col-md-6 col-lg-4 bg-transparent my-3">
                                <img src="images/blog_2.jpg" alt="" />
                                <div className="card-body px-0">
                                    <h4 className="card-title">Lorem ipsum, dolor sit amet consectetur adipisicing</h4>
                                    <p className="card-text mt-3 text-muted">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet aspernatur repudiandae nostrum dolorem molestias odio. Sit fugit adipisci omnis quia itaque
                                        ratione iusto sapiente reiciendis, numquam officiis aliquid ipsam fuga.
                                    </p>
                                    <p className="card-text">
                                        <small className="text-muted">
                                            {" "}
                                            <span className="fw-bold">Author: </span>John Doe{" "}
                                        </small>
                                    </p>
                                    <a href="#" className="btn">
                                        Read More
                                    </a>
                                </div>
                            </div>

                            <div className="card border-0 col-md-6 col-lg-4 bg-transparent my-3">
                                <img src="images/blog_3.jpg" alt="" />
                                <div className="card-body px-0">
                                    <h4 className="card-title">Lorem ipsum, dolor sit amet consectetur adipisicing</h4>
                                    <p className="card-text mt-3 text-muted">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet aspernatur repudiandae nostrum dolorem molestias odio. Sit fugit adipisci omnis quia itaque
                                        ratione iusto sapiente reiciendis, numquam officiis aliquid ipsam fuga.
                                    </p>
                                    <p className="card-text">
                                        <small className="text-muted">
                                            {" "}
                                            <span className="fw-bold">Author: </span>John Doe{" "}
                                        </small>
                                    </p>
                                    <a href="#" className="btn">
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="about" className="py-5">
                    <div className="m-5">
                        <div className="row gy-lg-5 align-items-center">
                            <div className="col-lg-6 order-lg-1 text-center text-lg-start">
                                <div className="title pt-3 pb-5">
                                    <h2 className="position-relative d-inline-block ms-4">About Us</h2>
                                </div>
                                <p className="lead text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, ipsam.</p>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem fuga blanditiis, modi exercitationem quae quam eveniet! Minus labore voluptatibus corporis
                                    recusandae accusantium velit, nemo, nobis, nulla ullam pariatur totam quos.
                                </p>
                            </div>
                            <div className="col-lg-6 order-lg-0">
                                <img
                                    src="https://img.freepik.com/free-photo/smiling-young-teenage-lady-holds-her-passport-documents-with-ticket-her-hands-isolated-green-studio-wall_231208-4942.jpg?t=st=1723664027~exp=1723667627~hmac=7d3bc76bceaffe70bb76f3427d2ec099ffae5db6bbd007e6131259c225f85207&w=1060"
                                    alt=""
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* <section id="popular" className="py-5">
                    <div className="container">
                        <div className="title text-center pt-3 pb-5">
                            <h2 className="position-relative d-inline-block ms-4">Popular Of This Year</h2>
                        </div>

                        <div className="row">
                            <div className="col-md-6 col-lg-4 row g-3">
                                <h3 className="fs-5">Top Rated</h3>
                                <div className="d-flex align-items-start justify-content-start">
                                    <img src="images/top_rated_1.jpg" alt="" className="img-fluid pe-3 w-25" />
                                    <div>
                                        <p className="mb-0">Smart Phone</p>
                                        <span>$ 20.00</span>
                                    </div>
                                </div>
                                <div className="d-flex align-items-start justify-content-start">
                                    <img src="images/top_rated_2.jpg" alt="" className="img-fluid pe-3 w-25" />
                                    <div>
                                        <p className="mb-0">Smart Phone</p>
                                        <span>$ 20.00</span>
                                    </div>
                                </div>
                                <div className="d-flex align-items-start justify-content-start">
                                    <img src="images/top_rated_3.jpg" alt="" className="img-fluid pe-3 w-25" />
                                    <div>
                                        <p className="mb-0">Smart Phone</p>
                                        <span>$ 20.00</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-4 row g-3">
                                <h3 className="fs-5">Best Selling</h3>
                                <div className="d-flex align-items-start justify-content-start">
                                    <img src="images/best_selling_1.jpg" alt="" className="img-fluid pe-3 w-25" />
                                    <div>
                                        <p className="mb-0">Smart Phone</p>
                                        <span>$ 20.00</span>
                                    </div>
                                </div>
                                <div className="d-flex align-items-start justify-content-start">
                                    <img src="images/best_selling_2.jpg" alt="" className="img-fluid pe-3 w-25" />
                                    <div>
                                        <p className="mb-0">Smart Phone</p>
                                        <span>$ 20.00</span>
                                    </div>
                                </div>
                                <div className="d-flex align-items-start justify-content-start">
                                    <img src="images/best_selling_3.jpg" alt="" className="img-fluid pe-3 w-25" />
                                    <div>
                                        <p className="mb-0">Smart Phone</p>
                                        <span>$ 20.00</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-4 row g-3">
                                <h3 className="fs-5">On Sale</h3>
                                <div className="d-flex align-items-start justify-content-start">
                                    <img src="images/on_sale_1.jpg" alt="" className="img-fluid pe-3 w-25" />
                                    <div>
                                        <p className="mb-0">Smart Phone</p>
                                        <span>$ 20.00</span>
                                    </div>
                                </div>
                                <div className="d-flex align-items-start justify-content-start">
                                    <img src="images/on_sale_2.jpg" alt="" className="img-fluid pe-3 w-25" />
                                    <div>
                                        <p className="mb-0">Smart Phone</p>
                                        <span>$ 20.00</span>
                                    </div>
                                </div>
                                <div className="d-flex align-items-start justify-content-start">
                                    <img src="images/on_sale_3.jpg" alt="" className="img-fluid pe-3 w-25" />
                                    <div>
                                        <p className="mb-0">Smart Phone</p>
                                        <span>$ 20.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}

                <section id="newsletter" className="py-5">
                    <div className="m-5">
                        <div className="d-flex flex-column align-items-center justify-content-center">
                            <div className="title text-center pt-3 pb-5">
                                <h2 className="position-relative d-inline-block ms-4">Newsletter Subscription</h2>
                            </div>

                            <p className="text-center text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus rem officia accusantium maiores quisquam dolorum?</p>
                            <div className="input-group mb-3 mt-3">
                                <input type="text" className="form-control" placeholder="Enter Your Email ..." />
                                <button className="btn btn-primary" type="submit">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Home;
