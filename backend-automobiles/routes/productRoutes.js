import express from 'express';
import { verifyToken } from '../middleware/authMiddleware.js';
import { createProduct, getProducts, getProduct, updateProduct, deleteProduct } from '../controllers/productController.js';

const router = express.Router();

router.route('/')
  .post(verifyToken, createProduct)  // Only admin can add products
  .get(getProducts);                 // Anyone can view products

router.route('/:id')
  .get(getProduct)                   // Anyone can view a single product
  .put(verifyToken, updateProduct)   // Only admin can update
  .delete(verifyToken, deleteProduct); // Only admin can delete

export default router;
