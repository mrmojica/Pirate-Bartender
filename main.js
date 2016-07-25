//Notes

/*
Create Questions:

Ingredient Object:

Create a random drink




*/





    var questionList = [

        {
            question: 'Do ye like yer drinks strong?',
            choices: ['Yes', 'No'],
            correctAnswer: 0
        },

        {
            question: 'Do ye like it with a salty tang',
            choices: ['Yes', 'No'],
            correctAnswer: 0
        },

        {
            question: 'Are ye a lubber who likes it bitter',
            choices: ['Yes', 'No'],
            correctAnswer: 0
        },

        {
            question: 'Would ye like a bit of sweetness with yer poison?',
            choices: ['Yes', 'No'],
            correctAnswer: 0
        },

        {
            question: 'Are ye one for a fruity finish?',
            choices: ['Yes', 'No'],
            correctAnswer: 0
        }
    ];

    var questionCounter = 0;
    var choiceCounter = 0;

    function Bartender(question, choices) {
    	this.question = question;
    	this.choices = choices;


    }



var newQuestion = new Bartender(questionList[questionCounter].question);
	
// get value of yes or no
console.log(newQuestion);














