import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "./products.css";
import axios from "axios";

const Products = () => {
    const [product, setProduct] = useState({
        name: "",
        description: "",
        price: "",
        image1: "",
        category: "",
        final_price: "1000",
        is_verified: false,
    });
    let { id } = useParams();
    const navigate = useNavigate();
    const access = sessionStorage.getItem("access");

    const fetchData = async () => {
        await axios
            .get("https://webwizards.pythonanywhere.com/inventory/products/in-review", {
                headers: { Authorization: `Bearer ${access}` },
            })
            .then((res) => {
                console.log(res.data);
                console.log(id);
                let data = res.data;
                let p = data.filter((item) => {
                    return item.id == id;
                });
                delete p[0].vendor;
                setProduct({ ...p[0] });
                console.log(p[0]);
                console.log(product);
                // console.log(...p);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleEditProduct = async () => {
        const access = sessionStorage.getItem("access");
        console.log(product);
        // delete product.vendor;
        await axios
            .patch(`https://webwizards.pythonanywhere.com/inventory/product/${id}`, product, {
                headers: { Authorization: `Bearer ${access}`, "content-type": "multipart/form-data" },
            })
            .then((res) => {
                console.log(res.data);
                navigate("/admin/products");
                console.log("AFTER");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        // <div className="products">
        //     <form classNaame="needs-validation" method="POST" action="/listings" noValidate>
        //         <div classNaame="row">
        //             <div classNaame="col-8 offset-2">
        //                 <h3 classNaame="mb-3">Add New Product</h3>
        //                 <div classNaame="mb-3">
        //                     <label htmlFor="title" classNaame="form-label">
        //                         Title
        //                     </label>
        //                     <input
        //                         name="title"
        //                         classNaame="form-control"
        //                         type="text"
        //                         id="title"
        //                         placeholder="enter title"
        //                         required
        //                     />
        //                     <div classNaame="invalid-feedback">Please enter a Title</div>
        //                 </div>

        //                 <div classNaame="mb-3">
        //                     <label htmlFor="description" classNaame="form-label">
        //                         Description
        //                     </label>
        //                     <textarea
        //                         name="description"
        //                         classNaame="form-control"
        //                         id="description"
        //                         required
        //                         placeholder="enter description"
        //                         rows="3"
        //                     />
        //                     <div classNaame="invalid-feedback">Please enter a Description</div>
        //                 </div>

        //                 <div classNaame="mb-3">
        //                     <label htmlFor="image" classNaame="form-label">
        //                         Image
        //                     </label>
        //                     <input
        //                         name="image"
        //                         classNaame="form-control"
        //                         type="file"
        //                         id="image"
        //                         placeholder="enter image url"
        //                     />
        //                 </div>

        //                 <div classNaame="mb-3 row">
        //                     <div classNaame="col-4">
        //                         <label htmlFor="price" classNaame="form-label">
        //                             Price
        //                         </label>
        //                         <input
        //                             name="price"
        //                             classNaame="form-control"
        //                             id="price"
        //                             placeholder="enter price"
        //                             required
        //                         />
        //                         <div classNaame="invalid-feedback">Please enter a valid Price</div>
        //                     </div>
        //                     <div classNaame="col-8">
        //                         <label htmlFor="country" classNaame="form-label">
        //                             Category
        //                         </label>
        //                         <input
        //                             name="country"
        //                             classNaame="form-control"
        //                             type="text"
        //                             id="country"
        //                             placeholder="enter category"
        //                             required
        //                         />
        //                         <div classNaame="invalid-feedback">Please enter a valid Country</div>
        //                     </div>
        //                 </div>

        //                 <div classNaame="mb-3 row">
        //                     <div classNaame="col-4">
        //                         <label htmlFor="final_price" classNaame="form-label">
        //                             Final Price
        //                         </label>
        //                         <input
        //                             name="final_price"
        //                             classNaame="form-control"
        //                             id="final_price"
        //                             placeholder="enter final price"
        //                             required
        //                         />
        //                         <div classNaame="invalid-feedback">Please enter a valid Final Price</div>
        //                     </div>
        //                     <div classNaame="col-8">
        //                         <label htmlFor="country" classNaame="form-label">
        //                             Is varified
        //                         </label>
        //                         <input
        //                             name="country"
        //                             classNaame="form-control"
        //                             type="text"
        //                             id="country"
        //                             placeholder="enter category"
        //                             required
        //                         />
        //                         <select classNaame="form-select" aria-label="Default select example">
        //                             <option value="1">Yes</option>
        //                             <option defaultValue={true} value="2">
        //                                 No
        //                             </option>
        //                         </select>
        //                         <div classNaame="invalid-feedback">Please enter a valid Country</div>
        //                     </div>
        //                 </div>

        //                 <div classNaame="mb-3">
        //                     <label htmlFor="vendor" classNaame="form-label">
        //                         Vendor
        //                     </label>
        //                     <input
        //                         name="vendor"
        //                         classNaame="form-control"
        //                         type="text"
        //                         id="vendor"
        //                         placeholder="enter vendor"
        //                         required
        //                     />
        //                     <div classNaame="invalid-feedback">Please enter a valid vendor</div>
        //                 </div>
        //                 <button classNaame="btn btn-dark">Add Listing</button>
        //                 <br />
        //                 <br />
        //             </div>
        //         </div>
        //     </form>
        // </div>
        <div className="products">
            {/* <form noValidate> */}
            <div class="row">
                <div class="col-8 offset-2">
                    <h3 class="mb-3">Edit Product</h3>
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
                            onChange={(e) => {
                                setProduct({ ...product, description: e.target.value });
                                console.log(product);
                            }}
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
                        <select
                            class="form-select"
                            aria-label="Default select example"
                            onChange={(e) => {
                                console.log(e.target.value);
                                setProduct({ ...product, is_verified: e.target.value == "f" ? false : true });
                                console.log(product);
                            }}
                        >
                            <option value={"f"}>No</option>
                            <option value={"t"}>Yes</option>
                        </select>
                        <div class="invalid-feedback">Please enter a valid is-verified</div>
                    </div>
                    <button class="btn btn-dark" onClick={handleEditProduct}>
                        Edit Product
                    </button>
                    <br />
                    <br />
                </div>
            </div>
            {/* </form> */}
        </div>
    );
};

export default Products;
