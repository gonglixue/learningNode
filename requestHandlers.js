/**
 * Created by Administrator on 2017/3/21.
 */
var exec = require("child_process").exec;
function start(response)
{
    console.log("request handler: start");

    exec("find /",{timeout:10000, maxBuffer:2000*1024}, function(error, stdout, stderr){
        if(error)
        {
            response.writeHead(200, {"Content-Type":"text/plain"});
            response.write(stderr);
            response.end();
        }

        response.writeHead(200, {"Content-Type":"text/plain"});
        response.write(stdout);
        response.end();
    });

}

function upload(response)
{
    console.log("request handler: upload");
    response.writeHead(200, {"Content-Type":"text/plain"});
    response.write("Hello upload");
    response.end();
}

exports.start = start;
exports.upload = upload;