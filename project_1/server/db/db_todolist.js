//db_todolist
//const uri = "mongodb+srv://minkyu:test123456789@minkyu.rlol7cf.mongodb.net/?appName=minkyu";

const  { MongoClient }  =  require ( 'mongodb' ) ; 
const uri = "mongodb://minkyu:test123456789@ac-mb81g3p-shard-00-00.rlol7cf.mongodb.net:27017,ac-mb81g3p-shard-00-01.rlol7cf.mongodb.net:27017,ac-mb81g3p-shard-00-02.rlol7cf.mongodb.net:27017/?ssl=true&replicaSet=atlas-127kca-shard-0&authSource=admin&appName=minkyu";
const  client  =  new  MongoClient ( uri ) ;

let db;
async function connectDB(){
    await client.connect(); //몽고접속
    db = client.db('test_project');  //프로젝트db 활성화
    console.log('접속완료');
}

function getDB(){
    return db;
}

module.exports = {connectDB, getDB}