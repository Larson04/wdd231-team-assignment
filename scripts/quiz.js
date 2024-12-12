import { getDogJson } from "./dog.mjs";
import { getCatJson } from "./cat.mjs";

// modules
const catTrivia = [
    { name: "Sphynx", breed_id: "sphy", imgURL: ""},
    { name: "Siamese", breed_id: "siam", imgURL: ""},
    { name: "Himalayan", breed_id: "hima", imgURL: ""},
    { name: "Maine Coon", breed_id: "mcoo", imgURL: ""},
    { name: "Cheetoh", breed_id: "chee", imgURL: ""}
]

const dogTrivia = [
    { name: "Golden Retriever", breed_id: "121", imgURL: ""},
    { name: "German Shepherd", breed_id: "115", imgURL: ""},
    { name: "Husky", breed_id: "8", imgURL: ""},
    { name: "Pug", breed_id: "201", imgURL: ""},
    { name: "Pomeranian", breed_id: "193", imgURL: ""}
]

//using api
async function getCatImageByBreed(breedID) {
    const url = `images/search?breed_ids=${breedID}`;
    const data = await getCatJson(url);
    console.log(data);
    return data[0].url;
}

async function getDogImageByBreed(breedID) {
    const url = `images/search?breed_ids=${breedID}`;
    const data = await getDogJson(url);
    return data[0].url;
}

// populating quiz page
function getQuizType() {
    const params = new URLSearchParams(window.location.search);
    return params.get("quizType");
}

async function populateTriviaImages(triviaData, quizType) {
    let getImageByType = "";
    if (quizType === "dog") {
        getImageByType = getDogImageByBreed;
    } else {
        getImageByType = getCatImageByBreed;
    }

    for (const breed of triviaData) {
        const imgURL = await getImageByType(breed.breed_id);
        breed.imgURL = imgURL;
    };
}

async function prepareTriviaData() {
    await populateTriviaImages(catTrivia, "cat");
    await populateTriviaImages(dogTrivia, "dog");
    renderQuiz();
}

function quizQuestionTemplate(triviaData, breed) {
    return `<div class="quizQuestion"> 
                <img src="${breed.imgURL} " alt="${breed.name} picture">
                <div class="quizOptions">
                    <section class="quizOption"> 
                        <input type="radio" value="answer1" name="${breed.name}">
                        <label for="answer1" class="trivia-answer">${triviaData[0].name}</label>
                    </section>
                    <section class="quizOption"> 
                        <input type="radio" value="answer2" name="${breed.name}">
                        <label for="answer1" class="trivia-answer">${triviaData[1].name}</label>
                    </section>
                    <section class="quizOption"> 
                        <input type="radio" value="answer3" name="${breed.name}">
                        <label for="answer1" class="trivia-answer">${triviaData[2].name}</label>
                    </section>
                    <section class="quizOption"> 
                        <input type="radio" value="answer4" name="${breed.name}">
                        <label for="answer1" class="trivia-answer">${triviaData[3].name}</label>
                    </section>
                    <section class="quizOption"> 
                        <input type="radio" value="answer5" name="${breed.name}">
                        <label for="answer1" class="trivia-answer">${triviaData[4].name}</label>
                    </section>
                </div>
            </div>
            `;
}

function getTriviaData(quizType) {
    let triviaData = "";
    if (quizType === "dog") {
        triviaData = dogTrivia;
    } else {
        triviaData = catTrivia;
    }

    return triviaData;
}

function renderQuiz() {
    const quizType = getQuizType();
    const triviaData = getTriviaData(quizType);
    const quizContainer = document.querySelector(".quiz-container");

    let quizHTML = "";
    for (const breed of triviaData) {
        quizHTML += quizQuestionTemplate(triviaData, breed);
    }
    quizContainer.innerHTML = quizHTML;
}


//drop down menu
function updateDropdownSelection() {
    const quizType = new URLSearchParams(window.location.search).get("quizType");
    const dropdown = document.querySelector("#dog-or-cat");
    dropdown.value = quizType;
}

// change the quiz on the drop down menu
document.querySelector("#dog-or-cat").addEventListener('change', function (e) {
    const selectedQuiz = e.target.value;
    window.location.href = `quiz.html?quizType=${selectedQuiz}`;
})

//render the page
prepareTriviaData();
updateDropdownSelection();