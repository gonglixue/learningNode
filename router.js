/**
 * Created by Administrator on 2017/3/21.
 */

function route(handler, pathname, response)
{
    if(typeof(handler[pathname]) === 'function')
    {
        return handler[pathname](response);
    }
    else{
        console.log("no request handler found for :" + pathname);
        response.writeHead(404, {"Content-Type":"text-plain"});
        response.write("404 Not found");
        response.end();
    }
}

exports.route = route;