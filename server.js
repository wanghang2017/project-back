let http = require("http");

const USERS=[
    {value:"1", name:"wx1"},
    {value:"2", name:"wx2"},
    {value:"3", name:"wx3"},
]

let server = http.createServer(function(req,res){
    let {url} = req;
    res.setHeader("Access-Control-Allow-Origin","*");
    if(url==="/api/v1/users"){
        res.end(JSON.stringify(USERS));
    }else{
        res.end("NOT FOUND")
    }
})

server.listen(3000,()=>{
    console.log("后端接口服务器已经启动在 3000 端口")
});

