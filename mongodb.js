const{MongoClient} = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';
const database = 'student';
const client = new MongoClient(url);

const dbconnect =async()=>{
    const result=await client.connect();
    
    const db = result.db(database);
    console.log("Database"+db);
    return db.collection('profile');
}
//dbconnect();
module.exports= dbconnect;