const express = require("express");

const app = express();


app.get("/r/:subredditName",function (req,res) {
    res.send("Welcome to " + req.params.subredditName);
});

app.get("*",function (req,res) {
    res.send("YOU ARE A STAR!!");
});

app.listen(port=3000,function(){
    console.log("Server has started!");
});