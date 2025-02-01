const { Chess } = require("chess.js");
const game = new Chess();
console.log("Chess game started!");
now='w';
denote='e2';
place='e4';
done=false
makeMove(denote,place)
function makeMove(from,to){
    if (done){
        console.log('Game is already over.');
        return;
    }
    if (game.turn()==now){
        if (game.move({from,to})){
             //'Valid Move :',game.fen());
        }
        else {
            console.log('Invalid Move');
        }
    }
    else{
        console.log(`Oops ..!!It's not your's turn.`);
    }
    gameOver()
    now=(now=='w') ? 'b' :'w';
    
    }
function gameOver(){
    if (game.isGameOver()){
        console.log('Game Over!');
        if (game.isCheckmate()){
            console.log('Checkmate');
            console.log(now +' Won ..!!');
        }
        else if (game.isDraw()){
            console.log('Game is Draw ');
        }
        done=true;
    }
}
