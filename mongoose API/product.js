const mongoose=require('mongoose');

const ProductSchema=new mongoose.Schema({
    name:String,
    price:Number,
    brand:String,
    category:String
});
//product is a collection, in sql we call it table, in nonsql we call it collection
module.exports=mongoose.model('products',ProductSchema);

