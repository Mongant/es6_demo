export class RestTemplate {

    constructor(url) {
        console.log("constructor calling");
        this.url = url;
    }

    getJsonFromUrl() {
        return fetch(this.url).then((response) => response.json());
    }
}