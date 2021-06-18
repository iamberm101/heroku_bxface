const express = require('express');
const app = express();
 
let router = require('./app/routers/upload.router.js');

const PORT = process.env.PORT || 8080

app.use('/', router);
 
// Create a Server
const server = app.listen(PORT, function () {
 
  let host = server.address().address
  let port = server.address().port
 
  console.log("App listening at http://%s:%s", host, port); 
})