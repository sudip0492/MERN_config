//Reason to create the files seperately is :: further we need different databases and schemas in a single project.

const express=require('express');
require('./config');

const Product=require('./product');

const app= express();

app.use(express.json());//earlier we use 'body-parser' but now we use express.json

app.post("/create",async (req,res)=>{
    console.log(req.body)

    let data=new Product(req.body);
    let result=await data.save();
    res.send(data);
});

app.get("/list",async(req,resp)=>{
 let data=await Product.find()
 resp.send(data);   
}
)

app.delete("/delete/:_id",async (req,resp)=>{
    console.log(req.params)
    let data=await Product.deleteOne(req.params);
    resp.send(data)
})

app.put("/update/:_id",async (req,resp)=>{
    console.log(req.params)
    let data=await Product.updateOne(
        req.params, {$set :req.body})
    resp.send(data)
});

app.get("/search/:key",async(req,resp)=>{
    console.log(req.params.key)
    //let data= await Product.find({"brand":req.params.key}) --> This will find the complete match 
    // To find the regex match
    let newdata=await Product.find(
        {
            "$or":[
                {"name":{$regex:req.params.key}},
                {"brand":{$regex:req.params.key}}
            ]
        });//$or and $and works same as trivial or and and.
    resp.send(newdata);
});
app.listen(5000);
 


//Interview function : can we search use post,put,delete method to do the searching?
//ans: yes, we can do any function through any method. Its just industry standard to use post : create a data, put: to update a data, delete: to delete a data and get : to search a data.
