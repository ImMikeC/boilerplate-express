let express = require('express');
let app = express();

app.get('/json', (req, res) => {
  res.status(200).json({"message": "Hello json"})
})


//app.use(200, {"message": "Hello json"})


console.log("Hello World")




































 module.exports = app;
