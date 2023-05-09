const mysql=require("mysql");

const con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"test"
})
//This command is used to check connectivity to mysql server
/*
con.connect((err)=>{
    if(err)
        console.warn("error detected")
    else
        console.warn("successful")
});
*/

con.query("select * from users",(err,result)=>{
    console.warn("result",result)
})
