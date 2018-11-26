const express = require("express");
const hbs = require('hbs');

const app = express();


app.set('view engine', 'hbs');


const port = 3000 || process.env.PORT;

app.use(express.static(__dirname+'/public'))

app.get('/', (req, res)=>{
    res.render('index.hbs')
});




app.listen(port, ()=>{
    
    console.log("Server runnig on port: "+port)
});