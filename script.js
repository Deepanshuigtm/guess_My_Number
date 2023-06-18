'use strict';
/*
document.querySelector('.message').textContent = ' Correct Number! 🥳'

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
let secretNumber = Math.trunc(Math.random()*20)+1; 
let score = 20;
let highscore =0;
document.querySelector('.again').addEventListener('click',function(){
    const nescore = 20;
    secretNumber = Math.trunc(Math.random()*20)+1; 
    document.querySelector('.score').textContent = nescore;
    document.querySelector('.message').textContent = 'Start guessing...'
    document.querySelector('.guess').value = null;
    document.querySelector('.number').textContent = '?'
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})
// document.querySelector('.number').textContent= secretNumber;
document.querySelector('.check').addEventListener('click',function(){
    let guess = document.querySelector('.guess').value;
    guess= Number(guess)
    if (score <=0){
        document.querySelector('.check').addEventListener('click',function(){
            document.querySelector('.check').textContent = 'Lost'  
            document.querySelector('.message').textContent = 'You Need to restart the game Stupid! 😤'
        })
    }
    // when there is no input
    if (!guess){
        document.querySelector('.message').textContent = '⚠️ No Number'
    // when guess is correct
    }else if (guess >20 || guess <1){
        document.querySelector('.message').textContent = '😁 Please Enter a Number from 1 to 20 '
    }else if (guess === secretNumber){
        document.querySelector('.message').textContent = ' Correct Number you win! 🥳 '
        let highscore = document.querySelector('.highscore').textContent
        document.querySelector('.number').textContent= secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        
        if (highscore<score){
            highscore=score;
            document.querySelector('.highscore').textContent = highscore;
        }
    // when guess is not correct
    }else if ( guess !== secretNumber){
        if (guess > secretNumber && (guess - secretNumber) > 3){
            if(score>0){
                document.querySelector('.message').textContent = '🥲 your guess Number is too high ⬆️ then sectret number'
                score --;
                document.querySelector('.score').textContent = score;
            }else{
                document.querySelector('.message').textContent = '😱 You lost the game ! You So Dump 👎'        
            }
        }else if (guess < secretNumber && (secretNumber - guess) >3){
            if(score>0){
                document.querySelector('.message').textContent = '🥲 your guess Number is too low ⬇️ then secret number'
                score --;
                document.querySelector('.score').textContent = score;
            }else{
                document.querySelector('.message').textContent = '😱 You lost the game ! You So Dump 👎'
            }
        }else if (guess < secretNumber && (secretNumber - guess) <=3){
            if(score>0){
                document.querySelector('.message').textContent = '🙂 your guess Number is low ⬇️ but (close) to secret number'
                score --;
                document.querySelector('.score').textContent = score;
            }else {
                document.querySelector('.message').textContent = '😱 You lost the game ! You So Dump 👎'
            }
        }else if (guess > secretNumber && (secretNumber - guess) <=3){
            if(score>0){
                document.querySelector('.message').textContent = '🙂 your guess Number is high ⬆️ but (close) to secret number'
                score --;
                document.querySelector('.score').textContent = score;
            }else{
                document.querySelector('.message').textContent = '😱 You lost the game ! You So Dump 👎'
            }
        }
    }
})
