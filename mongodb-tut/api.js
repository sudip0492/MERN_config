const express = require("express");
const dbConnect = require("./mongodb");

const app = express();

app.use(express.json());//body-parser : was used before 4.6 , now we use express.json


app.get("/", async(req, resp) => {
  let data = await dbConnect();
  data=await data.find().toArray();
  console.log(data)

  resp.send(data);
});


app.post('/',async(req,resp)=>{
    console.log(req.body)
     let data= await dbConnect();
     let result=await data.insertOne(req.body);

    resp.send(result)
})

app.put('/',async (req,resp)=>{
  console.log(req.body);
  let data=await dbConnect();
  let result=data.updateOne(
    {name:req.body.oldname},{$set:{name:req.body.name,price:req.body.price}})
  resp.send({"status":'updated'})
});

app.delete('/',async(req,res)=>{
  console.log(req.body);

  let data=await dbConnect();
  let result=await data.deleteOne({name:req.body.name})
  res.send({'status':'deleted'})
});


app.listen(5000);


