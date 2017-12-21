var express = require('express');
var bodyParser = require('body-parser');
router = express.Router();

var candies = [
  { name: "Snickers", color: "Brown" },
  { name: "ChocoTaco", color: "Dark Brown" },
  { name: "Skittles", color: "Rainbow" }
];

//What would need to go into candies
//in order to pass our first test?

router.get('/', function(req,res) {
	// What would go here? 
	// Hint: we want all candies in JSON format
	res.send(candies);
});

// Fill out the rest of the routes here

module.exports = router;