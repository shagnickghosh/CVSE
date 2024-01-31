//References
let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 11;
let countdown;

//Questions and Options array

const quizArray = [
  {
    id: "0",
    question: 'Who wrote "A Tale of Two Cities"?',
    options: ["Charles Dickens", "Jane Austen", "Charlotte Brontë", "William Thackeray"],
    correct: "Charles Dickens",
  },
  {
    id: "1",
    question: 'Who wrote "Ode to a Nightingale"?',
    options: ["John Keats", "Percy Bysshe Shelley", "Lord Byron", "William Wordsworth"],
    correct: "John Keats",
  },
  {
    id: "2",
    question: 'Who wrote "One Hundred Years of Solitude"?',
    options: ["Gabriel García Márquez", "Julio Cortázar", "Isabel Allende", "Mario Vargas Llosa"],
    correct: "Gabriel García Márquez",
  },
  {
    id: "3",
    question: 'What novel has the alternative title, "The Two Nations"?',
    options: ["North and South", "Sybil", "A Tale of Two Cities", "Jude The Obscure"],
    correct: "Sybil",
  },
  {
    id: "4",
    question: 'Who is said to have authored the novel "Ulysses"?',
    options: ["James Joyce", "Charles Dickenson", "Alexander Pope", "William Shakespeare"],
    correct: "James Joyce",
  },
  {
    id: "5",
    question: 'Who among the following is NOT a Modernist writer?',
    options: ["Virginia Woolf", "T. S. Eliot", "Thomas Kyd", "Ernest Hemingway"],
    correct: "Thomas Kyd",
  },
  {
    id: "6",
    question: '"A Walking Tour of Cumbria" is associated with-',
    options: ["Keats and Shelley", "Coleridge", "Byron", "William and Dorothy Wordsworth"],
    correct: "Coleridge",
  },
  {
    id: "7",
    question: 'Which poem begins with the following famous line: "The curfew tolls the knell of parting day"?',
    options: ["Wordsworth's “Tintern Abbey”", "Blake's “Chimney Sweeper”", "Coleridge's “Frost at Midnight”", "Gray's “Elegy Written in a Country Churchyard”"],
    correct: "Gray's “Elegy Written in a Country Churchyard”",
  },
  {
    id: "8",
    question: 'The Castle of Otranto was written by-',
    options: ["Mrs. Radcliffe", "Jane Austen", "Horace Walpole", "Samuel Johnson"],
    correct: "Horace Walpole",
  },
  {
    id: "9",
    question: 'The Thorn and The Idiot Boy were written by?',
    options: ["Wordsworth", "Coleridge", "Blake", "Gray"],
    correct: "Wordsworth",
  },
  {
    id: "10",
    question: 'Ivanhoe was written by-',
    options: ["Sir Arthur Conan Doyle", "SWir Walter Scott", "Dr. Johnson", "Francis Bacon"],
    correct: "Sir Walter Scott",
  },
  {
    id: "11",
    question: 'The Romantic Movement was a reaction against?',
    options: ["The Sublime", "The Age of Enlightenment", "The Pastoral ideal", "The Medieval Age"],
    correct: "The Age of Enlightment",
  },
  {
    id: "12",
    question: 'What novel bears the sub-title "A Pure Woman"?',
    options: ["Agnes Grey", "Tess of the d'Urbervills", "Mary Barton", "Jane Eyre"],
    correct: "Tess of the d'Urbervills",
  },
  {
    id: "13",
    question: 'What poet wrote the lines "Oh, to be in England, Now that Aprils there"?',
    options: ["Lord Tennyson", "Robert Browning", "Matthew Arnold", "William Morris"],
    correct: "Robert Browning",
  },
  {
    id: "14",
    question: '"The Cry of the Children"  is a poem by-',
    options: ["Elizabeth Barret Browning", "A. C. Swinburne", "Robert Browning", "Charles Dickens"],
    correct: "Elizabeth Barret Browning",
  },
  {
    id: "15",
    question: 'Which city served as a major setting for many Modernist works and the changing socio-cultural dynamics of the 20th century?',
    options: ["Paris", "London", "New York", "Vienna"],
    correct: "Paris",
  },
  {
    id: "16",
    question: 'What novel by E. M. Foster explores the cultural clash between the British colonizers and the native people in India, and is considered a modernist work?',
    options: ["A Room With a View", "Howards End", "Where Angels Fear to Tread", "A Passage to India"],
    correct: "A PAssage to India",
  },
  {
    id: "17",
    question: 'Which Bronte wrote Wuthering Heights?',
    options: ["Emily", "Branwell", "Anne", "Charlotte"],
    correct: "Emily",
  },
  {
    id: "18",
    question: 'What is the sequel to Harper Lees award winning novel "To Kill A Mocking Bird"?',
    options: ["Go Set A Watchman", "Beyond Death", "The Dead Mockingbird", "The American Miracle"],
    correct: "Go Set A Watchman",
  },
  {
    id: "19",
    question: 'In_______, Blake emphasizes the injustice of late 18th-century society and the desperation of the poor.',
    options: ["The Tyger", "The Lamb", "Auguries of Innocence", "London"],
    correct: "London",
  },
];

