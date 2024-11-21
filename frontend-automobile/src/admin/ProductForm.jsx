import React, { useState, useEffect } from "react";
import { createProduct, updateProduct } from "../admin/services/api";
import "../admin/ProductForm.css";

const categories = {
  Earth_Move: ["Ajax-Fiori", "JCB", "Sanvy"],
  Toools_Equipment: ["Icon", "Li"],
  // Home: ["Furniture", "Kitchen", "Decor"],
};

const ProductForm = ({ existingProduct, onSave }) => {
  const [product, setProduct] = useState({
    productName: "",
    category: "",
    subcategory: "",
    price: "",
    description: "",
    image: "",
  });

  useEffect(() => {
    if (existingProduct) setProduct(existingProduct);
  }, [existingProduct]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setProduct((prev) => ({
      ...prev,
      category: selectedCategory,
      subcategory: "", // Reset subcategory when category changes
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const action = existingProduct ? updateProduct : createProduct;
    await action(existingProduct?._id, product);
    onSave();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="product-form bg-light p-4 rounded shadow-sm"
    >
      <h2 className="text-center mb-4">
        {existingProduct ? "Edit Product" : "Add Product"}
      </h2>
      <div className="mb-3">
        <input
          type="text"
          name="productName"
          className="form-control"
          placeholder="Product Name"
          value={product.productName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <select
          name="category"
          className="form-select"
          value={product.category}
          onChange={handleCategoryChange}
          required
        >
          <option value="" disabled>
            Select Category
          </option>
          {Object.keys(categories).map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-3">
        <select
          name="subcategory"
          className="form-select"
          value={product.subcategory}
          onChange={handleChange}
          required
          disabled={!product.category} // Disable if no category is selected
        >
          <option value="" disabled>
            Select Subcategory
          </option>
          {product.category &&
            categories[product.category].map((subcat) => (
              <option key={subcat} value={subcat}>
                {subcat}
              </option>
            ))}
        </select>
      </div>
      <div className="mb-3">
        <input
          type="number"
          name="price"
          className="form-control"
          placeholder="Price"
          value={product.price}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <input
          type="file"
          name="image"
          className="form-control"
          placeholder="image"
          value={product.image}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <textarea
          name="description"
          className="form-control"
          placeholder="Description"
          value={product.description}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="text-center">
        <button type="submit" className="btn btn-primary w-100">
          {existingProduct ? "Update" : "Save"}
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
