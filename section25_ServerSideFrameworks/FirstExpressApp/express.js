const http = require('http');  // 创建 http 服务
const url = require('url');  // 拿到当前的请求路径

// 存路由，每个都是一个 Object,包含路径、方法、回调函数
// 存一个所有都没匹配后的失败请求
let router = [
    {path:"*",method:"*",handler(req,res){
        let message = "Cannot "+ req.method+" " + req.url;
        res.end(message); //end 停止连接
    }}
];

function createApplication() {
    // return 一个 Object，里面有 get, listen 两个函数
    return {
        // 调用 get 函数就把 Object 存进路由
        get(path,handler){
            router.push({
                path:path,
                method:"get",
                handler
            })
        },
        // listen 用来匹配路由，并 listen 对应的端口
        listen(){
            // 创建一个服务,服务中传入的是一个function
            let server = http.createServer(function (req,res) {
                // url.parse(urlStr); 一个URL字符串转换成对象并返回
                let pathname = url.parse(req.url).pathname;
                // 寻找路由
                for (let i = 1; i < router.length ; i++) {
                    let currRouter = router[i];
                    if (pathname === currRouter.path && req.method.toLowerCase() === currRouter.method) {
                        return currRouter.handler(req,res);
                    }
                }
                return router[0].handler(req,res);
            });
            // listen 对应的端口
            server.listen(...arguments);
        }
    }
}

// 要在模块中对外输出变量，用：module.exports
// 这里把函数createApplication作为模块的输出暴露出去
module.exports = createApplication;
