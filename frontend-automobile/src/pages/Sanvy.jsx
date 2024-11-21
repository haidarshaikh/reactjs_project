import React, { useEffect, useState } from "react";
import axios from "axios";
import "../assets/styles/EarthMoveItem.css"; // Add your styles here

const SkeletonCard = () => (
  <div className="skeleton-card">
    <div className="skeleton-image"></div>
    <div className="skeleton-title"></div>
    <div className="skeleton-price"></div>
    <div className="skeleton-button"></div>
  </div>
);

const Sanvy = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setItems(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="product-list">
      {loading
        ? Array.from({ length: 8 }).map((_, idx) => <SkeletonCard key={idx} />)
        : items.map((item) => (
            <div className="product-card" key={item.id}>
              <img
                src={item.image}
                alt={item.title}
                className="product-image"
              />
              <h2 className="product-title">{item.title}</h2>
              <p className="product-price">${item.price}</p>
              <button className="product-button">Add to Cart</button>
            </div>
          ))}
    </div>
  );
};

export default Sanvy;
