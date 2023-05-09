const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/e-comm");

//ProductSchema defines the field we can modify
const ProductSchema = new mongoose.Schema({
  name: String,
  brand: String,
  price: Number,
  category: String,
});

const addInDB = async () => {
  //Product model defines ??
  const Product = mongoose.model("products", ProductSchema);
  let data = new Product({ name: "dummy" });
  let result = await data.save();
  console.log(result);
};

const updateInDB = async () => {
  const Product = mongoose.model("products", ProductSchema);
  let data = await Product.updateOne(
    { name: "pocof3gt" },
    {
      $set: { price: 34000 },
    }
  );
  console.log(data);
};

const DeleteInDB = async () => {
  const Product = mongoose.model("product", ProductSchema);
  let data = await Product.deleteOne({ name: "dummy" });
  console.log(data);
};

const findInDB = async () => {
  let Product = mongoose.model("product", ProductSchema);
  let data = await Product.find();
  console.log(data);
};

findInDB();