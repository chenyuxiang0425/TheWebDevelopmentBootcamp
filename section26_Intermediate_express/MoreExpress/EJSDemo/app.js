const express = require("express");
const app = express();

app.get("/",function (req,res) {
   res.render("home.ejs")
});

app.get("/fallinglovewith/:thing",function (req,res) {
    res.render("love.ejs",{thingVar:req.params.thing})
})

app.get("/posts",function (req, res) {
    let posts = [
        {title:"Post 1", author: "Susy"},
        {title:"My adorable pet bunny", author: "Charlie"},
        {title:"Can you believe this pompey", author: "Calt"}
    ];
    res.render("posts.ejs",{posts : posts}) 
})

app.listen(port = 3000,function () {
    console.log("server is starting!")
})