let main = {

    variables: {
      turn: 'w',
      selectedpiece: '',
      highlighted: [],
      pieces: {
        w_king: {
          position: '5_1',
          img: './assets/WhiteKing.png',
          captured: false,
          moved: false,
          type: 'w_king'
          
        },
        w_queen: {
          position: '4_1',
          img: './assets/WhiteQueen.png',
          captured: false,
          moved: false,
          type: 'w_queen'
        },
        w_bishop1: {
          position: '3_1',
          img: './assets/WhiteBishop.png',
          captured: false,
          moved: false,
          type: 'w_bishop'
        },
        w_bishop2: {
          position: '6_1',
          img: './assets/WhiteBishop.png',
          captured: false,
          moved: false,
          type: 'w_bishop'
        },
        w_knight1: {
          position: '2_1',
          img: './assets/WhiteKnight.png',
          captured: false,
          moved: false,
          type: 'w_knight'
        },
        w_knight2: {
          position: '7_1',
          img: './assets/WhiteKnight.png',
          captured: false,
          moved: false,
          type: 'w_knight'
        },
        w_rook1: {
          position: '1_1',
          img: './assets/WhiteRook.png',
          captured: false,
          moved: false,
          type: 'w_rook'
        },
        w_rook2: {
          position: '8_1',
          img: './assets/WhiteRook.png',
          captured: false,
          moved: false,
          type: 'w_rook'
        },
        w_pawn1: {
          position: '1_2',
          img: './assets/WhitePawn.png',
          captured: false,
          type: 'w_pawn',
          moved: false
        },
        w_pawn2: {
          position: '2_2',
          img: './assets/WhitePawn.png',
          captured: false,
          type: 'w_pawn',
          moved: false
        },
        w_pawn3: {
          position: '3_2',
          img: './assets/WhitePawn.png',
          captured: false,
          type: 'w_pawn',
          moved: false
        },
        w_pawn4: {
          position: '4_2',
          img: './assets/WhitePawn.png',
          captured: false,
          type: 'w_pawn',
          moved: false
        },
        w_pawn5: {
          position: '5_2',
          img: './assets/WhitePawn.png',
          captured: false,
          type: 'w_pawn',
          moved: false
        },
        w_pawn6: {
          position: '6_2',
          img: './assets/WhitePawn.png',
          captured: false,
          type: 'w_pawn',
          moved: false
        },
        w_pawn7: {
          position: '7_2',
          img: './assets/WhitePawn.png',
          captured: false,
          type: 'w_pawn',
          moved: false
        },
        w_pawn8: {
          position: '8_2',
          img: './assets/WhitePawn.png',
          captured: false,
          type: 'w_pawn',
          moved: false
        },
  //black pieces
        b_king: {
          position: '5_8',
          img: './assets/BlackKing.png',
          captured: false,
          moved: false,
          type: 'b_king'
        },
        b_queen: {
          position: '4_8',
          img: './assets/BlackQueen.png',
          captured: false,
          moved: false,
          type: 'b_queen'
        },
        b_bishop1: {
          position: '3_8',
          img: './assets/BlackBishop.png',
          captured: false,
          moved: false,
          type: 'b_bishop'
        },
        b_bishop2: {
          position: '6_8',
          img: './assets/BlackBishop.png',
          captured: false,
          moved: false,
          type: 'b_bishop'
        },
        b_knight1: {
          position: '2_8',
          img: './assets/BlackKnight.png',
          captured: false,
          moved: false,
          type: 'b_knight'
        },
        b_knight2: {
          position: '7_8',
          img: './assets/BlackKnight.png',
          captured: false,
          moved: false,
          type: 'b_knight'
        },
        b_rook1: {
          position: '1_8',
          img: './assets/BlackRook.png',
          captured: false,
          moved: false,
          type: 'b_rook'
        },
        b_rook2: {
          position: '8_8',
          img: './assets/BlackRook.png',
          captured: false,
          moved: false,
          type: 'b_rook'
        },
        b_pawn1: {
          position: '1_7',
          img: './assets/BlackPawn.png',
          captured: false,
          type: 'b_pawn',
          moved: false
        },
        b_pawn2: {
          position: '2_7',
          img: './assets/BlackPawn.png',
          captured: false,
          type: 'b_pawn',
          moved: false
        },
        b_pawn3: {
          position: '3_7',
          img: './assets/BlackPawn.png',
          captured: false,
          type: 'b_pawn',
          moved: false
        },
        b_pawn4: {
          position: '4_7',
          img: './assets/BlackPawn.png',
          captured: false,
          type: 'b_pawn',
          moved: false
        },
        b_pawn5: {
          position: '5_7',
          img: './assets/BlackPawn.png',
          captured: false,
          type: 'b_pawn',
          moved: false
        },
        b_pawn6: {
          position: '6_7',
          img: './assets/BlackPawn.png',
          captured: false,
          type: 'b_pawn',
          moved: false
        },
        b_pawn7: {
          position: '7_7',
          img: './assets/BlackPawn.png',
          captured: false,
          type: 'b_pawn',
          moved: false
        },
        b_pawn8: {
          position: '8_7',
          img: './assets/BlackPawn.png',
          captured: false,
          type: 'b_pawn',
          moved: false
        }
      },
    cells: {
      // row1:{
        1_1: {
          occupied: {status : true, white : true, black : false },
          piece: 'w_rook1'
        },
        2_1: {
          occupied: {status : true, white : true, black : false },
          piece: 'w_knight1'
        },
        3_1: {
          occupied: {status : true, white : true, black : false },
          piece: 'w_bishop1'
        },
        4_1: {
          occupied: {status : true, white : true, black : false },
          piece: 'w_queen'
        },
        5_1: {
          occupied: {status : true, white : true, black : false },
          piece: 'w_king'
        },
        6_1: {
          occupied: {status : true, white : true, black : false },
          piece: 'w_bishop2'
        },
        7_1: {
          occupied: {status : true, white : true, black : false },
          piece: 'w_knight2'
        },
        8_1: {
          occupied: {status : true, white : true, black : false },
          piece: 'w_rook2'
        },
      // },
      // row2:{
        1_2: {
          occupied: {status : true, white : true, black : false },
          piece: 'w_pawn1'
        },
        2_2: {
          occupied: {status : true, white : true, black : false },
          piece: 'w_pawn2'
        },
        3_2: {
          occupied: {status : true, white : true, black : false },
          piece: 'w_pawn3'
        },
        4_2: {
          occupied: {status : true, white : true, black : false },
          piece: 'w_pawn4'
        },
        5_2: {
          occupied: {status : true, white : true, black : false },
          piece: 'w_pawn5'
        },
        6_2: {
          occupied: {status : true, white : true, black : false },
          piece: 'w_pawn6'
        },
        7_2: {
          occupied: {status : true, white : true, black : false },
          piece: 'w_pawn7'
        },
        8_2: {
          occupied: {status : true, white : true, black : false },
          piece: 'w_pawn8'
        },
      //   },
      // row3:{
        1_3: {
          occupied: {status : false, white : false, black : false },
          piece: 'none'
        },
        2_3: {
          occupied: {status : false, white : false, black : false },
          piece: 'none'
        },
        3_3: {
          occupied: {status : false, white : false, black : false },
          piece: 'none'
        },
        4_3: {
          occupied: {status : false, white : false, black : false },
          piece: 'none'
        },
        5_3: {
          occupied: {status : false, white : false, black : false },
          piece: 'none'
        },
        6_3: {
          occupied: {status : false, white : false, black : false },
          piece: 'none'
        },
        7_3: {
          occupied: {status : false, white : false, black : false },
          piece: 'none'
        },
        8_3: {
          occupied: {status : false, white : false, black : false },
          piece: 'none'
        },
      // },
      // row4:{
        1_4: {
          occupied: {status : false, white : false, black : false },
          piece: 'none'
        },
        2_4: {
          occupied: {status : false, white : false, black : false },
          piece: 'none'
        },
        3_4: {
          occupied: {status : false, white : false, black : false },
          piece: 'none'
        },
        4_4: {
          occupied: {status : false, white : false, black : false },
          piece: 'none'
        },
        5_4: {
          occupied: {status : false, white : false, black : false },
          piece: 'none'
        },
        6_4: {
          occupied: {status : false, white : false, black : false },
          piece: 'none'
        },
        7_4: {
          occupied: {status : false, white : false, black : false },
          piece: 'none'
        },
        8_4: {
          occupied: {status : false, white : false, black : false },
          piece: 'none'
        },
      // },
      // row5:{
        1_5: {
          occupied: {status : false, white : false, black : false },
          piece: 'none'
        },
        2_5: {
          occupied: {status : false, white : false, black : false },
          piece: 'none'
        },
        3_5: {
          occupied: {status : false, white : false, black : false },
          piece: 'none'
        },
        4_5: {
          occupied: {status : false, white : false, black : false },
          piece: 'none'
        },
        5_5: {
          occupied: {status : false, white : false, black : false },
          piece: 'none'
        },
        6_5: {
          occupied: {status : false, white : false, black : false },
          piece: 'none'
        },
        7_5: {
          occupied: {status : false, white : false, black : false },
          piece: 'none'
        },
        8_5: {
          occupied: {status : false, white : false, black : false },
          piece: 'none'
        },
      // },
      // row6:{
        1_6: {
          occupied: {status : false, white : false, black : false },
          piece: 'none'
        },
        2_6: {
          occupied: {status : false, white : false, black : false },
          piece: 'none'
        },
        3_6: {
          occupied: {status : false, white : false, black : false },
          piece: 'none'
        },
        4_6: {
          occupied: {status : false, white : false, black : false },
          piece: 'none'
        },
        5_6: {
          occupied: {status : false, white : false, black : false },
          piece: 'none'
        },
        6_6: {
          occupied: {status : false, white : false, black : false },
          piece: 'none'
        },
        7_6: {
          occupied: {status : false, white : false, black : false },
          piece: 'none'
        },
        8_6: {
          occupied: {status : false, white : false, black : false },
          piece: 'none'
        },
      //   },
      // row7:{
        1_7: {
          occupied: {status : true, white : false, black : true },
          piece: 'b_pawn1'
        },
        2_7: {
          occupied: {status : true, white : false, black : true },
          piece: 'b_pawn2'
        },
        3_7: {
          occupied: {status : true, white : false, black : true },
          piece: 'b_pawn3'
        },
        4_7: {
          occupied: {status : true, white : false, black : true },
          piece: 'b_pawn4'
        },
        5_7: {
          occupied: {status : true, white : false, black : true },
          piece: 'b_pawn5'
        },
        6_7: {
          occupied: {status : true, white : false, black : true },
          piece: 'b_pawn6'
        },
        7_7: {
          occupied: {status : true, white : false, black : true },
          piece: 'b_pawn7'
        },
        8_7: {
          occupied: {status : true, white : false, black : true },
          piece: 'b_pawn8'
        },
      // },
      // row8:{
        1_8: {
          occupied: {status : true, white : false, black : true },
          piece: 'b_rook1'
        },
        2_8: {
          occupied: {status : true, white : false, black : true },
          piece: 'b_knight1'
        },
        3_8: {
          occupied: {status : true, white : false, black : true },
          piece: 'b_bishop1'
        },
        4_8: {
          occupied: {status : true, white : false, black : true },
          piece: 'b_queen'
        },
        5_8: {
          occupied: {status : true, white : false, black : true },
          piece: 'b_king'
        },
        6_8: {
          occupied: {status : true, white : false, black : true },
          piece: 'b_bishop2'
        },
        7_8: {
          occupied: {status : true, white : false, black : true },
          piece: 'b_knight2'
        },
        8_8: {
          occupied: {status : true, white : false, black : true },
          piece: 'b_rook2'
        },
      },

    }
  }


