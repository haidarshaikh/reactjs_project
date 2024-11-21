import Product from '../models/product.js';

// Create Product
export const createProduct = async (req, res) => {
  const { productName, category, subcategory, price, description } = req.body;
  const image = req.file ? req.file.path : null;
  try {
    const newProduct = new Product({ productName, category, subcategory, price, description, image });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get Products, with optional category and subcategory filtering
export const getProducts = async (req, res) => {
  const { category, subcategory } = req.query;
  const filter = {};
  if (category) filter.category = category;
  if (subcategory) filter.subcategory = subcategory;

  try {
    const products = await Product.find(filter);
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Single Product
export const getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    res.status(404).json({ message: 'Product not found' });
  }
};

// Update Product
export const updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete Product
export const deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Product deleted' });
  } catch (error) {
    res.status(404).json({ message: 'Product not found' });
  }
};
