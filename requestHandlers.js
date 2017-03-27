/**
 * Created by Administrator on 2017/3/21.
 */
var exec = require("child_process").exec;
function start()
{
    console.log("request handler: star");
    var content = "empty";
    exec("ls -lah", function(error, stdout, stderr){
        content = stdout;
    })
    return content;
}

function upload()
{
    console.log("request handler: upload");
    return "hello upload";
}

exports.start = start;
exports.upload = upload;