$(document).ready(function(){
    console.log('document ready')

    const letters = ['A','B','C','D','E','F','G','H'];

    let k = 0;

    //append cell with id based on letter and number
    for( i=1 ; i < 9 ; i++){

        for( j=1 ; j < 9 ; j++ ){

            if( k % 2 === 0 ){
                $(`.row${j}`).append(` <div class="gameCell grey" id='${i}_${j}'></div>`)
            } else {
                $(`.row${j}`).append(` <div class="gameCell" id='${i}_${j}'></div>`)
    //To make sure the square colors are off-set
            } if (j !== 8 ){
                k++;
            }
        }
    }
    appendPeices( main );
});

function appendPeices( main ){

  const allPeices = Object.values( main.variables.pieces );

  allPeices.forEach( function ( piece ){
      const position = piece.position;
      $(`#${piece.position}`).append(`<img src="${piece.img}" class="piece">`);
  })
};

function showMoves( piece, square ) {
  console.log('showing moves for: ', piece, square);

  const row = Number(square.charAt(0))
  const col = Number(square.charAt(2));
  console.log(`column: ${col}, row: ${row}`)

  if ( piece === 'w_pawn' ){
    $(`#${square}`).attr( 'style', 'border: green thick solid;');
 
    const possibleMoves = [ `${row}_${col+1}`, `${row}_${col+2}`];
    console.log(`new col: ${col+1}, possible moves: ${possibleMoves}`)

    const obj = {

    }

    possibleMoves.forEach( function( move ){
      const obj = {
        newCell: move,
        oldCell: square,
        possibleMoves: possibleMoves,
        piece: piece
      }
      console.log( 'obj', obj );
      $(`#${move}`).attr('style', 'border: solid blue thick');
      $(`#${move}`).attr('onclick', `movePiece( ${obj} )`);

    })
  }
}

