import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "./products.css";
import axios from "axios";

const VendorProducts = () => {
    const [product, setProduct] = useState({
        name: "",
        description: "",
        price: "",
        category: "",
        is_verified: false,
        final_price: "1000",
    });
    const navigate = useNavigate();

    const handleAddProduct = async (e) => {
        e.preventDefault();
        console.log(product);
        const access = sessionStorage.getItem("access");
        const headerrr = `Authorization: Bearer ${access}`;

        await axios
            .post("https://webwizards.pythonanywhere.com/inventory/product", product, {
                headers: { Authorization: `Bearer ${access}`, "content-type": "multipart/form-data" },
            })
            .then((res) => {
                console.log(res.data);
                navigate("/");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="products">
            <form classNaame="needs-validation" method="POST" enctype="multipart/form-data">
                <div class="row">
                    <div class="col-8 offset-2">
                        <h3 class="mb-3">Add New Product</h3>
                        <div class="mb-3">
                            <label for="title" class="form-label">
                                Title
                            </label>
                            <input
                                value={product.name}
                                name="title"
                                class="form-control"
                                type="text"
                                id="title"
                                placeholder="enter title"
                                required
                                onChange={(e) => setProduct({ ...product, name: e.target.value })}
                            />
                            <div class="invalid-feedback">Please enter a Title</div>
                        </div>

                        <div class="mb-3">
                            <label for="description" class="form-label">
                                Description
                            </label>
                            <textarea
                                value={product.description}
                                name="description"
                                class="form-control"
                                id="description"
                                required
                                placeholder="enter description"
                                rows="3"
                                onChange={(e) => setProduct({ ...product, description: e.target.value })}
                            />
                            <div class="invalid-feedback">Please enter a Description</div>
                        </div>

                        <div class="mb-3">
                            <label for="image" class="form-label">
                                Image
                            </label>
                            <input name="image" class="form-control" type="file" id="image" placeholder="enter image url" onChange={(e) => setProduct({ ...product, image1: e.target.files[0] })} />
                        </div>

                        <div class="mb-3 row">
                            <div class="col-4">
                                <label for="price" class="form-label">
                                    Price
                                </label>
                                <input
                                    value={product.price}
                                    name="price"
                                    class="form-control"
                                    id="price"
                                    placeholder="enter price"
                                    required
                                    onChange={(e) => setProduct({ ...product, price: e.target.value })}
                                />
                                <div class="invalid-feedback">Please enter a valid Price</div>
                            </div>
                            <div class="col-8">
                                <label for="category" class="form-label">
                                    Category
                                </label>
                                <input
                                    value={product.category}
                                    name="category"
                                    class="form-control"
                                    type="text"
                                    id="category"
                                    placeholder="enter category"
                                    required
                                    onChange={(e) => setProduct({ ...product, category: e.target.value })}
                                />
                                <div class="invalid-feedback">Please enter a valid category</div>
                            </div>
                        </div>

                        <div class="mb-3">
                            <label for="is-verified" class="form-label">
                                Is-verified
                            </label>
                            <select disabled class="form-select" aria-label="Default select example">
                                <option>No</option>
                                <option>Yes</option>
                            </select>
                            <div class="invalid-feedback">Please enter a valid is-verified</div>
                        </div>
                        <button class="btn btn-dark" onClick={handleAddProduct}>
                            Add Product
                        </button>
                        <br />
                        <br />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default VendorProducts;
