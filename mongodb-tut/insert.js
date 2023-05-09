const dbConnect=require('./mongodb');

const insert=async ()=>{
    const db=await dbConnect();
    const result=await db.insertMany(
        [
        {name:'note 6 pro',brand:'oppo',price:450},
        {name:'note 7 pro',brand:'oppo',price:550}] 
        );
    if(result.acknowledged)
        console.log("Data Inserted");
}

insert();