function movePiece( obj){
  // const StringOld = String(cell);
  // const rowOld = Number(StringOld.charAt(0))
  // const colOld = Number(StringOld.charAt(1));
  // const oldCell = `${rowOld}_${colOld}`;


  // const moveString = String(move);
  // const row = Number(moveString.charAt(0))
  // const col = Number(moveString.charAt(1));
  // const newCell = `${row}_${col}`;
  // console.log(`moved from ${oldCell} to ${newCell}`);

  // $(`#${oldCell}`).empty();
  // $(`#${newCell}`).append(`<img src="./assets/WhitePawn.png" class="piece">`);

console.log( obj );  

}

$('#gameBoard').on('click', function(){

    const square = event.target.parentElement.id
        
    if( square ){

      const allPeices = Object.values( main.variables.pieces );
        
      const selectedPiece = allPeices.filter( function( piece ){
        return piece.position == square;
      } );

      const pieceInfo = selectedPiece[0].type;
      console.log( `selected: ${pieceInfo}, at: ${square}` );

      showMoves( pieceInfo, square );
    }
})

// function showMoves( peice, square ){

//     const ChessPeice = peice;
//     const ChessSquare = square;
//     console.log('show moves: ', peice, square )

//     if ( peice === 'wPawn1' ){}
// }
  


