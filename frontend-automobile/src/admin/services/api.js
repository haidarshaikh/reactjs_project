import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

// Login function
export const login = async (credentials) => API.post('/api/auth/login', credentials);
console.log(login);

// CRUD operations for products
export const getProducts = async () => API.get('/products');
export const createProduct = async (productData) => API.post('/products', productData);
export const updateProduct = async (id, updatedData) => API.put(`/products/${id}`, updatedData);
export const deleteProduct = async (id) => API.delete(`/products/${id}`);
