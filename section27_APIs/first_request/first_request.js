// request google.com
// const request = require("request");
const pry = require('pryjs')
const rp = require('request-promise');

// eval(pry.it)

url = "https://jsonplaceholder.typicode.com/users";
requests = rp(url)
    .then((html_string) => {
        const parsedData = JSON.parse(html_string);
        console.log(parsedData[1].name);
    })
    .catch((err) => {
        console.log(err);
    });


