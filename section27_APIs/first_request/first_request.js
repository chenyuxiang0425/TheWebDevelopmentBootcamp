// request google.com
const request = require("request");
url = "http://www.baidu.com";
requests = request(url,function (error,response,body) {
  if (!error && response.statusCode === 200) {
      console.log(requests.req.res.body);
  }
});

