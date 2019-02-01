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
console.log('Year graduated, ' + college);
while(college !== '2011'){
  alert('Nope, guess again! Probably earlier than you\'d think...');
  var years = prompt('What year did I graduate from college?');
}
alert('Yep, I graduated in 2011. At the ripe old age of 20.');

// Question 4

var milk = prompt('Am I Lacotse Intolerant?')
.toLowerCase(milk);
if(milk === 'yes') {
  alert('Unfortunately, correct. Milk is not my friend.');
}else{
  alert('I wish, but nope, milk and I are no longer friends');
}

// Question 5

