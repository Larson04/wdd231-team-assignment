import {getCatJson} from "./cat.mjs";
import {getDogJson} from "./dog.mjs";

async function fetchCatData() {
    const catData = await getCatJson("breeds");
    console.log(catData);
    
}


let allDogData = [];

async function getDogData() {
    const dogData = await getDogJson("breeds");
    allDogData = dogData;
    renderBreeds(dogData);
}

function renderBreeds(data) {
    const container = document.querySelector(".dotd-card");
    // container.innerHTML = "";
    let random = Math.floor(Math.random() * data.length);
    console.log(random);
    console.log(data[random].image.url);

    // if (!data[random].image || !data[random].image.url) {
    //     return; 
    // }
    const breedHTML = dogBreedTemplate(data[random]);
    container.innerHTML += breedHTML;

 }

function dogBreedTemplate(data) {
    return `
    <div class="breed">
    <img src="${data.image.url}" alt="Picture of ${data.name} dog">
    <p>${data.name}</p>
    `;
}


getDogData();

// document.querySelector("#search").addEventListener("click", searchHandler);
// document.querySelector("#input").addEventListener('keydown', function(e) {
//     if (e.key === 'Enter') {
//         e.preventDefault();
//         searchHandler(e);
//     }
// });
