'use strict';

//Question 1

function askpets(){
  var pets = prompt('How many pets do I own?');
console.log('Number of pets, ', pets);
while(pets !== '2'){
  alert('Nope, guess again!');
  var pets = prompt('How many pets do I ACTUALLY have?');
};
alert('Correct, I have 2 pets!');}

askpets();

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
for (i = 0; i < 4; i++) {
  if (college === '2011') {
    alert('Yep, I graduated in 2011.');
    break;
  } else {
    college = prompt('Nope, guess again! Probably ealier than you\'d think...');
  }
}


// // Question 4

var milk = prompt('Am I Lactose Intolerant?')
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
if(femme === 'yes') {
  alert('Yep, I sure am!');
}else{
  alert('Nope, I sure am! It\'s not a dirty word!');
}

// Question 6
var imdb = prompt('How many credits do I have on my IMdB page? Please use numerical input!');
console.log(imdb);
for (var i = 0; i < 4; i++) {
  console.log('for loop starts');
  if (imdb === '6') {
    alert('Correct, I have 6 IMdB credits!');
    console.log('IMdB logged as 6:' + imdb);
    break;
  }
  else if (imdb >= 7) {
    alert('WHOA, no way! Lower!');
    console.log('IMdB logged as >=7: ' + imdb);
  }
  else {
    alert('No, more! Come on, give me SOME credit!');
    console.log('IMdB < 6: ' + imdb);
  }
  console.log('for loop ends');
  imdb = prompt('Nope, guess again!');
}


// while (badGuess !== 6){
//   imdb = prompt('Nope, guess again!');
//   if(imdb === 6){
//     alert('Correct, I have 6 IMdB credits!');
//     console.log('IMdB logged as 6:' + imdb)
//   }
//   else if(imdb >= 7){
//     alert('WHOA, no way! Lower!');
//     badGuess++
//     console.log('IMdB logged as >=7: ' + imdb)
//   } 
//   else {
//     alert('No, more! Come on, give me SOME credit!');
//     badGuess = 6
//     console.log('IMdB < 6: ' + imdb);
//   }
// }