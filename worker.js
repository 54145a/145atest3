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
        let url = new URL(request.url);
        if (url.pathname === "/robots.txt") {
            return new Response("User-Agent: *\nDisallow: /");
        }
        url.hostname = "zh.wikipedia.org";
        let newRequest = new Request(url, request);
        /*newRequest.headers.set("Access-Control-Allow-Origin", "*");
                        newRequest.headers.delete("Origin");
                                                newRequest.headers.delete("Referrer");*/
        return new Response(await newRequest.json());
        //return fetch(newRequest);
    },
};