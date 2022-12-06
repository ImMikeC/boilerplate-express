process.env.MESSAGE_STYLE
require('dotenv').config()

let express = require('express');
let app = express();

app.get('/json', (req, res) => {
  var response = {"message": "Hello json"}

  if(process.env.MESSAGE_STYLE==='uppercase'){
  //Override message attribute value based on condition
  response.message = response.message.toUpperCase();  
}

return res.json(response)
  
                       })


//app.use(200, {"message": "Hello json"})


console.log("Hello World")




































 module.exports = app;
