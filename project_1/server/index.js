//index.js
const express = require('express');
const app = express();
const cors = require('cors');
const todolist = require('./api/todolist.js')
const {connectDB} = require('./db/db_todolist.js');

app.use(cors());

async function serverStart(){
    await connectDB();
    app.use('/todo',todolist);
    
    app.listen(4000, () => {
      console.log('Server is running on http://localhost:3000')
    })
}
serverStart();



