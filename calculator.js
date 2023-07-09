const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});
app.post("/", function (req, res) {
    var n1 = Number(req.body.num1);
    var n2 = Number(req.body.num2);
    var ans = n1+n2;
    res.send("Required answer is "+ ans);
});

app.get("/bmi",function(req,res)
{
    res.sendFile(__dirname + "/bmi.html");
});
app.post("/bmi", function(req,res)
{
    var height = parseFloat(req.body.height);
    var weight = parseFloat(req.body.weight);
    var ans = weight/(height*height);
    res.send("Your calculated BMI is "+ ans);
});


app.listen(3000, function () {
    console.log("server started on port 3000");
});

