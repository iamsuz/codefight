//we are placing a queen an checking that no other queen will atack

var N=4;

// generating a board NxN

var generateBoard = (N) =>{
    var board = []
    for (var i = 0; i<N; i++) {
        board[i] = [];
        for(var j =0; j<N;j++){
            board[i][j] = 0;
        }
    }
    return board;
}

// checking if queen can attack other queen
function attack(board,row,col){
    // check the i th row and j th column
    for (var x=0;x<col;x++){
        if(board[row][x] === 1){
            return false;
        }
    }

    // Checks the ↖ direction 
    for(var i=row, j=col; i>=0 && j>=0; i--, j--){
        if (board[i][j] === 1) {
            return false;
        }
    }

    // Checks the ↙ direction 
    for(var i=row, j=col; j>=0 && i<N; i++, j--){
        if (board[i][j] === 1){
            return false;
        }
    }

  return true;
}

// placing a queen on the board
function queen(board,col){
    if(col === N){
        console.log({board}) //print solution
        return true;
    }
    for(var i=0;i<N;i++){
        if(attack(board,i,col)){
            board[i][col] = 1;
            queen(board, col+1);
            //if(recurseNQ(board, col+1)===true) //<-- you don't need this
            // return true;
            // console.log(board[i][col]);
            board[i][col] = 0;
        }
    }
    return false;
}


function main(){
    var board = generateBoard(N);
    queen(board,0);
    console.log(board);

}

console.log(main());