//     //apending peices
//     for( i=0 ; i < 8 ; i++){

//         for( j=1 ; j < 9 ; j++ ){
            
//         //white peices
//             if( i==0 && j== 1 ){ $(`#${letters[i]}${j}`).append('<img class="whiteRook piece" id="wRook1" src="./assets/WhiteRook.png"></img>') }
//                 else if ( i==1 && j == 1){ $(`#${letters[i]}${j}`).append('<img class="knight piece" id="wKnight1" src="./assets/WhiteKnight.png"></img>') }
//                 else if ( i==2 && j == 1){ $(`#${letters[i]}${j}`).append('<img class="bishop piece" id="wBishop1" src="./assets/WhiteBishop.png"></img>') }
//                 else if ( i==3 && j == 1){ $(`#${letters[i]}${j}`).append('<img class="king piece" id="wKing" src="./assets/WhiteKing.png"></img>') }
//                 else if ( i==4 && j == 1){ $(`#${letters[i]}${j}`).append('<img class="queen piece" id="wQueen" src="./assets/WhiteQueen.png"></img>') }
//                 else if ( i==5 && j == 1){ $(`#${letters[i]}${j}`).append('<img class="bishop piece" id="wBishop2" src="./assets/WhiteBishop.png"></img>') }
//                 else if ( i==6 && j == 1){ $(`#${letters[i]}${j}`).append('<img class="knight piece" id="wKnight2"src="./assets/WhiteKnight.png"></img>') }
//                 else if ( i==7 && j == 1){ $(`#${letters[i]}${j}`).append('<img class="whiteRook piece" id="wRook2" src="./assets/WhiteRook.png"></img>') }

