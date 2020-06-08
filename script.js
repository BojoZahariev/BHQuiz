var score = [];
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

//const answers2 = document.querySelectorAll('.answers2');

const clearScreen = () => {
  let containers = document.getElementsByClassName('quizPages');
  Array.from(containers).forEach(element => {
    element.style.display = 'none';
  });
};

const checkMatch = (answer, question) => {
  let correct = document.getElementById(answer).textContent;
  if (choice === correct) {
    score[question] = 1;
  } else {
    score[question] = 0;
  }

  console.log(score);
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
    checkMatch('correct1', 0);
    quiz2.style.display = 'block';
  } else {
    mes1.textContent = 'make a choice';
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
    checkMatch('correct2', 1);
    quiz3.style.display = 'block';
  } else {
    mes2.textContent = 'make a choice';
  }
});

//Quiz3
finish.addEventListener('click', e => {
  if (checkClicked('answers3')) {
    clearScreen();
    checkMatch('correct3', 2);

    //summarize all score
    const add = (a, b) => a + b;
    const sum = score.reduce(add);
    final.style.display = 'block';
    finalScore.textContent = sum;
  } else {
    mes3.textContent = 'make a choice';
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
  console.log(Array.from(allAnswers).some(hasIt));
  return Array.from(allAnswers).some(hasIt);
  /*

  Array.from(allAnswers).forEach(element => {
    if (element.classList.contains('checked')) {
      console.log('true');
      return true;
    } else {
      console.log('false');
      return false;
    }
  });
  */
};
