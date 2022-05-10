const letters = "abcdefghijklmnopqrstuvwxyz";

let lettersArray = Array.from(letters);
//console.log(lettersArray);

let letterContainer = document.querySelector('.letters');

lettersArray.forEach(letter => {

    let spanLetter = document.createElement('span');
        spanLetter.appendChild(document.createTextNode(letter));
        spanLetter.className = 'letter_box';

    letterContainer.appendChild(spanLetter);

})


const words = {
    programming: ["php", "javascript", "html", "css", "sass", "mysqul", "react"],
    movies: ["intersteler", "gladiator", "matrix", "number 9", "one piece", "hunter X hunter", "demon Slayer"],
    people: ["ronaldo", "messi", "tom cruise", "cristiano ronaldo", "jason stathem", "mpape"],
    contry: ["tunisie", "egypt", "souria", "libye", "algerie", "france", "usa", "canada"]
}

allKeys = Object.keys(words);
//console.log(allKeys);

let rondomNumber = Math.floor(Math.random() * allKeys.length);
//console.log(rondomPropNumber);
//console.log(allKeys[3]);
let rondomName = allKeys[rondomNumber];
//console.log(rondomPropName);
//console.log(words[rondomPropName]);
//console.log(words["movies"]);
let rondomValue = words[rondomName];

let rondom = Math.floor(Math.random() * rondomValue.length);
//console.log(rondomValueNumber);
let rondomValueValue = rondomValue[rondom];
//console.log(rondomValueValue);

document.querySelector('.game_info span').innerHTML = rondomName;


let letterGuessContainer = document.querySelector('.letters_guess');

let letterAndSpan = Array.from(rondomValueValue);
//console.log(letterrAndSpan);

letterAndSpan.forEach(letter => {

    let emptySpan = document.createElement('span');

    if(letter == ' ') {

        emptySpan.className = 'with_space';

    }

     letterGuessContainer.appendChild(emptySpan);

})


let guessSpan = document.querySelectorAll('.letters_guess span');

let wrongAttempt = 0;

let theDraw = document.querySelector('.hangman_draw');



document.addEventListener('click', (e) => {

    let status = false;

    if(e.target.className == 'letter_box') {

        e.target.classList.add('clicked');

        let clickedLetter = e.target.innerHTML.toLowerCase();
        //console.log(clickedLetter);

        let choosenWord = Array.from(rondomValueValue.toLowerCase());

        choosenWord.forEach((wordLetter, wordIndex) => {

              if(clickedLetter === wordLetter) {

                status = true;
                    
                guessSpan.forEach((span, spanIndex) => {
                     
                    if(wordIndex === spanIndex) {
                        
                        span.innerHTML = clickedLetter;

                    }

                 })

              }

              
            })

            if(status !== true) {

                wrongAttempt++;
                
                theDraw.classList.add(`wrong-${wrongAttempt}`);

                document.querySelector('.failed').play();

                if(wrongAttempt === 8) {

                    letterContainer.classList.add('finished');

                    endGame();

                }

            } else {

                document.querySelector('.success').play();



                if(choosenWord) {



                    letterContainer.classList.add('finished');

                    winGame();
                }


            }

    }

})


function endGame() {
     
     let divOverlay = document.createElement('div');
         divOverlay.className = 'overlay';

     let spanOver = document.createElement('span');
     let spanOverText = document.createTextNode(`Game Over The choosen Word is " ${rondomValueValue} "`);
         spanOver.appendChild(spanOverText);
         spanOver.classList = 'popup';

         divOverlay.appendChild(spanOver);

         document.body.appendChild(divOverlay);

}

function winGame() {

    let divWin = document.createElement('div');
         divWin.className = 'win';

     let spanWin = document.createElement('span');
     let spanWinText = document.createTextNode(`you win you have a ${wrongAttempt} faute`);
         spanWin.appendChild(spanWinText);
         spanWin.classList = 'win_span';

         divWin.appendChild(spanWin);

         document.body.appendChild(divWin);

}

