import { getJson } from "./dog.mjs";

async function fetchDogData() {
    console.log("fetch dog data started")
    const dogData = await getJson("breeds");

    dogData.forEach(data => {
        if (!data.image || !data.image.url) {
            return;
        }
        const breedHTML = dogBreedTemplate(data);
        console.log(breedHTML);
        document.querySelector(".breeds").innerHTML += breedHTML;
    })
}

function dogBreedTemplate(data) {
    const bredFor = data.bred_for || "unknown";
    return `
    <div class="breed">
    <img src="${data.image.url}" alt="Picture of ${data.name} dog">
    <section class="breed-info">
        <h2>${data.name}</h2>
        <p>Life Span: ${data.life_span}</p>
        <p>Height: ${data.height.imperial} inches</p>
        <p>Weight: ${data.weight.imperial} pounds</p>
        <p>Temperament: ${data.temperament}</p>
        <p>Bred for: ${bredFor}</p>
        </section>
    </div>
    `;
}

fetchDogData();

