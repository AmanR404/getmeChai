const express = require('express')
const { MongoClient } = require('mongodb');
var bodyParser = require('body-parser')
var cors = require('cors')
const app = express()
const port = 3000
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const dbName = 'getmeChai';
client.connect()
app.use(bodyParser.json())
app.use(cors())

app.post('/dashboard', async(req, res) => {
  const userdata = req.body
  const db = client.db(dbName)
  const collection = db.collection("userData")
  const findResult = await collection.insertOne(userdata)
  res.send({success : true, result : findResult})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})