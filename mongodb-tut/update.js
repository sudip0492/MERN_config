const dbConnect=require('./mongodb')

const updateData= async ()=>{
    let data=await dbConnect();
    let result=await data.updateOne(
        {name:'m 40'},
        { $set:{name:'m 40 pro'}}
        )
    console.log(result);
    };

updateData();