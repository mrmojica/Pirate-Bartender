var questionCounter = 0;
var ingredientCounter = 0;

var questionList = [{
    question: 'Do ye like yer drinks strong?',
    ingredients: ['Glug of rum', 'slug of whisky', 'splash of gin']
}, {
    question: 'Do ye like it with a salty tang',
    ingredients: ['Olive on a stick', 'salt-dusted rim', 'rasher of bacon']
}, {
    question: 'Are ye a lubber who likes it bitter',
    ingredients: ['Shake of bitters', 'splash of tonic', 'twist of lemon peel']
}, {
    question: 'Would ye like a bit of sweetness with yer poison?',
    ingredients: ['Sugar cube', 'spoonful of honey', 'splash of cola']
}, {
    question: 'Are ye one for a fruity finish?',
    ingredients: ['Slice of orange', 'dash of cassis', 'cherry on top']
}];


$(document).ready(function() {

    $(".user-choice").hide();

    //Order Button 
    $(".order-button").click(function() {
        $(".start-page").hide();
        $(".user-choice").show();
        for (var i = 0; i < questionList[questionCounter].question.length; i++) {
            $(".print-question").text(questionList[questionCounter].question);

        }


    });

    //Nay! Button
    $(".no-button").click(function() {
        questionCounter++;
        ingredientCounter++;
        for (var i = 0; i < questionList[questionCounter].question.length; i++) {
            $(".print-question").text(questionList[questionCounter].question);
            $(".random-drink").empty();
        }

    });

    //Aye! Button
    $(".yes-button").click(function() {
        $(".random-drink").empty();
        var rand = questionList[ingredientCounter].ingredients[Math.floor(Math.random() * questionList[ingredientCounter].ingredients.length)];
        var html = '';
        html += '<li>' + rand + '</li>';
        $('.random-drink').append(html);

    });






});





/*************************Notes**********************/

/*
User Clicks on Order Button - the welcome page disappears
                            Done- first question appears 
                            Done- with two buttons, yes and no
                            Working on it- if user click yes, display random drink
                            Working on it- if use click no, move on to the next question

*/




/************** Might Use **************************/

//create a constructor function that selects ingredients



// var ingredients = {
//     strong: ['Glug of rum', 'slug of whisky', 'splash of gin'],
//     salty: ['Olive on a stick', 'salt-dusted rim', 'rasher of bacon'],
//     bitter: ['Shake of bitters', 'splash of tonic', 'twist of lemon peel'],
//     sweet: ['Sugar cube', 'spoonful of honey', 'splash of cola'],
//     fruity: ['Slice of orange', 'dash of cassis', 'cherry on top']
// }