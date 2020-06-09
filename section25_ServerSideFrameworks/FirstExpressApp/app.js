//require 返回的是我们用module.exports = createApplication;输出的createApplication函数
const express = require("./express");

const app = express(); // app 是一个 createApplication(),里面有get、listen方法等

app.get("/",function (req,res) {
    // https://stackoverflow.com/questions/53556939/nodejs-response-send-is-not-a-function
    // 我写的 express 中，response是一个http.ServerResponse实例，没有.send方法。
    // Express是构建HTTP服务器的框架，它在常规http模块之上提供了其他功能
    // 这些附加功能之一是用于HTTP响应实例的.send方法：
    res.end("hello world!"); });


app.listen(port = 3000,function () {
    console.log('Example app listening on port ' + port);
})


