//Example of how to do an array for multiple answers.



var Question = [
	{
	graphic: "nfl.jpg",
	content: "What does NFL stand for?",
	answers: [
		{
		answerNumber: 1,
		answerValue: "No Fun League",
		correct: false,
		scoreValue: 0,
		feedback: {
			content: "Incorrect! Although, 'No Fun League' is a common term used by players and fans to criticize the league for it's disciplinary practices."
			}
		},
		{
			answerNumber: 2,
			answerValue: "Nice Funky League",
			correct: false,
			scoreValue: 0,
			feedback: {
				content: "Incorrect! While a cute little term, this is not the right answer."
				}
		},
			{
				answerNumber: 3,
				answerValue: "National Football League",
				correct: true,
				scoreValue: 100,
				feedback: {
					content: "Correct! The National Football League was founded in 1920 and is the premiere league for American football."
					}
			},
				{	
					answerNumber: 4,
					answerValue: "Northern French League",
					correct: false,
					feedback: {
						content: "Incorrect! Such a thing does not exist..."
						}
				}

			]
		}
	},
	{
		graphic: "nba.jpg",
		content: "How many championships have the Boston Celtics basketball team won?",
		answers: [
			{
				answerNumber: 1,
				answerValue: "21",
				correct: false,
				scoreValue: 0,
				feedback: {
					content: "Incorrect! Although, the Boston Celtics have won 21 conference titles & 21 division titles. Oh, and they have 21 retired numbers too."
				}
			}
			{
				answerNumber: 2,
				answerValue: "33",
				correct: false,
				scoreValue: 0,
				feedback: {
					content: "Incorrect! This would be the jersey number for Larry Bird, one of the Celtics' most recognized players."
				}
			}
			{
				answerNumber: 3,
				answerValue: "12",
				correct: false,
				scoreValue: 0,
				feedback: {
					content: "Incorrect! This would actually be how many times the Celtics met the Los Angeles Lakers, their arch rival, in the NBA Finals."
				}
			}
			{
				answerNumber: 4,
				answerValue: "17",
				correct: true,
				scoreValue: 0,
				feedback: {
					content: "Correct! The Boston Celtics have won a league leading 17 championships since it's inception in 1946."
				}
			}
		]
	},
	{
		graphic: "kangaroo.jpg",
		content: "What do you call a newborn kangaroo?",
		answers: [
			{
				answerNumber: 1,
				answerValue: "Joey",
				correct: true,
				scoreValue: 0,
				feedback: {
					content: "Correct! When kangaroos are born, they are called joeys, a term used for infant marsupials, a class of mammals native to Australia and the Americas."
				}
			}
			{
				answerNumber: 2,
				answerValue: "Youngin",
				correct: false,
				scoreValue: 0,
				feedback: {
					content: "Incorrect! This is a loosely used slang term for young humans."
				}
			}
			{
				answerNumber: 3,
				answerValue: "Cub",
				correct: false,
				scoreValue: 0,
				feedback: {
					content: "Incorrect! This is a term for a young bear."
				}
			}
			{
				answerNumber: 4,
				answerValue: "Squab",
				correct: false,
				scoreValue: 0,
				feedback: {
					content: "Incorrect! Squab refers to an infant pigeon."
				}
			}
		]
	},
	{
		graphic: "dodo.jpg",
		content: "What year was the last known sighting of the Dodo Bird?",
		answers: [
			{
				answerNumber: 1,
				answerValue: "1912",
				correct: false,
				scoreValue: 0,
				feedback: {
					content: "Incorrect! This was, however, the year of the sinking of the Titanic on April 14, 1912."
				}
			}
			{
				answerNumber: 2,
				answerValue: "1662",
				correct: true,
				scoreValue: 0,
				feedback: {
					content: "Correct! It is widely accepted that historically, the last actual sighting of the Dodo Bird was 1662."
				}
			}
			{
				answerNumber: 3,
				answerValue: "1517",
				correct: false,
				scoreValue: 0,
				feedback: {
					content: "Incorrect! Although, this is the approximate year in which the Mona Lisa was finally completed by Leronardo Da Vinci."
				}
			}
			{
				answerNumber: 4,
				answerValue: "1776",
				correct: false,
				scoreValue: 0,
				feedback: {
					content: "Incorrect! Come on now, that was the year the U.S. declared it's independence from the British! Duh! :)"
				}
			}
		]
	},
	{
		graphic: "mongoose.jpg",
		content: "Which of the following is true about the mongoose? ",
		answers: [
			{
				answerNumber: 1,
				answerValue: "There are more than 50 species of Mongoose.",
				correct: false,
				scoreValue: 0,
				feedback: {
					content: "Incorrect! There are approximately 30-35 different species of Mongoose in the world."
				}
			}
			{
				answerNumber: 2,
				answerValue: "They are immune to snake venom.",
				correct: true,
				scoreValue: 0,
				feedback: {
					content: "Correct! Mongoose have a special neurotransmitter which renders them immune to snake venom. However, snake is not a regular part of their diet."
				}
			}
			{
				answerNumber: 3,
				answerValue: "They are slow moving, deliberate creatures",
				correct: false,
				scoreValue: 0,
				feedback: {
					content: "Incorrect! Mongoose are very nimble animals, fast enough to avoid strikes rrom a snake."
				}
			}
			{
				answerNumber: 4,
				answerValue: "They are strictly meat eaters (carnivorous).",
				correct: false,
				scoreValue: 0,
				feedback: {
					content: "Incorrect! Some species on mongoose eat fruits, nuts and seeds as part of their diet."
				}
			}
		]
	},
];


/*
var Answer = {
	answerNumber: 1,
	answerValue: "No Fun League",
	correct: false,
	scoreValue: 100,
};

var Question = {
	graphic: "nfl.jpg",
	content: "What does NFL stand for?",
};

var Feedback = {
	content: "Incorrect! NFL does not stand for No Fun League. However, this has been a common name used when criticizing the NFL for its tough personal conduct policies.",
};
*/

console.log(questions);