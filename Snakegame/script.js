
let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];  //p   ;  : -
snake[0] = {
    x: 8*box,
    y: 8*box
}
let direction = "right";

function criarBG (){
    context.fillStyle= "lightblue";
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function criarCobrinha(){
    for(i=0; i < snake.length; i++){
        context.fillStyle = "black";
        context.fillRect(snake[i].x, snake[i].y, box, box);


    }


}
function iniciarJogo(){
    criarBG();
    criarCobrinha();

    let snakex = snake[0].x;
    let snakey = snake[0].y;

    if(direction == "right") snakex += box;
    if(direction == "left") snakex -= box;
}

let jogo = setInterval(iniciarJogo, 100);

