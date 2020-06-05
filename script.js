/*CHANGE BELOW*/
//Question 1
var question1Text = 'Question1?';
var answer1aText = 'answer1a';
var answer1bText = 'answer1b';
var answer1cText = 'answer1c';
var answer1dText = 'answer1d';

var question1correct = 'answer1a';

//Question 2
var question2Text = 'Question2?';
var answer2aText = 'answer2a';
var answer2bText = 'answer2b';
var answer2cText = 'answer2c';
var answer2dText = 'answer2d';

var question2correct = 'answer2a';
/*CHANGE ABOVE*/

//Start
const headDiv = document.querySelector('#headDiv');
const startBtn = document.querySelector('#startBtn');

//quiz
const quizDiv = document.querySelector('#quizDiv');
const answers = document.querySelectorAll('.answers');
const question = document.querySelector('#question');
const answer1 = document.querySelector('#answer1');
const answer2 = document.querySelector('#answer2');
const answer3 = document.querySelector('#answer3');
const answer4 = document.querySelector('#answer4');
const nextBtn = document.querySelector('#nextBtn');

var correct;
var score = 0;
var choice;

startBtn.addEventListener('click', e => {
  headDiv.style.display = 'none';
  quizDiv.style.display = 'block';

  //content
  question.textContent = question1Text;
  answer1.textContent = answer1aText;
  answer2.textContent = answer1bText;
  answer3.textContent = answer1cText;
  answer4.textContent = answer1dText;

  correct = question1correct;
});

Array.from(answers).forEach(element => {
  element.addEventListener('click', e => {
    //remove the class for checked
    Array.from(answers).forEach(element => {
      element.classList.remove('checked');
    });
    choice = element.textContent;
    element.classList.add('checked');
  });
});

const checkMatch = answer => {
  if (answer === correct) {
    score += 1;
  }
};

nextBtn.addEventListener('click', e => {
  checkMatch(choice);
  console.log(score);

  Array.from(answers).forEach(element => {
    element.classList.remove('checked');
  });
  //content
  question.textContent = question2Text;
  answer1.textContent = answer2aText;
  answer2.textContent = answer2bText;
  answer3.textContent = answer2cText;
  answer4.textContent = answer2dText;

  correct = question2correct;
});
