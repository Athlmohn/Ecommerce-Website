import React, { useEffect, useState } from "react";
import { getProductId } from "../../ApiService/Api";
import { Link, useParams } from "react-router-dom";
import "./Productdetails.css";

function Productdetails() {
  const { id } = useParams();
  const [productDeatils, setproductDeatils] = useState({});

  useEffect(() => {
    const fetchProductDetails = async () => {
      const data = await getProductId(id);
      setproductDeatils(data);
    };
    fetchProductDetails();
  }, [id]);

  const handlebuyNow = () => {
    window.confirm("The Product is Out of Stock!");
  };

  return (
    <div className="product-deatils-container">
      <img className="product-image" src={productDeatils.image} alt="Product" />

      <div className="product-info">
        <h2 className="Product-title">{productDeatils.title}</h2>

        <p className="product-description">{productDeatils.description}</p>
        <p className="product-price">₹{productDeatils.price}</p>

        <button className="buynow-btn" onClick={handlebuyNow}>
          Buy now
        </button>
        <Link to="/">
          <button className="backhome-btn">Back to Home</button>
        </Link>
      </div>
    </div>
  );
}

export default Productdetails;
