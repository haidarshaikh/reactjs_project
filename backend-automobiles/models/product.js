import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
  productName: { type: String, required: true },
  category: { type: String, required: true },
  subcategory: { type: String },
  price: { type: Number, required: true },
  description: { type: String },
  image: { type: String },
}, { timestamps: true });

export default mongoose.model('Product', productSchema);
