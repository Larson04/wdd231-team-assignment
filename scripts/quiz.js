const catTrivia = [
    { name: "Sphynx", imgURL: ""},
    { name: "Siamese", imgURL: ""},
    { name: "Himalayan", imgURL: ""},
    { name: "Maine Coon", imgURL: ""},
    { name: "Cheetoh", imgURL: ""}
]

const dogTrivia = [
    { name: "Golden Retriever", imgURL: ""},
    { name: "German Shepherd", imgURL: ""},
    { name: "Husky", imgURL: ""},
    { name: "Pug", imgURL: ""},
    { name: "Pitbull", imgURL: ""}
]

function getParam(param) {
    const paramString = window.location.search;
    const params = new URLSearchParams(paramString);
    return params.get(param);
}

function quizQuestionTemplate () {
    //create a template with a picture of each breed and the 5 options as radio buttons
}

function renderQuiz () {
    //create the quiz template with either the title being dog quiz or cat quiz along with all 5 of the quiz questions in a form with a submit button
}