import React, { useState, useEffect } from "react";
import "./Home.css";
import { getAllProducts } from "../../ApiService/Api";
import { Link } from "react-router-dom";
function Home() {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getAllProducts();
      setproducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <div className="product-grid">
      {products.map((data) => (
        <div className="product" key={data.id}>
          <img src={data.image} alt="product" />

          <h2>{data.title}</h2>

          <p>
            <span className="price">₹{data.price}</span>
          </p>
          <Link to={`/product/${data.id}`}>
            <button>Product Details</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Home;
