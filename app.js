'use strict'

var firstQuestion = prompt('Are you having a good day? yes or no?');
console.log ('firstQuestion:', firstQuestion);

if (firstQuestion === 'yes') {
  alert('Good im glad to hear it!');
}else{
  alert('Im sorry to hear that!');
}

var questionTwo = prompt('Is it raining outside? Yes or no?');
console.log ('questionTwo:', questionTwo);

if (questionTwo === 'yes') {
  alert('Im sorry I hope it clears up!');
}else{
  alert('Why are you on your computer get outside!');
}

var questionThree = prompt('Is it lunchtime?');
console.log ('questionThree:', questionThree);

if(questionThree === 'yes') {
  alert('Eat up buddy!');
}else{
  alert('Get back to work dawg!');
}

var questionFour = prompt('Do you like cats or dogs better?');
console.log ('questionFour:', questionFour);

if (questionFour === 'cats'){
  alert('I dissagree I think dogs are better!');
}else{
alert('I like dogs as well!')
}
