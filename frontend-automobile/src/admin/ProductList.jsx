import React, { useState, useEffect } from "react";
import { getProducts, deleteProduct } from "../admin/services/api";
import ProductForm from "./ProductForm";
import '../admin/ProductList.css'
const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const fetchProducts = async () => {
    const response = await getProducts();
    setProducts(response.data);
  };

  const handleDelete = async (id) => {
    await deleteProduct(id);
    fetchProducts();
  };

  const handleEdit = (product) => setSelectedProduct(product);

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="product-list-container">
      <ProductForm existingProduct={selectedProduct} onSave={fetchProducts} />
      <div className="product-list">
        {products.map((product) => (
          <div key={product._id} className="product-item">
            <h3>{product.productName}</h3>
            <p>Category: {product.category}</p>
            <p>Price: ${product.price}</p>
            <button onClick={() => handleEdit(product)}>Edit</button>
            <button onClick={() => handleDelete(product._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
