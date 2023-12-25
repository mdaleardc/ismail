const progressBar = document.querySelector('.progress-bar'),
progressText = document.querySelector(".progress-text");

const progress = (value) => {
	const persentage = (value / time) * 100;
	progressBar.style.width = `${persentage}%`;
	progressText.innerHTML = `${value}`;
}

let Questions = [],
time = 30,
score = 0,
currentQuestion,
timer;

const startBtn = document.querySelector(".start"),
numQuestions = document.querySelector("#num-questions"),
category = document.querySelector("#category"),
difficulty = document.querySelector("#difficulty"),
timePerQuestion = document.querySelector("#time"),
quiz = document.querySelector(".quiz"),
startScreen = document.querySelector(".start-screen"),
submitBtn = document.querySelector(".submit"),
nextBtn = document.querySelector(".next");

const startQuiz = () => {
	const num = numQuestions.value;
	let cat = category.value;
	let diff = difficulty.value;
	
	/*api url*/
	const url = `https://opentdb.com/api.php?amount=${num}&category=${cat}&difficulty=${diff}&type=multiple`;
	
	
	
	
	fetch(url).then((res) => res.json()).then((data) => {
		questions = data.results;
		startScreen.classList.add("hide");
		quiz.classList.remove("hide");
		currentQuestion = 1;
		showQuestion(questions[0]);
	});
};

startBtn.addEventListener("click", startQuiz);

const showQuestion= (question) => {
	const questionText = document.querySelector(".question"),
	answersWrapper = document.querySelector(".answer-wrapper"),
	questionNumber = document.querySelector(".number");
	
questionText.innerHTML = question.question;
	
	/*correct and wrong answers are seperated, let's mix htem*/
	const answers = [
		...question.incorrect_answers,
		decodeHtml(question.correct_answer.toString()),
		];
		
		function decodeHtml(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
};
		
		// correct answer will be always at last 
		// lets shuffle the Array
		answers.sort(() => Math.random() - 0.5);
		answersWrapper.innerHTML = "";
		answers.forEach((answer) =>  {
			answersWrapper.innerHTML += 
			`<div class="answer">
				<span class="text">${answer}</span>
				<span class="checkbox">
					<span class="icon">&checkmark;</span> 
				</span>
			</div>
			`;
		});
		questionNumber.innerHTML = `
		Quesrion <span class="current">${questions.indexOf(question) + 1}</span>
		<span class="total">/${questions.length}</span>`;
		
		// lets add event listener 
		const answerDiv = document.querySelectorAll(".answer");
		answerDiv.forEach((answer) => {
			answer.addEventListener("click", () => {
				// if answer is already selected
				if(!answer.classList.contains("checked")) {
					// remove checked from other answers
					answerDiv.forEach((answer) => {
						answer.classList.remove("selected")
					});
					//add selected on currently click
					answer.classList.add("selected");
					// after any answer is selected submit button is enabled
					submitBtn.disabled = false;
				}
			});
		});
		
		// after updating question start timer 
		time = timePerQuestion.value;
		startTimer(time);
};

const startTimer = (time) => {
	timer = setInterval(() => {
		if(time >= 0) {
			//if timer more than 0 means time remaining
			// move progress
			progress(time);
			time--;
		} else {
			//if time finishes means less than 0
			checkAnswer();
		}
	}, 1000);
};

submitBtn.addEventListener("click", () => {
	checkAnswer();
});

const checkAnswer = () => {
	// first clear interval when check answer is clicked
	clearInterval(timer);
	
	const selectedAnswer = document.querySelector(".answer.selected");
	// any answer is selected 
	
	function decodeHtml(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
};
	
	if(selectedAnswer) {
		const answer = selectedAnswer.querySelector(".text");
		if (answer.textContent === decodeHtml(questions[currentQuestion - 1].correct_answer)) {
			//if answer match with current question correct answer
			// increase scores 
			score++;
			
			
			// add correct class on selected 
			selectedAnswer.classList.add("correct");
		} else {
			// if wrong selected 
			// add wrong class on selected but then also add correct class on correct answer
			selectedAnswer.classList.add("wrong");
			const correctAnswer = document.querySelectorAll(".answer").forEach((answer) => {
				if(answer.querySelector(".text").innerHTML == questions[currentQuestion - 1].correct_answer) {
					// only correct class to correct answer
					answer.classList.add("correct");
				}
			});
		}
	}
	// answer check will be also triggered when time reaches 0
	// what if nothing seleceted and time finished
	// let's just add correct class on correct answer
	else{
		const correctAnswer = document.querySelectorAll(".answer").forEach((answer) => {
				if(answer.querySelector(".text").innerHTML == questions[currentQuestion - 1].correct_answer) {
					// only correct class to correct answer
					answer.classList.add("correct");
				}
			});
	}
	
	// let block user to select further answersWrapper
	const answerDiv = document.querySelectorAll(".answer");
	answerDiv.forEach((answer) => {
		answer.classList.add("checked");
		//add checked class on all answers as we check for it when on click answer if its present do nothing
		// also when checked don't add hover effect on the checkbox
	});
	
	// after submit show next btn to go to next question
	submitBtn.style.display = "none";
	nextBtn.style.display = "block";
};

// on next btn click show next question

nextBtn.addEventListener("click", () => {
	nextQuestion();
	// also show submit btn on next question and hide next btn
	
	nextBtn.style.display = "none";
	submitBtn.style.display = "block";
});

const nextQuestion = () => {
	// if there is remaining question
	if(currentQuestion < questions.length) {
		currentQuestion++;
		showQuestion(questions[currentQuestion - 1]);
	} else {
		// if no question remaining
		 showScore();
	}
};

const endScreen = document.querySelector(".end-screen"),
finalScore = document.querySelector(".final-score"),
totalScore = document.querySelector(".total-score");
const showScore = () => {
	endScreen.classList.remove("hide");
	quiz.classList.add("hide");
	finalScore.innerHTML = score;
	totalScore.innerHTML = `${questions.length}`;
};
console.log(endScreen);
console.log(quiz);

const restartBtn = document.querySelector(".restart");
restartBtn.addEventListener("click", () => {
	// reload page on click
	window.location.reload();
});

// the end!






