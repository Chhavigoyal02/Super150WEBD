

let canvas = document.querySelector('canvas');
let ctx=canvas.getContext('2d');

let gameOver= false;//wall se touch hone k baad ho jaye true;

// repeat
let intervalId = setInterval(function(){//setInterval ek id return krta h
    // pehle update ko call the draw ko call because like as we saw phle hum color me dip krre the (means update krre the ) then draw krre the
    update();
    draw();
},100);


let cellSize=50;//height and width for each cell
let boardHeight = 600;
let boardWidth = 1000;
let snakeCell=[[0,0]];//2d array to store starting points of snake ka rectangle
let direction='right';//default direction is right

// keydown event whenever you press your up down key
document.addEventListener('keydown',function(e){
    if(e.key === 'ArrowDown'){direction='down';}
    else if(e.key === 'ArrowUp'){direction='up';}
    else if(e.key === 'ArrowLeft'){direction='left';}
    else{direction='right';}
})

// function to draw snake
function draw(){
    if(gameOver===true){
        clearInterval(intervalId);//accepts the ID
        return;
    }
    ctx.clearRect(0,0,boardWidth,boardHeight);//to rub the whole canvas
    for(let cell of snakeCell){
        ctx.fillStyle='red';
        ctx.fillRect(cell[0],cell[1],cellSize,cellSize);
        
    }
}


// function to update snake
function update(){
    let headX = snakeCell[snakeCell.length-1][0];
    let headY = snakeCell[snakeCell.length-1][1];

    // let newheadX=headX+cellSize;
    // let newheadY=headY;

    let newheadX;
    let newheadY;
    if(direction==='right'){
        newheadX=headX+cellSize;
        newheadY=headY;
        if(newheadX===boardWidth){gameOver=true}
    }
    else if(direction==='left'){
        newheadX=headX-cellSize;
        newheadY=headY;
        if(newheadX<0){gameOver=true}
    }
    else if(direction==='up'){
        newheadX=headX;
        newheadY=headY-cellSize;
        if(newheadY<0){gameOver=true}
    }
    else{
        newheadX=headX;
        newheadY=headY+cellSize;
        if(newheadY===boardHeight){gameOver=true}
    }

    snakeCell.push([newheadX,newheadY]);//naye coordinates ko array m last m push
    snakeCell.shift();//to remove the first data from the array

}


