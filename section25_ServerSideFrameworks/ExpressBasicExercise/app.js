const express = require("express");
const app = express();

app.get("/",function (req,res) {
    res.send("Hi there, Welcome to my assignment!")
});

app.get("/speak/:animal",function (req, res) {
    let animal = req.params.animal;
    let pre_string = "The "+ animal + " says ";
    let sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof Woof!"
    }
    res.send(pre_string+"'"+sounds[animal]+"'");
});

app.get("/repeat/:word/:nums",function (req, res) {
    let print_strings = ""
    for (let i = 0; i < req.params.nums; i++) {
        print_strings += req.params.word + " ";
    }
    res.send(print_strings);
});

app.get("*",function (req, res) {
    res.send("Sorry, page not foud.");
});

app.listen(port=3000,function () {
    console.log("Server has started!")
})