const express=require('express')
const EventEmitter=require('events')
const app=express();

//start of imp part
const event=new EventEmitter();
var count=0;
event.on("countAPI",()=>{
    count++;
    console.log("event called");
    console.log("no of calls of get api: "+count);
});
// end of imp part


app.get("/",(req,resp)=>{
    resp.send("api called");
    event.emit("countAPI");//call the event object
})

app.get("/search",(req,resp)=>{
    resp.send("search api called");
})

app.get("/update",(req,resp)=>{
    resp.send("update api called");
});

app.listen(5000);
