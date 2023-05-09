const dbConnect=require('./mongodb')

const deleteData=async ()=>{
    let data=await dbConnect();
    let result=await data.deleteOne({name:'note 7 pro'});
    console.log(data);
}

deleteData();
