//todolist.js
const express = require('express')
const {getDB} = require('../db/db_todolist')
const todolist = express.Router();


todolist.get('/', async (req, res) => {
 
  //실데이터가 들어 있는 콜랙션 조회
  const data = await getDB().collection('test').find().toArray();
  res.send(data)

})

module.exports = todolist;
