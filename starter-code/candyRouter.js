var express = require('express');
var bodyParser = require('body-parser');
router = express.Router();

var candies = [
  { id: 1, name: "Snickers", color: "Brown" },
  { id: 2, name: "ChocoTaco", color: "Dark Brown" },
  { id: 3, name: "Skittles", color: "Rainbow" }
];

//What would need to go into candies
//in order to pass our first test?

router.get('/', function(req,res) {
	// What would go here? 
	// Hint: we want all candies in JSON format
	res.send(candies);
});

router.get('/:id', function(req, res) {
  // SHOW
  res.send(candies[req.params.id-1]);
});


router.post('/', function(req, res) {
  // CREATE
  //console.log(req);
  var create = req.body;
  console.log(create);
  candies.push(create);
  res.send(create);

});


router.put('/:id', function(req, res) {
  // UPDATE
  for (i = 0; i < candies.length; i++) {
    if(candies[i].id == req.body.id){
      candies[i].name = req.body.name;
      candies[i].color = req.body.color;
    }
    // else{
    //   res.send("There is not a candy at this ID");
    // }
    res.send();
  }
});

router.delete('/:id', function(req, res) {
  // DELETE
  let i = Number(req.params.id)-1;
  candies[i] = null;
  res.send("Dropped it like its hot")
});

module.exports = router;