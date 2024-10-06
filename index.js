import http from 'node:http';

http.createServer((request, response) => {
    /*let url = new URL(request.url);
    if (url.pathname === "/robots.txt") {
        return new Response("User-Agent: *\nDisallow: /");
    }
    url.hostname = targetHostname;
    let newRequest = new Request(url, request);
    /*newRequest.headers.set("Access-Control-Allow-Origin", "*");
                    newRequest.headers.delete("Origin");
                                            newRequest.headers.delete("Referrer");*/
    response.write(JSON.stringify(request));
    //return fetch(newRequest);
}).listen();
let targetHostname = "zh.wikipedia.org";
