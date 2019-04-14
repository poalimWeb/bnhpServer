var express = require('express');
var app = express();
const port = process.env.PORT || 8080;

app.use( (req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    next();
});

app.get('/credit/',(req, res) =>{
   console.log('Checking from what group user belongs and sending Response with version for Credit Feature....');
   console.log(req.query.userName);
   res.send({version: 2});
});

app.get('/transactions/', (req, res) => {
    console.log('Checking from what group user belongs and sending Response with version for transactions Feature....');
    res.send({version: 2});
});

app.get('/userData/',(req, res) =>{
    console.log('retreving UserName Data....');
    res.send({userName: 'Shahaf Shuhamy'});
 });

app.listen(port,() => {
    console.log('listenning on port ',port);
});