//クイズのセット
const quiz = [
  {
    question: '今日の天気は？',
    answer: ['晴れ', '曇り', '雨', 'コロコロ変わる'],
    correct: "雨"
  }, {
    question: '屈辱の',
    answer: ['黄色エプロン', '青色エプロン', '赤色エプロン', '緑色エプロン'],
    correct: "黄色エプロン"
  }, {
    question: 'かずきさんのチームでうつ病の人数は？（予備軍含む）',
    answer: ['3人', '4人', '5人', '6人'],
    correct: "5人"
  }
];

const $button = document.getElementsByClassName("btn");
let buttonLength = $button.length;
let pageNumber = 0;
let score = 0;

//ボタン更新
const setupQuiz = () => {
  document.getElementById("js-question").textContent = quiz[pageNumber].question;
  let buttonIndex = 0;
  while (buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = quiz[pageNumber].answer[buttonIndex];
    buttonIndex++;
  }
}
setupQuiz();


//最終ボタン後の動き
const finishQuiz = () => {
  window.location.href = "result.html";
}

//正誤判定
const clickHandler = (e) => {
  if (e.target.textContent === quiz[pageNumber].correct) {
    window.alert("正解");
    score++;
  } else {
    window.alert("不正解");
  }
  pageNumber++;
  if (pageNumber < quiz.length) {
    setupQuiz();
  } else {
    finishQuiz();
  }
}

let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener("click", (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}
