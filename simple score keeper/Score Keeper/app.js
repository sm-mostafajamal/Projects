const p1 = document.querySelector('#p1');
const p2 = document.querySelector('#p2');
const p1Score = document.querySelector('#p1Score');
const p2Score = document.querySelector('#p2Score');
const reset = document.querySelector('#reset');
const winScoreSelect = document.querySelector('#set')

let winScore = 5;
let gameNotOver = true
let p1_Score = 0;

p1.addEventListener('click', function(){
    if(gameNotOver){
        p1_Score += 1;
        if(p1_Score === winScore){
            // p1Score.classList.add('winner');
            // p2Score.classList.add('lose');
            p1Score.setAttribute('style','color:green');
            p2Score.setAttribute('style','color:red');

            gameNotOver = false;
        }
        p1Score.textContent = p1_Score;
    }
});

let p2_Score = 0;
p2.addEventListener('click', function(){
    if(gameNotOver){
        p2_Score += 1;
        if(p2_Score === winScore){
            // p2Score.classList.add('winner');
            // p1Score.classList.add('lose');
            p2Score.setAttribute('style','color:green');
            p1Score.setAttribute('style','color:red');

            gameNotOver = false;
        }
        p2Score.textContent = p2_Score;

    }
});

function resetBtn(){
    p1_Score = 0;
    p2_Score = 0;
    gameNotOver = true;
    p1Score.innerText = p1_Score;
    p2Score.innerText = p2_Score;
    p1Score.removeAttribute('style');
    p2Score.removeAttribute('style');



}
winScoreSelect.addEventListener('input', function(){
    winScore = parseInt(this.value);
    resetBtn();
 });


reset.addEventListener('click', resetBtn)



