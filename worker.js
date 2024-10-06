/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run "npm run dev" in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run "npm run deploy" to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */
function jsonHeaders(h) {
    let r = {};
    h.forEach((v, k) => r[k] = v);
    return r;
}
export default {
    async fetch(request, env, ctx) {
        let r = {};
        let targetHostname = "zh.wikipedia.org";
        let proxyHostname = "test3.54145a.cn.eu.org";
        if (new URL(request.url).pathname === "/robots.txt") {
            return new Response("User-Agent: *\nDisallow: /");
        }
        let newRequest = new Request(request.url.replace(proxyHostname, targetHostname), {
            body: request.body
        });
        request.headers.forEach((v, k) => newRequest.headers.set(k, v.replace(proxyHostname, targetHostname)));
        newRequest.headers.set("Access-Control-Allow-Origin", "*");
        //newRequest.headers.delete("Origin");
        //newRequest.headers.delete("Referrer");
        //newRequest.headers.delete("Host");
        newRequest.headers.keys().filter(v => v.startsWith("cf")).forEach(v => newRequest.headers.delete(v));
        r.reqH = jsonHeaders(newRequest.headers);
        let response = await fetch(newRequest);
        response.url.replace(targetHostname, proxyHostname);
        let newText = (await response.text()).replaceAll(targetHostname, proxyHostname);
        let newResponse = new Response(newText, {
            status: response.status
        });
        /*let location = response.headers.get("Location");
        if (location) {
            console.log("location",location);
            response.headers.set("Location", location.replace(targetHostname, proxyHostname));
        }*/
        response.headers.forEach((v, k) => newResponse.headers.set(k, v.replace(targetHostname, proxyHostname)));
        /*let r = {};
        response.headers.forEach((v, k) => r[k] = v);
        return new Response(JSON.stringify(r, void 0, 4));*/
        r.resH = jsonHeaders(newResponse.headers);
        r.resB = newText;
        //return new Response(JSON.stringify(r, void 0, 4));
        return newResponse;
    }
};