//         //white pawn
//             if( i==0 && j== 2 ){ $(`#${letters[i]}${j}`).append('<img class="pawn piece" id="wPawn1" src="./assets/WhitePawn.png"></img>') }
//                 else if ( i==1 && j == 2){ $(`#${letters[i]}${j}`).append('<img class="pawn piece" id="wPawn2" src="./assets/WhitePawn.png"></img>') }
//                 else if ( i==2 && j == 2){ $(`#${letters[i]}${j}`).append('<img class="pawn piece" id="wPawn3" src="./assets/WhitePawn.png"></img>') }
//                 else if ( i==3 && j == 2){ $(`#${letters[i]}${j}`).append('<img class="pawn piece" id="wPawn4" src="./assets/WhitePawn.png"></img>') }
//                 else if ( i==4 && j == 2){ $(`#${letters[i]}${j}`).append('<img class="pawn piece" id="wPawn5" src="./assets/WhitePawn.png"></img>') }
//                 else if ( i==5 && j == 2){ $(`#${letters[i]}${j}`).append('<img class="pawn piece" id="wPawn6" src="./assets/WhitePawn.png"></img>') }
//                 else if ( i==6 && j == 2){ $(`#${letters[i]}${j}`).append('<img class="pawn piece" id="wPawn7" src="./assets/WhitePawn.png"></img>') }
//                 else if ( i==7 && j == 2){ $(`#${letters[i]}${j}`).append('<img class="pawn piece" id="wPawn8" src="./assets/WhitePawn.png"></img>') }

//         //black peices
//             if( i==0 && j== 8 ){ $(`#${letters[i]}${j}`).append('<img class="Rook piece" id="bRook1" src="./assets/BlackRook.png"></img>') }
//                 else if ( i==1 && j == 8){ $(`#${letters[i]}${j}`).append('<img class="knight piece" id="bKnight1" src="./assets/BlackKnight.png"></img>') }
//                 else if ( i==2 && j == 8){ $(`#${letters[i]}${j}`).append('<img class="bishop piece" id="bBishop1" src="./assets/BlackBishop.png"></img>') }
//                 else if ( i==3 && j == 8){ $(`#${letters[i]}${j}`).append('<img class="king piece" id="bKing" src="./assets/BlackKing.png"></img>') }
//                 else if ( i==4 && j == 8){ $(`#${letters[i]}${j}`).append('<img class="queen piece" id="bQueen" src="./assets/BlackQueen.png"></img>') }
//                 else if ( i==5 && j == 8){ $(`#${letters[i]}${j}`).append('<img class="bishop piece" id="bBishop2" src="./assets/BlackBishop.png"></img>') }
//                 else if ( i==6 && j == 8){ $(`#${letters[i]}${j}`).append('<img class="knight piece" id="bKnight2" src="./assets/BlackKnight.png"></img>') }
//                 else if ( i==7 && j == 8){ $(`#${letters[i]}${j}`).append('<img class="whiteRook piece" id="bRook2" src="./assets/BlackRook.png"></img>') }
                
