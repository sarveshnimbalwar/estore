import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/products");
      const result = await response.json();
      setData(result.products); // Because DummyJSON nests under "products"
      setFilter(result.products);
      setLoading(false);
    };

    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        {[...Array(6)].map((_, index) => (
          <div key={index} className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
            <Skeleton height={592} />
          </div>
        ))}
      </>
    );
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((item) => item.category === cat);
    setFilter(updatedList);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons text-center py-5">
          <button
            className="btn btn-outline-dark btn-sm m-2"
            onClick={() => setFilter(data)}
          >
            All
          </button>
          {/* <button
            className="btn btn-outline-dark btn-sm m-2"
            onClick={() => filterProduct("makeup")}
          >
            Smartphones
          </button> */}
          <button
            className="btn btn-outline-dark btn-sm m-2"
            onClick={() => filterProduct("furniture")}
          >
            furniture
          </button>
          <button
            className="btn btn-outline-dark btn-sm m-2"
            onClick={() => filterProduct("fragrances")}
          >
            Fragrances
          </button>
          <button
            className="btn btn-outline-dark btn-sm m-2"
            onClick={() => filterProduct("groceries")}
          >
            groceries
          </button>
        </div>

        {filter.map((product) => (
          <div
            id={product.id}
            key={product.id}
            className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4"
          >
            <div className="card text-center h-100">
              <img
                className="card-img-top p-3"
                src={product.thumbnail}
                alt={product.title}
                height={300}
                style={{ objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">
                  {product.title.length > 15 ? product.title.substring(0, 15) + "..." : product.title}
                </h5>
                <p className="card-text">
                  {product.description.length > 80
                    ? product.description.substring(0, 80) + "..."
                    : product.description}
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item lead">RS {product.price}</li>
              </ul>
              <div className="card-body">
                <Link to={"/product/" + product.id} className="btn btn-dark m-1">
                  Buy Now
                </Link>
                <button
                  className="btn btn-dark m-1"
                  onClick={() => {
                    toast.success("Added to cart");
                    addProduct(product);
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  };

  return (
    <>
      <div className="container my-3 py-3">
        <div className="row">
          <div className="col-12">
            <h2 className="display-5 text-center">Products</h2>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </>
  );
};

export default Products;
