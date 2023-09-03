const mongoose = require("mongoose");
const { Schema } = mongoose;

//schema:

const productSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  price: { type: Number, min: [0, "cannot be negavtive"], required: true },
  discountPercentage: {
    type: Number,
    min: [0, "wrong min discount"],
    max: [50, "wrong max discount"],
  },
  rating: {
    type: Number,
    min: [0, "wrong min rating"],
    max: [5, "wrong max rating"],
  },
  brand: { type: String, required: true },
  category: { type: String, required: true },
  thumbnail: { type: String, required: true },
  images: [String],
});
//modals: used for abstraction brna directb kr skte the:
exports.Product = mongoose.model("Product", productSchema);

//----------
