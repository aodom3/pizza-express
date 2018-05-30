// app.js

//require express package
const express = require('express');
//save an express module as 'app'
const app     = express();
// assigning 3000 as our port
const PORT    =  process.env.PORT || 3000;

// tells the server to listen for requests on port 3000
app.listen(PORT, function(){
  console.log("==========================")
  console.log(`LISTENING ON PORT ${PORT}`);
  console.log("==========================")
});
app.get('/', function (req, res) {
    res.send('Welcome to Pizza Express!')
});
app.get('/topping/pepperoni', function(req, res, next) {

    res.send('pepperoni pizza! good choice');
});
app.get('/order/10/medium', function(req, res, next) {

    res.send( Your order for 10 medium pizzas will be ready in 1 minute! );
});