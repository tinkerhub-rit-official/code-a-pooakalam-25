let question = document.getElementById("what-is-a-pookalam");
let answer = document.getElementById("pookalam-answer");

question.addEventListener("click", () => {
    answer.classList.toggle("show-answer");
});