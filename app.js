const express = require('express')
const mongoose = require('mongoose')
const path = require('path');

const app = express();

mongoose.connect("mongodb://localhost/todo_express",{
     useNewUrlParser:true,
     useUnifiedTopology: true,
});

//middlewares
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))
app.set("view engine","ejs");
app.use( express.static( "public" ) );

//routes
app.use(require("./routes/index"))

app.use(require("./routes/todo"))

app.use(express.static(__dirname + '/dist/ira2-app'));

app.get('/*', function(req,res) {
        
     res.sendFile(path.join(__dirname+'/dist/ira2-app/index.ejs'));
     });


app.listen(3000,()=>
     console.log("Server is listening on port 3000")
)
