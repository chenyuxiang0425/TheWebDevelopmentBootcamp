const express = require("express");
const bodyParser = require("body-parser");
// const request = require("request");
const pry = require('pryjs')
const rp = require('request-promise');
// eval(pry.it)
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine","ejs");

app.get("/search",function (req,res) {
    res.render("search");
});

app.get("/results",function (req,res) {
    const query = req.query.movie;
    const url = `http://www.omdbapi.com/?s=${query}&apikey=thewdb`


    rp(url)
        .then((html_string) => {
            const parsedData = JSON.parse(html_string);
            // res.send(parsedData);
            res.render('results',{data:parsedData});
        })
        .catch((err) => {
            res.send(err);
        });

});

app.listen(3000, function () {
    console.log("Server is starting! ")
});



