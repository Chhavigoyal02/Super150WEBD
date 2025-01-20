

let canvas = document.querySelector('canvas');
let ctx=canvas.getContext('2d');

let gameOver= false;//wall se touch hone k baad ho jaye true;

let cellSize=50;//height and width for each cell
let boardHeight = 600;
let boardWidth = 1000;
let snakeCell=[[0,0]];//2d array to store starting points of snake ka rectangle
let direction='right';//default direction is right

let foodCells=generateFood();//we need two values ,i.e. x and y

let score=0;

// repeat
let intervalId = setInterval(function(){//setInterval ek id return krta h
    // pehle update ko call the draw ko call because like as we saw phle hum color me dip krre the (means update krre the ) then draw krre the
    update();
    draw();
},200);


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
        // draw winning text
        ctx.fillStyle='red';
        ctx.font = '50px monospace'
        ctx.fillText('GAME OVER !!',350,300)
        return;
    }

    // draw snake
    ctx.clearRect(0,0,boardWidth,boardHeight);//to rub the whole canvas
    for(let cell of snakeCell){
        ctx.fillStyle='red';
        ctx.fillRect(cell[0],cell[1],cellSize,cellSize);
        ctx.strokeStyle = 'orange';
        ctx.strokeRect(cell[0],cell[1],cellSize,cellSize);

    }

    // draw food
    ctx.fillStyle='green';
    ctx.fillRect(foodCells[0],foodCells[1],cellSize,cellSize);

    // draw score
    ctx.font = '24px monospace';
    ctx.fillText(`Score:${score}`,20,25);
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
        if(newheadX===boardWidth || eatItself(newheadX,newheadY)){gameOver=true}
    }
    else if(direction==='left'){
        newheadX=headX-cellSize;
        newheadY=headY;
        if(newheadX<0 || eatItself(newheadX,newheadY)){gameOver=true}
    }
    else if(direction==='up'){
        newheadX=headX;
        newheadY=headY-cellSize;
        if(newheadY<0 || eatItself(newheadX,newheadY)){gameOver=true}
    }
    else{
        newheadX=headX;
        newheadY=headY+cellSize;
        if(newheadY===boardHeight || eatItself(newheadX,newheadY)){gameOver=true}
    }

    snakeCell.push([newheadX,newheadY]);//naye coordinates ko array m last m push
    if(newheadX===foodCells[0] && newheadY===foodCells[1]){
        foodCells = generateFood();
        score+=1;
    }
    else{
        snakeCell.shift();//to remove the first data from the array
    }

}

function generateFood(){
    return [
        Math.round((Math.random()*(boardWidth-cellSize))/cellSize)*cellSize,
        Math.round((Math.random()*(boardHeight-cellSize))/cellSize)*cellSize,
    ]
}

function eatItself(newheadX,newheadY){
    for(let item of snakeCell){
        if(item[0] === newheadX && item[1] === newheadY) return true;
    }
    return false;
}

