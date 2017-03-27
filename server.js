/**
 * Created by Administrator on 2017/3/6.
 */
var http = require("http");
var url = require("url");

function start(route, handler)
{
    function onRequest(request, response)
    {
        var postData = "";
        var pathname = url.parse(request.url).pathname;
        console.log("request for " + pathname + "received.\n");

        request.setEncoding("utf8");

        request.addListener("data", function(postDataChunk){
            postData += postDataChunk;
            console.log("Received post data chunk '" + postDataChunk + "'.");
        });
        request.addListener("end", function(){
            route(handler, pathname, response, postData);
        })

        //var content = route(handler, pathname, response);

        // response.writeHead(200,{'Content-Type':'text/plain'});
        // response.write(content);
        // response.end();
    }

    http.createServer(onRequest).listen(8888);
}

exports.start = start;