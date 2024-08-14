import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./productInReview.css";
import axios from "axios";

const ProductInReview = () => {
    const [products, setProducts] = useState([]);

    const fetchData = async () => {
        const access = sessionStorage.getItem("access");

        await axios
            .get("https://webwizards.pythonanywhere.com/inventory/products/in-review", {
                headers: { Authorization: `Bearer ${access}` },
            })
            .then((res) => {
                console.log(res.data);
                setProducts(res.data);
                console.log(products);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    const editProduct = (id) => {};

    return (
        <div className="products">
            <h3>Products In Review</h3>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th colSpan="2" scope="col">
                            Image
                        </th>
                        <th colSpan="2" scope="col">
                            Name
                        </th>
                        <th colSpan="2" scope="col">
                            Description
                        </th>
                        <th colSpan="2" scope="col">
                            Price
                        </th>
                        <th colSpan="2" scope="col">
                            Final Price
                        </th>
                        <th colSpan="2" scope="col">
                            Category
                        </th>
                        <th colSpan="2" scope="col">
                            Is-Verified
                        </th>
                        <th scope="col">
                            &nbsp;&nbsp;&nbsp;&nbsp;Edit
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Delete
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => {
                        return (
                            <tr key={product.id}>
                                <td colSpan="2">
                                    <img style={{ width: "50px" }} src={product.image1} />
                                </td>
                                <th colSpan="2">{product.name}</th>
                                <td colSpan="2">{product.description}</td>
                                <td colSpan="2">{product.price}</td>
                                <td colSpan="2">{product.final_price}</td>
                                <td colSpan="2">{product.category}</td>
                                <td colSpan="2">{product.is_verified ? "Yes" : "No"}</td>
                                <td>
                                    <Link to={`/admin/product/${product.id}`}>
                                        <button type="submit" className="btn btn-success btn-sm">
                                            Edit
                                        </button>
                                    </Link>
                                    &nbsp;&nbsp;&nbsp;
                                    <button
                                        type="submit"
                                        className="btn btn-danger btn-sm"
                                        onClick={() => deleteUser(product.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default ProductInReview;
