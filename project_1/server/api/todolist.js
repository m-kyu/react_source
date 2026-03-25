//server > todolist.js
const express = require('express')
const {getDB} = require('../db/db_todolist')
const todolist = express.Router();

todolist.get('/', async (req, res) => {
  const data = await getDB().collection('todos').find().toArray();
  res.send(data)
})

todolist.post('/', async (req, res) => {
  try{
    const result = await getDB().collection('todos').insertOne(req.body);
    const data = {...req.body, _id:result.insertedId}
    res.send({success:true, data})
  }
  catch(err){
    res.send({success:false, msg:err.message})
  }

})

module.exports = todolist;



