// $( "#start" ).click(function() {
//     $('.gameTable').css('display','');
//   });

var cells =  [$('#0'),$('#1'),$('#2'),$('#3'),$('#4'),$('#5'),$('#6'),$('#7'),$('#8')]

//if any cell clicked ==> change the cell text to (X or O)
function reset(){
        for (let index = 0; index < cells.length; index++) {
                cells[index].text('  ')    
                
}
}
var turn = 'X'

 var start = ''
function startGame(){
        // console.log($(cell[]).text())//= 'it is '+turn+'turn'
for (let index = 0; index < cells.length; index++) {
        cells[index].text(' ')   
        start = 'yes'; 
        // console.log(cells[0].text())
}
}
function withComputer(){
        
}


function nextMove(id){
                if(winner ==''){
                if(start == 'yes'){
                 id.innerText=turn;
                 start = 'no'

                               }
                if(start =='no' && turn == 'X'){

                        id.innerText=turn;
                        checkForWinner(turn)
                        turn ='O'
                       $('.message').text("it is "+turn+" turn") ;
                        
                }
                else if(start =='no' && turn == 'O'){

                        id.innerText=turn;
                        checkForWinner(turn)
                        turn ='X'
                      $('.message').text("it is "+turn+" turn") ;
                        
                }
        } else {
                alert(winner+" already won!  click to start again")
        }
}    


// playerOne = ""
// playerTwo = ""




// // $( "#0" ).click(function() {
// //         $( "#0" ).text() = Math.floor(Math.random() * (+max - +min)) + +min;
// //       });


//       var random =Math.floor(Math.random() * (+max - +min)) + +min;



//       var min='X'; 
//       var max='O';  
//       var random =Math.floor(Math.random() * (+max - +min)) + +min; 
//       document.write("Random Number Generated : " + random ); 

winner = ""
//check for winner if player playing with X symbol
function checkForWinner(turn) {
    //var cells =  [$('#0').text(),$('#1').text(),$('#2').text(),$('#3').text(),$('#4').text(),$('#5').text(),$('#6').text(),$('#7').text(),$('#8').text()]
    //             0 ,1, 2, 3, 4, 5, 6, 7, 8
    if((cells[0].text() == turn && cells[1].text() == turn && cells[2].text() == turn) ||(cells[3].text() == turn && cells[4].text() == turn && cells[5].text() == turn) || (cells[6].text() == turn && cells[7].text() == turn && cells[8].text() == turn)
        || (cells[0].text() == turn && cells[3].text() == turn && cells[6].text() == turn) ||(cells[1].text() == turn && cells[4].text() == turn && cells[7].text() == turn)
        || (cells[2].text() == turn && cells[5].text() == turn && cells[8].text() == turn) ||(cells[0].text() == turn && cells[4].text() == turn && cells[8].text() == turn)
        || (cells[2].text() == turn && cells[4].text() == turn && cells[6].text() == turn)){
        winner = turn; //assign the argument player to winner variable
        alert("the winner is "+turn) ;
        winner = turn

        }
}
// var checkForWinnerForO = function (player,params) {
//     var cells =  [$('#0').text(),$('#1').text(),$('#2').text(),$('#3').text(),$('#4').text(),$('#5').text(),$('#6').text(),$('#7').text(),$('#8').text()]
//     //             0 ,1, 2, 3, 4, 5, 6, 7, 8
//         if(cells[0] == "O" && cells[2] == "O" && cells[3] == "O" ||cells[4] == "O" && cells[5] == "O" && cells[6] == "O" || cells[7] == "O" && cells[8] == "O" && cells[9] == "O"
//         || cells[0] == "O" && cells[3] == "O" && cells[6] == "O" ||cells[1] == "O" && cells[4] == "O" && cells[7] == "O"
//         || cells[2] == "O" && cells[5] == "O" && cells[8] == "O" ||cells[2] == "O" && cells[5] == "O" && cells[8] == "O"
//         || cells[0] == "O" && cells[4] == "O" && cells[8] == "O" ||cells[0] == "O" && cells[4] == "O" && cells[8] == "O"
//         || cells[6] == "O" && cells[4] == "O" && cells[2] == "O" ){
//         winner = player; //assign the argument player to winner variable
//                 }
//         }