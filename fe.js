let pastQuestions = [];
let currentQuestion;
injectStartButton(true);

function injectStartButton(firstTime) {
  let text = firstTime? "Start" : "Restart";
  let button = document.createElement("button");
  button.textContent = text;
  button.onclick = function() {start();};
  button.classList.add("startButton");
  displayContent(button, "question");
}

function start() {
  document.getElementById("buttons").style.display = "flex";
  clearCounters();
  shuffleArray(questions);
  currentQuestion = questions.pop();
  displayQuestion(currentQuestion);
  let elem = document.getElementById("left");
  elem.textContent=99;
}

function toggleAnswer() {
  let answer = document.getElementById("answer")
  if (answer.style.display === "flex") {
    answer.style.display = "none";
  } else {
    answer.style.display = "flex";
  }
}

function displayNextCard(wasPreviousResponseCorrect) {
  updateCounters(wasPreviousResponseCorrect);
  pastQuestions.push(currentQuestion);
  // If no more cards left, reset game and show "restart" button.
  if (questions.length === 0) {
    // clear state
    // - put questions back in the right array.
    questions = structuredClone(pastQuestions);
    pastQuestions = [];
    // - hide answer and buttons.
    document.getElementById("buttons").style.display = "none";
    document.getElementById("answer").style.display = "none";
    // put Restart button.
    injectStartButton(false);
  } else {
    // Get new card and display it.
    currentQuestion = questions.pop();
    displayQuestion(currentQuestion);
  }
}

function clearCounters() {
  let elem = document.getElementById("left");
  elem.textContent=100;
  elem = document.getElementById("correct");
  elem.textContent=00;
  elem = document.getElementById("incorrect");
  elem.textContent=00;
}

function updateCounters(wasPreviousResponseCorrect) {
  // -1 one from left.
  let leftCardsElement = document.getElementById("left");
  let leftCards = parseInt(leftCardsElement.textContent);
  if (leftCards > 0) {
    leftCards--;
  }
  leftCardsElement.textContent=Number(leftCards).toLocaleString('en', {minimumIntegerDigits: 2});

  // +1 to either correct or incorrect.
  let elementId = wasPreviousResponseCorrect? "correct" : "incorrect";
  let answersElement = document.getElementById(elementId);
  let answers = parseInt(answersElement.textContent);
  answers++;
  answersElement.textContent=Number(answers).toLocaleString('en', {minimumIntegerDigits: 2});;
}

function displayQuestion(question) {
  displayContent(createParagraph(question[2]), "question");
  displayContent(createBulletList(question[3]), "answer");
  document.getElementById("answer").style.display = "none";
}

function displayContent(content, elementTag) {
  let container = document.getElementById(elementTag);
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  container.appendChild(content);
}

function createParagraph(content) {
  let p = document.createElement('p');
  p.textContent = content;
  return p;

}

function createBulletList(array) {
  let list = document.createElement('ul');
  for (const a of array) {
    let item = document.createElement('li');
    item.textContent = a;
    list.appendChild(item);
  }
  return list;
}

function shuffleArray(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