//Restart Quiz
restart.addEventListener("click", () => {
  initial();
  displayContainer.classList.remove("hide");
  scoreContainer.classList.add("hide");
});

//Next Button
nextBtn.addEventListener(
  "click",
  (displayNext = () => {
    //increment questionCount
    questionCount += 1;
    //if last question
    if (questionCount == quizArray.length) {
      //hide question container and display score
      displayContainer.classList.add("hide");
      scoreContainer.classList.remove("hide");
      //user score
      userScore.innerHTML =
        "Your score is " + scoreCount + " out of " + questionCount;
    } else {
      //display questionCount
      countOfQuestion.innerHTML =
        questionCount + 1 + " of " + quizArray.length + " Question";
      //display quiz
      quizDisplay(questionCount);
      count = 11;
      clearInterval(countdown);
      timerDisplay();
    }
  })
);

//Timer
const timerDisplay = () => {
  countdown = setInterval(() => {
    count--;
    timeLeft.innerHTML = `${count}s`;
    if (count == 0) {
      clearInterval(countdown);
      displayNext();
    }
  }, 1000);
};

//Display quiz
const quizDisplay = (questionCount) => {
  let quizCards = document.querySelectorAll(".container-mid");
  //Hide other cards
  quizCards.forEach((card) => {
    card.classList.add("hide");
  });
  //display current question card
  quizCards[questionCount].classList.remove("hide");
};

//Quiz Creation
function quizCreator() {
  //randomly sort questions
  quizArray.sort(() => Math.random() - 0.5);
  //generate quiz
  for (let i of quizArray) {
    //randomly sort options
    i.options.sort(() => Math.random() - 0.5);
    //quiz card creation
    let div = document.createElement("div");
    div.classList.add("container-mid", "hide");
    //question number
    countOfQuestion.innerHTML = 1 + " of " + quizArray.length + " Question";
    //question
    let question_DIV = document.createElement("p");
    question_DIV.classList.add("question");
    question_DIV.innerHTML = i.question;
    div.appendChild(question_DIV);
    //options
    div.innerHTML += `
    <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
     <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
      <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
       <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
    `;
    quizContainer.appendChild(div);
  }
}

//Checker Function to check if option is correct or not
function checker(userOption) {
  let userSolution = userOption.innerText;
  let question =
    document.getElementsByClassName("container-mid")[questionCount];
  let options = question.querySelectorAll(".option-div");

  //if user clicked answer == correct option stored in object
  if (userSolution === quizArray[questionCount].correct) {
    userOption.classList.add("correct");
    scoreCount++;
  } else {
    userOption.classList.add("incorrect");
    //For marking the correct option
    options.forEach((element) => {
      if (element.innerText == quizArray[questionCount].correct) {
        element.classList.add("correct");
      }
    });
  }

  //clear interval(stop timer)
  clearInterval(countdown);
  //disable all options
  options.forEach((element) => {
    element.disabled = true;
  });
}

//initial setup
function initial() {
  quizContainer.innerHTML = "";
  questionCount = 0;
  scoreCount = 0;
  count = 11;
  clearInterval(countdown);
  timerDisplay();
  quizCreator();
  quizDisplay(questionCount);
}

//when user click on start button
startButton.addEventListener("click", () => {
  startScreen.classList.add("hide");
  displayContainer.classList.remove("hide");
  initial();
});

//hide quiz and display start screen
window.onload = () => {
  startScreen.classList.remove("hide");
  displayContainer.classList.add("hide");
};
