/**
 * Created by Administrator on 2017/3/21.
 */

function route(handler, pathname)
{
    if(typeof(handler[pathname]) === 'function')
    {
        return handler[pathname]();
    }
    else{
        console.log("no request handler found for :" + pathname);
        return "404 Not found";
    }
}

exports.route = route;