const dbConnect=require('./mongodb') //step 1: import the mongodb config file created.
//step 2: configure
const main=async ()=>{
    let data=await dbConnect(); //it is using the dbConnect() from ./mongodb to connect to e-comm db.
    data=await data.find().toArray();// convert the collection object to an array
    console.warn(data);//prints the data(in array type)
}

main();