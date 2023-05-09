const express=require("express")
const conn=require("./config")

const app=express();

con.query("select * from users",(err,result)=>{
    console.warn("result",result)});
app.get("/",(req,resp)=>{
    con.query("select * from users",(err,result)=>{
        if (err)
            resp.send("error")
        else 
            resp.send(result)
    })
});
app.listen(5000);