$(document).ready(function() {
	$(".game-main").hide();
	$("#answer-screen").hide();
	$("h2").hide();

	$("#start-button").click(function(){
		$("#intro").fadeOut(1000, function () {
			$(".game-main").fadeIn(1000);
			$("h2").fadeIn(1000);
		});
		
	});

	populateQA();

	$('.answer-choices').on('click', function() {
	console.log($(this).text());

	userInput = $(this).text();

	$('#hidden-answer').text(userInput);

	checkAnswer();
	});

	$(".next-button").on('click', function () {
		$('#hidden-answer').text();
		questionNumber++;
		nextQuestion();
	});
});

var questions = [{
	graphic: "nfl.jpg",
	content: "What does NFL stand for?",
	answers: ["A) No Fun League", "B) Nice Funky League", "C) National Football League", "D) Northern French League"],
	correct: "C) National Football League",
	scoreValue: 100,
	feedbackAnswer: ["Although, 'No Fun League' is a common term used by players and fans to criticize the league for it's disciplinary practices.", 
	"While a cute little term, this is not the right answer.",
	"The National Football League was founded in 1920 and is the premiere league for American football.",
	"Such a thing does not exist..."]
},
{
	graphic: "NBA.png",
	content: "How many championships have the Boston Celtics basketball team won?",
	answers: ["A) 21", "B) 33", "C) 12", "D) 17"],
	correct: "D) 17",
	scoreValue: 100,
	feedbackAnswer: ["Incorrect! Although, the Boston Celtics have won 21 conference titles & 21 division titles. Oh, and they have 21 retired numbers too.",
	"Incorrect! This would be the jersey number for Larry Bird, one of the Celtics' most recognized players.",
	"Incorrect! This would actually be how many times the Celtics met the Los Angeles Lakers, their arch rival, in the NBA Finals.",
	"Correct! The Boston Celtics have won a league leading 17 championships since it's inception in 1946."]
},
{
	graphic: "kangaroo.jpg",
	content: "What do you call a newborn kangaroo?",
	answers: ["A) Joey", " B) Youngin", " C) Cub", "D) Squab"],
	correct: "A) Joey",
	scoreValue: 100,
	feedbackAnswer: ["When kangaroos are born, they are called joeys, a term used for infant marsupials, a class of mammals native to Australia and the Americas.",
	"This is a loosely used slang term for young humans.",
	"This is a term for a young bear.",
	"Squab refers to an infant pigeon."]
},
{
	graphic: "dodo.jpg",
	content: "What year was the last known sighting of the Dodo Bird?",
	answers: ["A) 1912", "B) 1662", "C) 1517", "D) 1776"],
	correct: "B) 1662",
	scoreValue: 100,
	feedbackAnswer: ["This was, however, the year of the sinking of the Titanic on April 14, 1912.",
	"It is widely accepted that historically, the last actual sighting of the Dodo Bird was 1662.",
	"Although, this is the approximate year in which the Mona Lisa was finally completed by Leronardo Da Vinci.",
	"Come on now, that was the year the U.S. declared it's independence from the British! Duh! :)"]
},
{
	graphic: "Mongoose.jpg",
	content: "Which of the following is true about the mongoose? ",
	answers: ["A) There are more than 50 species of Mongoose.", "B) They are immune to snake venom.", "C) They are slow moving, deliberate creatures.", "D) They are strictly meat eaters (carnivorous)."],
	correct: "B) They are immune to snake venom.",
	scoreValue: 100,
	feedbackAnswer: ["There are approximately 30-35 different species of Mongoose in the world.",
	"Mongoose have a special neurotransmitter which renders them immune to snake venom. However, snake is not a regular part of their diet.",
	"Mongoose are very nimble animals, fast enough to avoid strikes from a snake.",
	"Some species on mongoose eat fruits, nuts and seeds as part of their diet."]
}]

var questionNumber = 0;
var scoreKeeper = 0;
var currentQuestion = questions[questionNumber];
var questionAnswers = currentQuestion.answers[questionNumber];


console.log(currentQuestion);


function populateQA(questionNumber) {
	var questionPic = currentQuestion.graphic;
	var questionAns = currentQuestion.answers;
	
	var gameGraphic = $('<img>');
	gameGraphic.attr('src', currentQuestion.graphic);
	$('#game-graphics').prepend(gameGraphic);

	$('#game-question').text(currentQuestion.content);

	for (var i = 0; i < questionAns.length; i++) {
		$('.game-answers').append("<button class='answer-choices'>" + questionAns[i] + "</button>");
	};
}

function checkAnswer() {
	var correctAnswer = currentQuestion.correct;
	var userAnswer = $("#hidden-answer").text();
	var userAnswerArray = currentQuestion.answers.indexOf(userAnswer);
	var answerArrayDesc = currentQuestion.feedbackAnswer[userAnswerArray];

	console.log(userAnswerArray);
	console.log(answerArrayDesc);

	if (userAnswer === correctAnswer) {
		console.log('Correct!');
		rightAnswer();

	}
	else {
		console.log('Incorrect or not working.');
		wrongAnswer();
	};
}

function rightAnswer() {
	var userAnswer = $("#hidden-answer").text(); 
	var userAnswerArray = currentQuestion.answers.indexOf(userAnswer);
	var AnswerDesc = currentQuestion.feedbackAnswer[userAnswerArray];

	$(".game-main").fadeOut(900, function() {
		$("#answer-screen").fadeIn(900);
	});

	$("#answer-screen").find("h1").attr("id", "right-answer").text("Correct!");
	$("#answer-content").find("h3").text(AnswerDesc);
}

function wrongAnswer() {
	var userAnswer = $("#hidden-answer").text(); 
	var userAnswerArray = currentQuestion.answers.indexOf(userAnswer);
	var AnswerDesc = currentQuestion.feedbackAnswer[userAnswerArray];

	$(".game-main").fadeOut(900, function() {
		$("#answer-screen").fadeIn(900);
	});

	$("#answer-screen").find("h1").attr("id", "wrong-answer").text("Incorrect!");
	$("#answer-content").find("h3").text(AnswerDesc);
}

function nextQuestion() {

	populateQA();

	$("#answer-screen").fadeOut(900, function () {
		$(".game-main").fadeIn(900);
	});

}

function questionTracker() {

}

function scoreTracker() {

}

