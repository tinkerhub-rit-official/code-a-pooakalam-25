//Hamburger functionality

const hamburgerButton = document.getElementById('hamburger-button');
const navMenu = document.getElementById('nav-menu');

hamburgerButton.addEventListener('click', () => {
  navMenu.classList.toggle('show-nav');
});

//Register button functionality

const regBtn = document.getElementById("link");

regBtn.addEventListener("click", function() {
    window.location.href = "https://tally.so/r/wzkyrM";
});

//FAQ Functionality
const faqQuestions = document.querySelectorAll('.faq-que');

faqQuestions.forEach(question => {
  question.addEventListener('click', () => {
    question.nextElementSibling.classList.toggle('show-answer');
  });
});

//Functionality for what is a pookalam

const pookalam = document.getElementById('what-is-a-pookalam');
const pookalamAnswer = document.getElementById('pookalam-answer');

pookalam.addEventListener('click', () => {
    pookalamAnswer.classList.toggle('hidden-answer');
})