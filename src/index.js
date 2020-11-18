import {RestTemplate} from "./RestTemplate";
import {TableBuilder} from "./TableBuilder"

const tableBody = document.querySelector("tbody");
const rest = new RestTemplate("https://jsonplaceholder.typicode.com/users");
const table = new TableBuilder();

rest.getJsonFromUrl().then(data => {
    console.log(data);
    for (let el of data) {
        table.createTableBody(el);
    }
    tableBody.innerHTML = table.tableRows;
})
