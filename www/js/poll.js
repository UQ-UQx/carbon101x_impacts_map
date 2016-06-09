var qanimation = require("./questions_animation.js");

module.exports = {
  init: function(questions){

    initPoll(questions);

  },
  getResults: function(questions){

    var results = getResultsForQuestions(questions);

    return results;

  }
}


function initPoll(questions){

    console.log("Called initPoll with the following questions as parameters, ", questions);

    qanimation.qanimate(questions);

}


function getResultsForQuestions(questions){

    console.log("Called getResultsForQuestions with the following questions as parameters, ", questions);

    return [3,5,10];

}