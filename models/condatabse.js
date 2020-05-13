const express = require("express")
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

const app = express()
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});

const Schema = new mongoose.Schema({
	name: String,
    email   : String,
    sessionId : String,
    token : String
});


app.listen(8000, () => console.log("Listing in the port 8000"));