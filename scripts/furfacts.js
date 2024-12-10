import {getCatJson} from "./cat.mjs";
import {getDogJson} from "./dog.mjs";

async function fetchCatData() {
    const catData = await getCatJson("breeds");
    console.log(catData);
    
}

async function fetchDogData() {
    const dogData = await getDogJson("breeds");
    console.log(dogData);
}

function dogDayTemplate(dog) {
    return `
    <section class="aotd-card">
        <h2>Dog of the Day</h2>
        <img src="${dog.image.url}" alt="Placeholder Image">
        <p>${dog.name}</p>
    </section>
    `;
}

function innit() {
    fetchCatData();
    fetchDogData();
}

innit();