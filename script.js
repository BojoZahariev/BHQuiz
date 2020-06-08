var score = [];
var allWrongs = [];
var choice;
var answered1 = false;
var answered2 = false;
var answered3 = false;

const headDiv = document.querySelector('#headDiv');
const startBtn = document.querySelector('#startBtn');

//quiz
const quizDiv = document.querySelector('#quizDiv');
const quiz1 = document.querySelector('#quiz1');
const quiz2 = document.querySelector('#quiz2');
const quiz3 = document.querySelector('#quiz3');
const next1 = document.querySelector('#next1');
const next2 = document.querySelector('#next2');
const finish = document.querySelector('#finish');
const pre2 = document.querySelector('#pre2');
const pre3 = document.querySelector('#pre3');
const mes1 = document.querySelector('#mes1');
const mes2 = document.querySelector('#mes2');
const mes3 = document.querySelector('#mes3');
const final = document.querySelector('#final');
const finalScore = document.querySelector('#finalScore');
const reload = document.querySelector('#reload');
const wrongAnswers = document.querySelector('#wrongAnswers');

//const answers2 = document.querySelectorAll('.answers2');

const clearScreen = () => {
  let containers = document.getElementsByClassName('quizPages');
  Array.from(containers).forEach(element => {
    element.style.display = 'none';
  });
};

const checkMatch = (answer, question, source) => {
  let correct = document.getElementById(answer).textContent;
  if (choice === correct) {
    score[question] = 1;
    //remove the stored wrong answer if changed to correct
    allWrongs[question] = 0;
  } else {
    score[question] = 0;
    //store the info for wrong answer
    allWrongs[question] = outcome(document.getElementById(source).textContent, choice, correct);
  }
};

//display the outcome
const outcome = (question, wrong, right) => {
  let wrongDiv = document.createElement('div');
  wrongDiv.classList.add('wrongDiv');
  let wrong1 = document.createElement('p');

  wrong1.textContent = 'The correct answer of the question:';
  let span1 = document.createElement('p');
  span1.classList.add('questionWrong');
  span1.textContent = question;

  let span2 = document.createElement('span');
  span2.textContent = 'is:';

  let span3 = document.createElement('p');
  span3.classList.add('rightAnswer');
  span3.textContent = right;

  let span4 = document.createElement('p');
  span4.textContent = 'You answered:';

  let span5 = document.createElement('p');
  span5.classList.add('wrongAnswer');
  span5.textContent = wrong;

  wrongDiv.appendChild(wrong1);
  wrongDiv.appendChild(span1);
  wrongDiv.appendChild(span2);
  wrongDiv.appendChild(span3);
  wrongDiv.appendChild(span4);
  wrongDiv.appendChild(span5);
  return wrongDiv;
};

const clickControl = (answer, cl) => {
  let clickedBtn = document.getElementById(answer).textContent;
  let allAnswers = document.getElementsByClassName(cl);
  //remove the class for checked
  Array.from(allAnswers).forEach(element => {
    element.classList.remove('checked');
  });

  document.getElementById(answer).classList.add('checked');
  console.log(clickedBtn);
  choice = clickedBtn;
};

const checkClicked = cl => {
  let allAnswers = document.getElementsByClassName(cl);

  const hasIt = element => element.classList.contains('checked');

  return Array.from(allAnswers).some(hasIt);
};

startBtn.addEventListener('click', e => {
  headDiv.style.display = 'none';
  quizDiv.style.display = 'block';
  quiz1.style.display = 'block';
});

//Quiz1
next1.addEventListener('click', e => {
  if (checkClicked('answers1')) {
    clearScreen();
    checkMatch('correct1', 0, 'question1');
    quiz2.style.display = 'block';
  } else {
    mes1.textContent = 'Make a choice';
  }
});

//Quiz2
pre2.addEventListener('click', e => {
  clearScreen();
  quiz1.style.display = 'block';
});

next2.addEventListener('click', e => {
  if (checkClicked('answers2')) {
    clearScreen();
    checkMatch('correct2', 1, 'question2');
    quiz3.style.display = 'block';
  } else {
    mes2.textContent = 'Make a choice';
  }
});

//Quiz3
finish.addEventListener('click', e => {
  if (checkClicked('answers3')) {
    clearScreen();
    checkMatch('correct3', 2, 'question3');

    //display the wrong ones
    allWrongs.forEach(element => {
      if (element !== 0) {
        wrongAnswers.appendChild(element);
      }
    });

    //summarize all score
    const add = (a, b) => a + b;
    const sum = score.reduce(add);
    final.style.display = 'block';
    finalScore.textContent = sum;
  } else {
    mes3.textContent = 'Make a choice';
  }
});

pre3.addEventListener('click', e => {
  clearScreen();
  quiz2.style.display = 'block';
});

//Final
reload.addEventListener('click', e => {
  window.location.reload();
});
