var questionCounter = 0;
// var ingredientCounter = 0;


var question = [ 
'Do ye like yer drinks strong?',
'Do ye like it with a salty tang?', 
'Are ye a lubber who likes it bitter?', 
'Would ye like a bit of sweetness with yer poison?', 
'Are ye one for a fruity finish?'
]

var ingredients = [
['Glug of rum', 'slug of whisky', 'splash of gin'],
['Olive on a stick', 'salt-dusted rim', 'rasher of bacon'],
['Shake of bitters', 'splash of tonic', 'twist of lemon peel'],
['Sugar cube', 'spoonful of honey', 'splash of cola'],
['Slice of orange', 'dash of cassis', 'cherry on top']
];


function Bartender(question, ingredients) {
    this.question = question;
    this.ingredients = ingredients;
}

var newObject = new Bartender(question, ingredients[0]);

Bartender.prototype.randomDrink = function() {
var rand = ingredients[ingredientCounter][Math.floor(Math.random() * ingredients[ingredientCounter].length)];
}

console.log(newObject.question[questionCounter]);




// $(document).ready(function() {

//     $(".user-choice").hide();

//     //Order Button 
//     $(".order-button").click(function() {
//         $(".start-page").hide();
//         $(".user-choice").show();
//         for (var i = 0; i < questionList[questionCounter].question.length; i++) {
//             $(".print-question").text(questionList[questionCounter].question);

//         }


//     });

//     //Nay! Button
//     $(".no-button").click(function() {
//         questionCounter++;
//         ingredientCounter++;
//         for (var i = 0; i < questionList[questionCounter].question.length; i++) {
//             $(".print-question").text(questionList[questionCounter].question);
//             $(".random-drink").empty();
//         }

//     });

//     //Aye! Button
//     $(".yes-button").click(function() {
//         $(".random-drink").empty();
        
//         var html = '';
//         html += '<li>' + rand + '</li>';
//         $('.random-drink').append(html);

//     });

// });





// var newObject = new Bartender('Do ye like yer driks strong?', [new Ingredient('glug of rum'), new Ingredient('slug of whiskey')]);







// Bartender.prototype.createDrink()
// var Bartender = function() {
//     createDrink = function() {


//     }


// }




/*

Constructor Idea?

var ingredients = {
    strong: [ 'ing1', 'ing2'],
}

var Drink = function (ingredients) {
    this.strong = ingredients.strong;
}

*/


/*************************Notes**********************/

/*
User Clicks on Order Button - create an array for questions
                            - create an array for ingredients
                            - constructor function that refers to the variables from above
                          

*/

// var questionList = [
// new Question('Do ye like yer driks strong?', [new Ingredient('glug of rum'), new Ingredient('slug of whiskey')]),



/************** Might Use **************************/

//create a constructor function that selects ingredients



// var ingredients = {
//     strong: ['Glug of rum', 'slug of whisky', 'splash of gin'],
//     salty: ['Olive on a stick', 'salt-dusted rim', 'rasher of bacon'],
//     bitter: ['Shake of bitters', 'splash of tonic', 'twist of lemon peel'],
//     sweet: ['Sugar cube', 'spoonful of honey', 'splash of cola'],
//     fruity: ['Slice of orange', 'dash of cassis', 'cherry on top']
// }