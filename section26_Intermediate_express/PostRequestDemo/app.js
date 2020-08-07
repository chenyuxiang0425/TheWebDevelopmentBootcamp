const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine","ejs");

const friends = ["Tony","dxc","cyx","phm"];


app.get("/",function (req,res) {
    res.render("home");
});

app.post("/addfriend",function (req,res) {
    friends.push(req.body.newfriend);
    res.redirect("/friends");
});

app.get("/friends",function (req,res) {
    res.render("friend",{friends:friends});
});

app.listen(3000, function () {
    console.log("Server is starting! ")
});