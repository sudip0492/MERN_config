const {MongoClient} = require('mongodb');//step 1 : import mongo-client
const url='mongodb://127.0.0.1:27017';
const client=new MongoClient(url);//step 2 : connect to server


//step 3 : configure and use database
const database='e-comm';

async function dbConnect()
{
    let result=await client.connect();//it returns a promise, so we write await with async to reduce the delay of promise
    let db=result.db(database);//connecting to database
    return db.collection('products');//returns the database selected for use.
}

module.exports=dbConnect;