/*
Tic Tac Toe Game Javascript code
*/
//array having each game cell as Jquery call
var cells = [$('#0'),$('#1'),$('#2'),$('#3'),$('#4'),$('#5'),$('#6'),$('#7'),$('#8')]
//function reset the game
function reset(){
        winner  =''
        cellsClicked =0;
        for (let index = 0; index < cells.length; index++) {
                cells[index].text('')             
}
}
var turn = 'X'
var start = ''
//function to reset the game once it load
function startGame(){
for (let index = 0; index < cells.length; index++) {
        cells[index].text('')   
        start = 'yes';  
}
}
var winner = '';
//function to check if player win
function checkForWinner(turn) {
        if((cells[0].text() == turn && cells[1].text() == turn && cells[2].text() == turn) ||(cells[3].text() == turn && cells[4].text() == turn && cells[5].text() == turn) || (cells[6].text() == turn && cells[7].text() == turn && cells[8].text() == turn)
            || (cells[0].text() == turn && cells[3].text() == turn && cells[6].text() == turn) ||(cells[1].text() == turn && cells[4].text() == turn && cells[7].text() == turn)
            || (cells[2].text() == turn && cells[5].text() == turn && cells[8].text() == turn) ||(cells[0].text() == turn && cells[4].text() == turn && cells[8].text() == turn)
            || (cells[2].text() == turn && cells[4].text() == turn && cells[6].text() == turn)){
            //assign the argument player to winner variable
           swal("the winner is "+turn);
            winner = turn;
            }
    }
var cellsClicked = 0
//fuction being called once the game cell or square clicked
function nextMove(id){
                if(winner == '' && cellsClicked == 9){
                swal("Draw !! Play again")    
                           }

                if(winner ==''){
                        if(id.innerText == ''){
                if(start == 'yes'){
                 id.innerText=turn;
                 cellsClicked++;
                 start = 'no'
                               }
                if(start =='no' && turn == 'X'){

                        id.innerText=turn;
                        cellsClicked++;
                        checkForWinner(turn)
                        turn ='O'
                       $('.message').text("it is "+turn+" turn") ;
                       return;
                        
                }
                else if(start =='no' && turn == 'O'){

                        id.innerText=turn;
                        cellsClicked++
                        checkForWinner(turn)
                        turn ='X'
                      $('.message').text("it is "+turn+" turn") ;
                      return;
                        
                }
        }
        } if(winner != '') {
                swal(winner+" already won!  click Reset to start again")
        }
}  