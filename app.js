'use strict';

var name = prompt('Before we get started, what is your name?');
console.log('User name: ' + name);
alert('Nice to meet you, ' + name + ". Let's play a little game!")

var correctGuess = 0

//Question 1

function askpets() {
    var pets = prompt('How many pets do I own?');
    console.log('Number of pets, ', pets);
    var petGuess = 0
    while (pets !== '2') {
        alert('Nope, guess again!');
        pets = prompt('How many pets do I ACTUALLY have?');
        petGuess++;
        if (petGuess >= 6) {
            alert('Whoa, you\'re pretty bad at this huh?')
            break;
        }
    };
    if (pets === '2') {
        console.log('corect answers: ' + correctGuess++);
        alert('Yep, I have 2 fur babies: a dog and a cat.');

    }
}
askpets();

//Question 2

function liveWA() {
  var years = prompt('How many years have I lived in Washington?');
  console.log('Years lived in WA: ', years);
  while (years !== '28') {
    alert('Nope, guess again!');
    var years = prompt('How many years have I ACTUALLY lived in Washington?');
  };
  alert('Correct, I have lived in WA for 28 years!');
  console.log('correct answers: ' + correctGuess++);
}
liveWA();

// Question 3

function collegeGrad() {
  var college = prompt('What year did I graduate from college?');
  console.log('Haley graduated from college in ' + college);
  for (var i = 0; i < 4; i++) {
    if (college === '2011') {
      alert('Yep, I graduated in 2011.');
      console.log('correct answers: ' + correctGuess++);
      break;
    } else {
      college = prompt('Nope, guess again! Here\'s a hint: it was the year the Mayans would have been trying to complete their bucket lists...');
    }
  }
}
collegeGrad();

// Question 4

function lactose() {
  var milk = prompt('Am I Lactose Intolerant?')
  console.log(milk + ' Haley is lactose intolerant.');
  milk.toLowerCase();
  if (milk === 'yes') {
    alert('Correct, unfortunately. Milk is not my friend.');
    console.log('correct answers: ' + correctGuess++);
  } else {
    alert('I wish, but nope, milk and I are no longer friends');
  }
}
lactose();

// Question 5

function sjw() {
  var femme = prompt('Am I am feminist?')
  femme.toLowerCase();
  console.log(femme + ' Haley is a proud feminist');
  if (femme === 'yes') {
    alert('Yep, I sure am!');
    console.log('correct answers: ' + correctGuess++)
  } else {
    alert('Nope, I sure am! It\'s not a dirty word!');
  } 
}
sjw();


// Question 6
function film(){
  var imdb = prompt('How many credits do I have on my IMdB page? Please use numerical input!');
  console.log(imdb);
  for (var i = 0; i < 4; i++) {
    console.log('for loop starts');
    if (imdb === '6') {
      alert('Correct, I have 6 IMdB credits!');
      console.log('IMdB logged as 6:' + imdb);
      console.log('correct answers: ' + correctGuess++);
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
    imdb = prompt('Guess again!');
  }
}
film();

//Question 7
var showArray = ['the good place', 'storage wars', 'american horror story', 'friends', 'community', 'weeds'];
var show = prompt('What is my favorite TV show?')
show.toLowerCase(); 
var showGuess = 0
while(show !== showArray[0]) {
    prompt('Nope, guess again! Here is a hint: watching it puts me in a GOOD PLACE...')
    showGuess++;
    if (showGuess >=6) {
        alert('Sorry, out of guesses. Either my code is broken or you need to watch more TV!');
        break;
    }
    
}
if (show === showArray[0]) {
    alert('Correct! Fork yeah, bench!');
}


// if (show === showArray[0]) {
//     alert('Correct, The Good Place is my favorite show!');
//     console.log('correct answers: ' + correctGuess++)
// } else {
//     alert('Nope, guess again!'); 
// }


//End Comment
if(correctGuess > 6) {
    alert('Whoa ' + name + ', you only got ' + correctGuess + 'questions right? I thought we were friends...');
  } else {
    alert('You got  ' + correctGuess + ' questions right. Nice job, ' + name + '!');
  }



// // Question 7
// var born = prompt('I was only there a few days, but what state was I born in? Hint: it\'s not WA!');
// console.log('guessed: ' + born);
// born.toLowerCase();
// if (born === 'oregon') {
//   alert('Yep, I was born 12 days early in Oregon!')
//   console.log('correct answers: ' + correctGuess++)
// } else {
//   alert('Nope, I was born in Oregon. I moved to WA a week later.');
// }
// if(correctGuess > 6) {
//   alert('Whoa ' + name + ', you only got ' + correctGuess + 'questions right? I thought we were friends...');
// } else {
//   alert('You got  ' + correctGuess + 'questions right. Nice job, ' + name + '!');
// }

// // 





