const express = require("express");
const app = express();

app.use(express.static (__dirname + "/public") ); //设置静态资源（文件）目录
app.set("view engine","ejs");

app.get("/",function (req,res) {
   res.render("home")
});

app.get("/fallinglovewith/:thing",function (req,res) {
    res.render("love",{thingVar:req.params.thing})
})

app.get("/posts",function (req, res) {
    let posts = [
        {title:"Post 1", author: "Susy"},
        {title:"My adorable pet bunny", author: "Charlie"},
        {title:"Can you believe this pompey", author: "Calt"}
    ];
    res.render("posts",{posts : posts})
})

app.listen(port = 3000,function () {
    console.log("server is starting!")
})