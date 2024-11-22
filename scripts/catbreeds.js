import { getJson } from "./cat.mjs";

async function fetchCatData() {
    console.log("fetch cat data started")
    const catData = await getJson("breeds");

    catData.forEach(data => {
        if (!data.image || !data.image.url) {
            return; 
        }
        const breedHTML = catBreedTemplate(data);
        console.log(breedHTML);
        document.querySelector(".breeds").innerHTML += breedHTML;
    })
}

function catBreedTemplate(data) {
    return `
    <div class="breed">
    <img src="${data.image.url}" alt="Picture of ${data.name} cat">
    <section class="breed-info">
        <h2>${data.name}</h2>
        <p>${data.description}</p>
        <p>${data.origin}</p>
        <p>Life Span: ${data.life_span}</p>
        <p>Weight: ${data.weight.imperial} pounds</p>
        <p>Temperament: ${data.temperament}</p>
        </section>
    </div>
    `;
}

fetchCatData();

