const text = document.querySelectorAll('.text');
let turn = 'X';
let clickSound = new Audio("./sounds/click.mp3");
let winSound = new Audio("./sounds/win.mp3");
let imgGif = document.getElementById('img-gif');
let moves = document.getElementById('moves');
let reset = document.getElementById('reset');
let isgameover = false;
let toggle = document.querySelector('.toggle');
let container = document.querySelector('.container');
let nav = document.querySelector('nav');
let clutter = 0;

// func to change Turn
const changeTurn = ()=>{
    if(turn === 'X'){
        turn = '0';
    }else{
        turn = 'X';
    }
}

//func to check win
const checkWin = () =>{

    let boxText = document.getElementsByClassName('text');

    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

    wins.forEach((e)=>{
        if((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[2]].innerText === boxText[e[1]].innerText) && (boxText[e[0]].innerText !== "")){
            document.querySelector('#moves').innerText = boxText[e[0]].innerText + ' Won';
            isgameover = true;
            imgGif.style.width = '25vw';
            winSound.play();
            
        }
    })

}

//Game Logic

let boxes = document.getElementsByClassName('box');

Array.from(boxes).forEach((element)=>{
    let boxText = element.querySelector('.text');
    element.addEventListener('click',()=>{
        if(boxText.innerText === ''){
            boxText.innerText = turn;
            changeTurn();
            clickSound.play()
            moves.innerText = turn;
            checkWin();
            reset.style.backgroundColor = 'red';
            if(!isgameover){
                document.querySelector('#moves').innerText = "Turn for " + turn;
            }
            console.log(turn);
        }
    })
})


function resetBtn(){
    let text = document.querySelectorAll('.text');
    text.forEach((element)=>{
        element.innerText = "";
    });
    turn = 'X';
    moves.innerText ="Turn for "  + turn;
    isgameover = false;
    reset.style.backgroundColor = 'black';
    imgGif.style.width = '0';
}


function toggleBtn(){
    toggle.addEventListener('click', ()=>{
        if(clutter == 0){
            toggle.style.justifyContent = 'end';
            container.style.backgroundColor = '#b6b6b6'
            container.style.color = '#000'
            nav.style.color = '#fff'
            nav.style.backgroundColor = '#000'
            clutter = 1;
        }
        else{
            toggle.style.justifyContent = 'start';
            container.style.backgroundColor = '#fff'
            container.style.color = '#000'
            nav.style.color = '#000'
            nav.style.backgroundColor = '#ffa3a3'
            clutter = 0;
        }
    })
}

toggleBtn();