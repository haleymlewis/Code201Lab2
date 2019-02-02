'use strict';

//Question 1

var pets = prompt('How many pets do I own?');
console.log('Number of pets, ', pets);
while(pets !== '2'){
  alert('Nope, guess again!');
  var pets = prompt('How many pets do I ACTUALLY have?');
};
alert('Correct, I have 2 pets!');

//Question 2

var years = prompt('How many years have I lived in Washington?');
console.log('Years lived in WA: ', years);
while(years !== '28'){
  alert('Nope, guess again!');
  var years = prompt('How many years have I ACTUALLY lived in Washington?');
};
alert('Correct, I have lived in WA for 28 years!');

// Question 3

var college = prompt('What year did I graduate from college?');
console.log('Haley graduated from college in ' + college);
while(college !== '2011'){
  alert('Nope, guess again! Probably earlier than you\'d think...');
  var college = prompt('What year did I graduate from college?');
  if(college === '2011'){
    alert('Yep, I graduated in 2011. At the ripe old age of 20.');
  }
} alert('Yep, I graduated in 2011');

// Question 4

var milk = prompt('Am I Lacotse Intolerant?')
console.log(milk + ' Haley is lactose intolerant.');
milk.toLowerCase();
if(milk === 'yes') {
  alert('Correct, unfortunately. Milk is not my friend.');
}else{
  alert('I wish, but nope, milk and I are no longer friends');
}

// Question 5

var femme = prompt('Am I am feminist?')
femme.toLowerCase();
console.log(femme +' Haley is a proud feminist');
if(femme === yes) {
  alert('Yep, I sure am!');
}else{
  alert('Nope, I sure am! It\'s not a dirty word!');
}

// Question 6
var badGuess = 0;
var imdb = prompt('How many credits do I have on my IMdB page? Please use numerical input!');
while (badGuess !== 6) {
  imdb = prompt('Nope, guess again!');
  if(imdb <= 5){
    imdb = prompt('Nope, too low! Give me SOME credit...');
  }
  else if(imdb >= 7){
    imdb = prompt('WHOA, no way! Lower!');
  } 
  else if(imdb === 6){
    alert('Correct, I have 6 IMdB Credits.');
    badGuess = 6
  }
  badGuess++
}