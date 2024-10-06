/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run "npm run dev" in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run "npm run deploy" to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
    async fetch(request, env, ctx) {
        let targetHostname = "zh.wikipedia.org";
        let proxyHostname = request.url.hostname;
        if (request.url.pathname === "/robots.txt") {
            return new Response("User-Agent: *\nDisallow: /");
        }
        let newRequest = new Request(request.url.replace(proxyHostname, targetHostname), {
            headers: request.headers,
            body: request.body
        });
        newRequest.headers.set("Access-Control-Allow-Origin", "*");
        newRequest.headers.delete("Origin");
        newRequest.headers.delete("Referrer");
        newRequest.headers.delete("Host");
        newRequest.headers.keys().filter(v => v.startsWith("cf")).forEach(v => newRequest.headers.delete(v));
        let response = await fetch(newRequest);
        let location = response.headers.get("Location");
        if (location) {
            response.headers.set("Location", location.replace(targetHostname, proxyHostname));
        }
        /*let r = {};
        response.headers.forEach((v, k) => r[k] = v);
        return new Response(JSON.stringify(r, void 0, 4));*/
        return response;
    }
};