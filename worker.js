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
        let targetHostname = "bcm.fandom.com";
        let proxyHostname = "test3.54145a.cn.eu.org";
        if (new URL(request.url).pathname === "/robots.txt") {
            return new Response("User-Agent: *\nDisallow: /");
        }
        let newRequest = new Request(request.url.replace(proxyHostname, targetHostname), {
            body: request.body
        });
        //request.headers.forEach((v, k) => newRequest.headers.set(k, v.replace(proxyHostname, targetHostname)));
        //newRequest.headers.set("Access-Control-Allow-Origin", "*");
        //newRequest.headers.set("Access-Control-Allow-Origin", "*");
        //newRequest.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
        //newRequest.headers.set("Access-Control-Allow-Headers", "*");
        newRequest.headers.set("Referrer", newRequest.url);
        newRequest.headers.set("Host", proxyHostname);
        //newRequest.headers.keys().filter(v => v.startsWith("cf")).forEach(v => newRequest.headers.delete(v));
        r.reqH = jsonHeaders(newRequest.headers);
        let response = await fetch(newRequest);
        /*if (response.url !== newRequest.url) {
            return Response.redirect(response.url.replace(targetHostname, proxyHostname));
        }*/
        //response.url.replace(targetHostname, proxyHostname);
        let newHeaders = new Headers();
        //let newBody = null;
        /*if (response.headers.get("Content-Type")?.match(/html/)) {
            let newBody = (await response.text()).replaceAll(targetHostname, proxyHostname);
            r.resB = newBody;
        } else {
            newBody = response.body;
        }
            newBody = response.body;
            */
        //newHeaders.set("access-control-allow-origin", "*");
        //newHeaders.set("access-control-allow-credentials", "true");
        //newHeaders.delete("content-security-policy");
        //newHeaders.delete("content-security-policy-report-only");
        //newHeaders.delete("clear-site-data");
        //response.headers.forEach((v, k) => newHeaders.set(k, v.replace(targetHostname, proxyHostname)));
        let newResponse = new Response(response.body, {
            headers: newHeaders
        });
        /*let location = response.headers.get("Location");
        if (location) {
            console.log("location",location);
            response.headers.set("Location", location.replace(targetHostname, proxyHostname));
        }*/
        /*let r = {};
        response.headers.forEach((v, k) => r[k] = v);
        return new Response(JSON.stringify(r, void 0, 4));*/
        r.resH = jsonHeaders(newResponse.headers);
        //return new Response(JSON.stringify(r, void 0, 4));
        return newResponse;
    }
};