/**
 * Created by Administrator on 2017/3/21.
 */
function start()
{
    console.log("request handler: start");
    return "hello start";
}

function upload()
{
    console.log("request handler: upload");
    return "hello upload";
}

exports.start = start;
exports.upload = upload;