//                 //black pawns
//             if( i==0 && j== 7 ){ $(`#${letters[i]}${j}`).append('<img class="pawn piece" id="bPawn1"src="./assets/BlackPawn.png"></img>') }
//                 else if ( i==1 && j == 7){ $(`#${letters[i]}${j}`).append('<img class="pawn piece" id="bPawn2" src="./assets/BlackPawn.png"></img>') }
//                 else if ( i==2 && j == 7){ $(`#${letters[i]}${j}`).append('<img class="pawn piece" id="bPawn3" src="./assets/BlackPawn.png"></img>') }
//                 else if ( i==3 && j == 7){ $(`#${letters[i]}${j}`).append('<img class="pawn piece" id="bPawn4" src="./assets/BlackPawn.png"></img>') }
//                 else if ( i==4 && j == 7){ $(`#${letters[i]}${j}`).append('<img class="pawn piece" id="bPawn5" src="./assets/BlackPawn.png"></img>') }
//                 else if ( i==5 && j == 7){ $(`#${letters[i]}${j}`).append('<img class="pawn piece" id="bPawn6" src="./assets/BlackPawn.png"></img>') }
//                 else if ( i==6 && j == 7){ $(`#${letters[i]}${j}`).append('<img class="pawn piece" id="bPawn7" src="./assets/BlackPawn.png"></img>') }
//                 else if ( i==7 && j == 7){ $(`#${letters[i]}${j}`).append('<img class="pawn piece" id="bPawn8" src="./assets/BlackPawn.png"></img>') }
//         }
//     }
// });



// $('#gameBoard').on('click', function(){
//     const piece = event.target.id
//     const square = event.target.parentElement.id
        
//     if( square ){
//         console.log( `piece: ${[piece]}, square: ${square}`)
//         showMoves( piece, square );
//     }
    
// })

// function showMoves( peice, square ){

//     const ChessPeice = peice;
//     const ChessSquare = square;
//     console.log('show moves: ', peice, square )

//     if ( peice === 'wPawn1' ){}
// }
  

// var SQUARE_SIZE;
// const NUMBER_OF_ROWS = 8;
// const NUMBER_OF_COLS = 8;
// var NUMBER_OF_SQUARES;

// var xValue = 0;
// var yValue = 0;

// var canvas, ctx;

// window.onload
//     canvas = document.getElementById("gameBoard");
//     ctx = canvas.getContext("2d");
//     const h = canvas.height;

//     console.log('height', h )
//     SQUARE_SIZE = 400 / NUMBER_OF_ROWS;
//     NUMBER_OF_SQUARES = NUMBER_OF_ROWS * NUMBER_OF_COLS;

//     console.log("Size of each square = " + SQUARE_SIZE +"px");

//     drawBoard(canvas, NUMBER_OF_ROWS, NUMBER_OF_COLS);

//     //for mouse click listener 
//     canvas.addEventListener('mousedown', onDown, false );

//     function drawBoard(can, nRow, nCol) {
//         var ctx = canvas.getContext("2d");
//         var w = canvas.width;
//         var h = canvas.height;
    
//         nRow = nRow || 8;    // default number of rows
//         nCol = nCol || 8;    // default number of columns
    
//         w /= nCol;            // width of a block
//         h /= nRow;            // height of a block
    
//         for (var i = 0; i < nRow; ++i) {
//             for (var j = 0, col = nCol / 2; j < col; ++j) {
//                 ctx.rect(2 * j * w + (i % 2 ? 0 : w), i * h, w, h);
//             }
//         }
    
//         ctx.fill();
//     }

//     function onDown( event ) {
//         const cx = event.offsetX;
//         const cy = event.offsetY;
//         // console.log( `coordinates: x = ${cx}, y = ${cy}`)

//         const letters = ['A','B','C','D','E','F','G','H'];

//         let letter;
//         let number;

//         for ( i=0; i<8 ; i++){

//             // console.log(`min ${SQUARE_SIZE*i}, max ${SQUARE_SIZE*(i+1)}`)

//             if ( cx > SQUARE_SIZE*i && cx <= SQUARE_SIZE*(i+1) ){
//                 number = i+1
//                 // console.log( number );
//             } 
//             if ( cy > SQUARE_SIZE*i && cy <= SQUARE_SIZE*(i+1) ){

//                 letter = letters[i];
//             }
//         }
//         console.log(`square: ${letter}${number}` )

//     }

