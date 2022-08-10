var express = require('express');
var app = express();
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://dekel:2712@cluster0.pgkro4i.mongodb.net/?retryWrites=true&w=majority";
const dbName = 'dekeldb';

const client = new MongoClient(url);
client.connect();
var db = client.db(dbName); 

setTimeout(init, 5000);

function init() {
// insert user to users for test.
const usersCollection = db.collection("users");

usersCollection.insertOne({_id:1, name:'Dekel'}, function (err, result) {
});

// insert company to companies for tset
const companiesCollection = db.collection("companies");

companiesCollection.insertOne({_id:1, name:'Ewave'}, function (err, result) {
});  
}

// users endpoints and return data
app.get('/api/users', function(req, res, next) {
  const db = client.db(dbName);
  const usersCollection = db.collection("users");

  usersCollection.find({}).toArray(function (err, result) {
    res.send(result)
  
  });

});

// companies endpoints and return data
app.get('/api/companies', function(req, res, next) {
  const db = client.db(dbName);
  const companiesCollection = db.collection("companies");

  companiesCollection.find({}).toArray(function (err, result) {
    res.send(result)
      
  });

});

// homepage
app.get('/', (req, res) => {
  res
    .status(200)
    .send('<p>Welcome to DevOps Engineer Hands-On Test at Ewave.</p><p>There is two endpoints: api/users and api/companies')
});
 
// Start the server
const PORT = process.env.PORT || 8088;
app.listen(PORT, () => {

});
module.exports = app;

