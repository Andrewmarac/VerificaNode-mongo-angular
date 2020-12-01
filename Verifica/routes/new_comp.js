var express = require('express');
var router = express.Router();
var MongoCLient = require('mongodb').MongoClient;
const uri = "mongodb+srv://andrewjm:andrewko08@cluster0.glqtn.mongodb.net/Cluster0?retryWrites=true&w=majority";

router.get('/', function(req, res, next) {
    const client = new MongoCLient(uri, { useNewParser: true, useUnifiedTopology:true});
    client.connect(getwebCategory);
    function getwebCategory(err){
        if(err) console.log("not connected");
            else{
                const collection = client.db("sample_training").collection("companies");
                query = {founded_year:{$gt:2010}};
                collection.find(query).limit(10).toArray(callBackQuery);
        }
    }
    function callBackQuery(err, result){
        if(err) console.log(err,messagge);
        else res.send(result);
        client.close();

    }

});

module.exports = router;