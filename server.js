/**
 * Created by Administrator on 2017/3/6.
 */
var http = require("http");
var url = require("url");

function start(route, handler)
{
    function onRequest(request, response)
    {
        var pathname = url.parse(request.url).pathname;

        var content = route(handler, pathname);

        response.writeHead(200,{'Content-Type':'text/plain'});
        response.write(content);
        response.end();
    }
    http.createServer(onRequest).listen(8888);
}

exports.start = start;