export default {
    async fetch(request) {
        const targetHostname = "bcm.fandom.com";
        const newRequest = new Request(request);
        newRequest.headers.set("Origin", targetHostname);
        const newURl = new URL(newRequest.url);
        newURl.hostname = targetHostname;
        const response = await fetch(newRequest);
        return response;
    }
}