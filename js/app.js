$(document).ready(function() {
	$(".game-main").hide();
	$("h2").css("color", "#808080");

	$("#start-button").click(function(){
		$("#intro").hide();
		$(".game-main").fadeIn(1000);
	});
});

var question1 = {
	graphic: "nfl.jpg",
	content: "What does NFL stand for?",
	answers: ["No Fun League", "Nice Funky League", "National Football League", "Northern French League"],
	correct: "National Football League",
	scoreValue: 100,
	feedbackAnswer: ["Incorrect! Although, 'No Fun League' is a common term used by players and fans to criticize the league for it's disciplinary practices.", 
	"Incorrect! While a cute little term, this is not the right answer.",
	"Correct! The National Football League was founded in 1920 and is the premiere league for American football.",
	"Incorrect! Such a thing does not exist..."]
};

var question2 = {
	graphic: "nba.jpg",
	content: "How many championships have the Boston Celtics basketball team won?",
	answers: ["21", "33", "12", "17"],
	correct: "17",
	scoreValue: 100,
	feedbackAnswer: ["Incorrect! Although, the Boston Celtics have won 21 conference titles & 21 division titles. Oh, and they have 21 retired numbers too.",
	"Incorrect! This would be the jersey number for Larry Bird, one of the Celtics' most recognized players.",
	"Incorrect! This would actually be how many times the Celtics met the Los Angeles Lakers, their arch rival, in the NBA Finals.",
	"Correct! The Boston Celtics have won a league leading 17 championships since it's inception in 1946."]
};

var question3 = {
	graphic: "kangaroo.jpg",
	content: "What do you call a newborn kangaroo?",
	answers: ["Joey", "Youngin", "Cub", "Squab"],
	correct: "Joey",
	scoreValue: 100,
	feedbackAnswer: ["Correct! When kangaroos are born, they are called joeys, a term used for infant marsupials, a class of mammals native to Australia and the Americas.",
	"Incorrect! This is a loosely used slang term for young humans.",
	"Incorrect! This is a term for a young bear.",
	"Incorrect! Squab refers to an infant pigeon."]
};

var question4 = {
	graphic: "dodo.jpg",
	content: "What year was the last known sighting of the Dodo Bird?",
	answers: ["1912", "1662", "1517", "1776"],
	correct: "1662",
	scoreValue: 100,
	feedbackAnswer: ["Incorrect! This was, however, the year of the sinking of the Titanic on April 14, 1912.",
	"Correct! It is widely accepted that historically, the last actual sighting of the Dodo Bird was 1662.",
	"Incorrect! Although, this is the approximate year in which the Mona Lisa was finally completed by Leronardo Da Vinci.",
	"Incorrect! Come on now, that was the year the U.S. declared it's independence from the British! Duh! :)"]
};

var question5 = {
	graphic: "mongoose.jpg",
	content: "Which of the following is true about the mongoose? ",
	answers: ["There are more than 50 species of Mongoose.", "They are immune to snake venom.", "They are slow moving, deliberate creatures.", "They are strictly meat eaters (carnivorous)."],
	correct: "They are immune to snake venom.",
	scoreValue: 100,
	feedbackAnswer: ["Incorrect! There are approximately 30-35 different species of Mongoose in the world.",
	"Correct! Mongoose have a special neurotransmitter which renders them immune to snake venom. However, snake is not a regular part of their diet.",
	"Incorrect! Mongoose are very nimble animals, fast enough to avoid strikes from a snake.",
	"Incorrect! Some species on mongoose eat fruits, nuts and seeds as part of their diet."]
};

var questionArray = [question1, question2, question3, question4, question5];

var questionNumber = 0;
var scoreKeeper = 0;
var currentQuestion = questionArray[questionNumber];
var questionAnswers = currentQuestion.answers[questionNumber];

console.log(currentQuestion);

function populateQA() {
	var questionPic = currentQuestion.graphic;
	var questionContent = currentQuestion.content;
	var questionAnswers = currentQuestion.answers[questionNumber];
	var questionsRightAnswer = currentQuestion.correct;
	var questionScore = currentQuestion.scoreValue;
	
	$('#answer1').text(currentQuestion.answers[0]);
	$('#answer2').text(currentQuestion.answers[1]);
	$('#answer3').text(currentQuestion.answers[2]);
	$('#answer4').text(currentQuestion.answers[3]);
}

populateQA();

function checkAnswer() {

}

var Q1 = Object.create(question1);
var Q2 = Object.create(question2);
var Q3 = Object.create(question3);
var Q4 = Object.create(question4);
var Q5 = Object.create(question5);

console.log(Q1);
console.log(Q2);
console.log(Q3);
console.log(Q4);
console.log(Q5);

function questionTracker() {
	questionNumber++;
}

function scoreTracker() {

}

