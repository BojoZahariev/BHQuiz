/*CHANGE BELOW*/
let question1Text = 'Question1?';
let answer1a = 'answer1a';
let answer1b = 'answer1b';
let answer1c = 'answer1c';
let answer1d = 'answer1d';

let question1correct = 'answer1a';
/*CHANGE ABOVE*/

const answers = document.querySelectorAll('.answers');
const question = document.querySelector('#question');
question.textContent = question1Text;

Array.from(answers).forEach(element => {
  element.addEventListener('click', e => {
    console.log(element);
  });
});
