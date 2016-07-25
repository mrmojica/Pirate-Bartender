var questionCounter = 0;

var questionList = [{
           question: 'Do ye like yer drinks strong?',
           choices: ['Yes', 'No'],
           correctAnswer: 0
       },{
           question: 'Do ye like it with a salty tang',
           choices: ['Yes', 'No'],
           correctAnswer: 0
       },{
           question: 'Are ye a lubber who likes it bitter',
           choices: ['Yes', 'No'],
           correctAnswer: 0
       },{
           question: 'Would ye like a bit of sweetness with yer poison?',
           choices: ['Yes', 'No'],
           correctAnswer: 0
       },{
           question: 'Are ye one for a fruity finish?',
           choices: ['Yes', 'No'],
           correctAnswer: 0
       }];
    

var ingredients = {
    strong: ['Glug of rum', 'slug of whisky', 'splash of gin'],
    salty: ['Olive on a stick', 'salt-dusted rim', 'rasher of bacon'],
    bitter: ['Shake of bitters', 'splash of tonic', 'twist of lemon peel'],
    sweet: ['Sugar cube', 'spoonful of honey', 'splash of cola'],
    fruity: ['Slice of orange', 'dash of cassis', 'cherry on top']
}


$(document).ready(function() {
    $(".user-choice").hide();
    $(".order-button").click(function() {
       $(".start-page").hide();
       $(".user-choice").show();   

  for(var i = 0; i < questionList[questionCounter].question.length; i++) {
      $(".print-question").text(questionList[questionCounter].question);

  }




    });    

}); 





/*************************Notes**********************/

/*
User Clicks on Order Button - the welcome page disappears
                            - first question appears
                            - with two buttons, yes and no
                            - if user click yes, display random drink
                            - if use click no, move on to the next question

*/






/************** Might Use **************************/

// var newQuestion = new Bartender(questionList[questionCounter].question);
// console.log(newQuestion); 


  // 
  //   var choiceCounter = 0;

  //   function Bartender(question, choices) {
  //       this.question = question;
  //       this.choices = choices;


  //   }

//create a constructor function that selects ingredients










