let main = {

    variables: {
      turn: 'w',
      selectedpiece: '',
      highlighted: [],
      pieces: {
        w_king: {
          position: '1_5',
          img: './assets/WhiteKing.png',
          captured: false,
          moved: false,
          type: 'w_king',
          piece: 'w_king'
          
        },
        w_queen: {
          position: '1_4',
          img: './assets/WhiteQueen.png',
          captured: false,
          moved: false,
          type: 'w_queen',
          piece: 'w_queen'
        },
        w_bishop1: {
          position: '1_3',
          img: './assets/WhiteBishop.png',
          captured: false,
          moved: false,
          type: 'w_bishop',
          piece: 'w_bishop1'
        },
        w_bishop2: {
          position: '1_6',
          img: './assets/WhiteBishop.png',
          captured: false,
          moved: false,
          type: 'w_bishop',
          piece: 'w_bishop2'
        },
        w_knight1: {
          position: '1_2',
          img: './assets/WhiteKnight.png',
          captured: false,
          moved: false,
          type: 'w_knight',
          piece: 'w_knight1'
        },
        w_knight2: {
          position: '1_7',
          img: './assets/WhiteKnight.png',
          captured: false,
          moved: false,
          type: 'w_knight',
          piece: 'w_knight2'
        },
        w_rook1: {
          position: '1_1',
          img: './assets/WhiteRook.png',
          captured: false,
          moved: false,
          type: 'w_rook',
          piece: 'w_rook1'
        },
        w_rook2: {
          position: '1_8',
          img: './assets/WhiteRook.png',
          captured: false,
          moved: false,
          type: 'w_rook',
          piece: 'w_rook2'
        },
        w_pawn1: {
          position: '2_1',
          img: './assets/WhitePawn.png',
          captured: false,
          type: 'w_pawn',
          moved: false,
          piece: 'w_pawn1',
        },
        w_pawn2: {
          position: '2_2',
          img: './assets/WhitePawn.png',
          captured: false,
          type: 'w_pawn',
          moved: false,
          piece: 'w_pawn2',
        },
        w_pawn3: {
          position: '2_3',
          img: './assets/WhitePawn.png',
          captured: false,
          type: 'w_pawn',
          moved: false,
          piece: 'w_pawn3',
        },
        w_pawn4: {
          position: '2_4',
          img: './assets/WhitePawn.png',
          captured: false,
          type: 'w_pawn',
          moved: false,
          piece: 'w_pawn4',
        },
        w_pawn5: {
          position: '2_5',
          img: './assets/WhitePawn.png',
          captured: false,
          type: 'w_pawn',
          moved: false,
          piece: 'w_pawn5',
        },
        w_pawn6: {
          position: '2_6',
          img: './assets/WhitePawn.png',
          captured: false,
          type: 'w_pawn',
          moved: false,
          piece: 'w_pawn6',
        },
        w_pawn7: {
          position: '2_7',
          img: './assets/WhitePawn.png',
          captured: false,
          type: 'w_pawn',
          moved: false,
          piece: 'w_pawn7',
        },
        w_pawn8: {
          position: '2_8',
          img: './assets/WhitePawn.png',
          captured: false,
          type: 'w_pawn',
          moved: false,
          piece: 'w_pawn8',
        },
  //black pieces
        b_king: {
          position: '8_5',
          img: './assets/BlackKing.png',
          captured: false,
          moved: false,
          type: 'b_king',
          piece: 'b_king',
        },
        b_queen: {
          position: '8_4',
          img: './assets/BlackQueen.png',
          captured: false,
          moved: false,
          type: 'b_queen',
          piece: 'b_queen',
        },
        b_bishop1: {
          position: '8_3',
          img: './assets/BlackBishop.png',
          captured: false,
          moved: false,
          type: 'b_bishop',
          piece: 'b_bishop1',
        },
        b_bishop2: {
          position: '8_6',
          img: './assets/BlackBishop.png',
          captured: false,
          moved: false,
          type: 'b_bishop',
          piece: 'b_bishop2',
        },
        b_knight1: {
          position: '8_2',
          img: './assets/BlackKnight.png',
          captured: false,
          moved: false,
          type: 'b_knight',
          piece: 'b_knight1',
        },
        b_knight2: {
          position: '8_7',
          img: './assets/BlackKnight.png',
          captured: false,
          moved: false,
          type: 'b_knight',
          piece: 'b_knight2',
        },
        b_rook1: {
          position: '8_1',
          img: './assets/BlackRook.png',
          captured: false,
          moved: false,
          type: 'b_rook',
          piece: 'b_rook1',
        },
        b_rook2: {
          position: '8_8',
          img: './assets/BlackRook.png',
          captured: false,
          moved: false,
          type: 'b_rook',
          piece: 'b_rook2',
        },
        b_pawn1: {
          position: '7_1',
          img: './assets/BlackPawn.png',
          captured: false,
          type: 'b_pawn',
          moved: false,
          piece: 'b_pawn1',
        },
        b_pawn2: {
          position: '7_2',
          img: './assets/BlackPawn.png',
          captured: false,
          type: 'b_pawn',
          moved: false,
          piece: 'b_pawn2',
        },
        b_pawn3: {
          position: '7_3',
          img: './assets/BlackPawn.png',
          captured: false,
          type: 'b_pawn',
          moved: false,
          piece: 'b_pawn3',
          
        },
        b_pawn4: {
          position: '7_4',
          img: './assets/BlackPawn.png',
          captured: false,
          type: 'b_pawn',
          moved: false,
          piece: 'b_pawn4',
        },
        b_pawn5: {
          position: '7_5',
          img: './assets/BlackPawn.png',
          captured: false,
          type: 'b_pawn',
          moved: false,
          piece: 'b_pawn5',
        },
        b_pawn6: {
          position: '7_6',
          img: './assets/BlackPawn.png',
          captured: false,
          type: 'b_pawn',
          moved: false,
          piece: 'b_pawn6',
        },
        b_pawn7: {
          position: '7_7',
          img: './assets/BlackPawn.png',
          captured: false,
          type: 'b_pawn',
          moved: false,
          piece: 'b_pawn7',
        },
        b_pawn8: {
          position: '7_8',
          img: './assets/BlackPawn.png',
          captured: false,
          type: 'b_pawn',
          moved: false,
          piece: 'b_pawn8',
        }
      },
      cells: {
          1_1: {
            occupied: {status : true, white : true, black : false },
            piece: 'w_rook1'
          },
          1_2: {
            occupied: {status : true, white : true, black : false },
            piece: 'w_knight1'
          },
          1_3: {
            occupied: {status : true, white : true, black : false },
            piece: 'w_bishop1'
          },
          1_4: {
            occupied: {status : true, white : true, black : false },
            piece: 'w_queen'
          },
          1_5: {
            occupied: {status : true, white : true, black : false },
            piece: 'w_king'
          },
          1_6: {
            occupied: {status : true, white : true, black : false },
            piece: 'w_bishop2'
          },
          1_7: {
            occupied: {status : true, white : true, black : false },
            piece: 'w_knight2'
          },
          1_8: {
            occupied: {status : true, white : true, black : false },
            piece: 'w_rook2'
          },

          2_1: {
            occupied: {status : true, white : true, black : false },
            piece: 'w_pawn1'
          },
          2_2: {
            occupied: {status : true, white : true, black : false },
            piece: 'w_pawn2'
          },
          2_3: {
            occupied: {status : true, white : true, black : false },
            piece: 'w_pawn3'
          },
          2_4: {
            occupied: {status : true, white : true, black : false },
            piece: 'w_pawn4'
          },
          2_5: {
            occupied: {status : true, white : true, black : false },
            piece: 'w_pawn5'
          },
          2_6: {
            occupied: {status : true, white : true, black : false },
            piece: 'w_pawn6'
          },
          2_7: {
            occupied: {status : true, white : true, black : false },
            piece: 'w_pawn7'
          },
          2_8: {
            occupied: {status : true, white : true, black : false },
            piece: 'w_pawn8'
          },
          3_1: {
            occupied: {status : false, white : false, black : false },
            piece: 'none'
          },
          3_2: {
            occupied: {status : false, white : false, black : false },
            piece: 'none'
          },
          3_3: {
            occupied: {status : false, white : false, black : false },
            piece: 'none'
          },
          3_4: {
            occupied: {status : false, white : false, black : false },
            piece: 'none'
          },
          3_5: {
            occupied: {status : false, white : false, black : false },
            piece: 'none'
          },
          3_6: {
            occupied: {status : false, white : false, black : false },
            piece: 'none'
          },
          3_7: {
            occupied: {status : false, white : false, black : false },
            piece: 'none'
          },
          3_8: {
            occupied: {status : false, white : false, black : false },
            piece: 'none'
          },
          4_1: {
            occupied: {status : false, white : false, black : false },
            piece: 'none'
          },
          4_2: {
            occupied: {status : false, white : false, black : false },
            piece: 'none'
          },
          4_3: {
            occupied: {status : false, white : false, black : false },
            piece: 'none'
          },
          4_4: {
            occupied: {status : false, white : false, black : false },
            piece: 'none'
          },
          4_5: {
            occupied: {status : false, white : false, black : false },
            piece: 'none'
          },
          4_6: {
            occupied: {status : false, white : false, black : false },
            piece: 'none'
          },
          4_7: {
            occupied: {status : false, white : false, black : false },
            piece: 'none'
          },
          4_8: {
            occupied: {status : false, white : false, black : false },
            piece: 'none'
          },
          5_1: {
            occupied: {status : false, white : false, black : false },
            piece: 'none'
          },
          5_2: {
            occupied: {status : false, white : false, black : false },
            piece: 'none'
          },
          5_3: {
            occupied: {status : false, white : false, black : false },
            piece: 'none'
          },
          5_4: {
            occupied: {status : false, white : false, black : false },
            piece: 'none'
          },
          5_5: {
            occupied: {status : false, white : false, black : false },
            piece: 'none'
          },
          5_6: {
            occupied: {status : false, white : false, black : false },
            piece: 'none'
          },
          5_7: {
            occupied: {status : false, white : false, black : false },
            piece: 'none'
          },
          5_8: {
            occupied: {status : false, white : false, black : false },
            piece: 'none'
          },
          6_1: {
            occupied: {status : false, white : false, black : false },
            piece: 'none'
          },
          6_2: {
            occupied: {status : false, white : false, black : false },
            piece: 'none'
          },
          6_3: {
            occupied: {status : false, white : false, black : false },
            piece: 'none'
          },
          6_4: {
            occupied: {status : false, white : false, black : false },
            piece: 'none'
          },
          6_5: {
            occupied: {status : false, white : false, black : false },
            piece: 'none'
          },
          6_6: {
            occupied: {status : false, white : false, black : false },
            piece: 'none'
          },
          6_7: {
            occupied: {status : false, white : false, black : false },
            piece: 'none'
          },
          6_8: {
            occupied: {status : false, white : false, black : false },
            piece: 'none'
          },
          7_1: {
            occupied: {status : true, white : false, black : true },
            piece: 'b_pawn1'
          },
          7_2: {
            occupied: {status : true, white : false, black : true },
            piece: 'b_pawn2'
          },
          7_3: {
            occupied: {status : true, white : false, black : true },
            piece: 'b_pawn3'
          },
          7_4: {
            occupied: {status : true, white : false, black : true },
            piece: 'b_pawn4'
          },
          7_5: {
            occupied: {status : true, white : false, black : true },
            piece: 'b_pawn5'
          },
          7_6: {
            occupied: {status : true, white : false, black : true },
            piece: 'b_pawn6'
          },
          7_7: {
            occupied: {status : true, white : false, black : true },
            piece: 'b_pawn7'
          },
          7_8: {
            occupied: {status : true, white : false, black : true },
            piece: 'b_pawn8'
          },
          8_1: {
            occupied: {status : true, white : false, black : true },
            piece: 'b_rook1'
          },
          8_2: {
            occupied: {status : true, white : false, black : true },
            piece: 'b_knight1'
          },
          8_3: {
            occupied: {status : true, white : false, black : true },
            piece: 'b_bishop1'
          },
          8_4: {
            occupied: {status : true, white : false, black : true },
            piece: 'b_queen'
          },
          8_5: {
            occupied: {status : true, white : false, black : true },
            piece: 'b_king'
          },
          8_6: {
            occupied: {status : true, white : false, black : true },
            piece: 'b_bishop2'
          },
          8_7: {
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

  let pieceChosen;
  let enemies = [];
  let openCell = [];
  let moveObj;

  let turn = true;

  function showTurn(){
    if ( turn === true ){
      $('#header').html("Turn: White");
      $('#header').attr("style", 'color: whitesmoke');
    } else {
      $('#header').html("Turn: black");
      $('#header').attr("style", 'color: black');

    }
  }


$(document).ready(function(){

    showTurn();

    function appendPieces(){
        const allPeices = Object.values( main.variables.pieces );

        allPeices.forEach( function ( piece ){
            const position = piece.position;
            $(`#${piece.position}`).append(`<img src="${piece.img}" class="${piece.type}, ${piece.piece}, piece">`);
    })
    };

    appendPieces();
});


$('#gameBoard').on('click', function(){

  const cell = event.target.parentElement.id

      
  if( cell ){

    const allPeices = Object.values( main.variables.pieces );
      
    const selectedPiece = allPeices.filter( function( piece ){
      return piece.position === cell;
    } );

    console.log('selected piece:', selectedPiece )

    const pieceType = selectedPiece[0].type;
    const piece = selectedPiece[0].piece
    const moved = selectedPiece[0].moved
    console.log( `selected: ${pieceType}, at: ${cell}` );

    if ( turn === true ){
      if( pieceType === 'w_pawn'){
        showWhitePawn( pieceType, piece, cell, moved );
      } else if (pieceType === 'w_rook') {
        showWhiteRook( pieceType, piece, cell );
      } else if (pieceType === 'w_knight') {
        showWhiteKnight( pieceType, piece, cell );
      } else if (pieceType === 'w_bishop') {
        showWhiteBishop( pieceType, piece, cell );
      } else if (pieceType === 'w_queen') {
        showWhiteQueen( pieceType, piece, cell );
      } else if (pieceType === 'w_king') {
        showWhiteKing( pieceType, piece, cell );
      }
    } else {
      if( pieceType === 'b_pawn'){
        showBlackPawn( pieceType, piece, cell, moved );
      } else if (pieceType === 'b_rook') {
        showBlackRook( pieceType, piece, cell );
      } else if (pieceType === 'b_knight') {
        showBlackKnight( pieceType, piece, cell );
      } else if (pieceType === 'b_bishop') {
        showBlackBishop( pieceType, piece, cell );
      } else if (pieceType === 'b_queen') {
        showBlackQueen( pieceType, piece, cell );
      } else if (pieceType === 'b_king') {
        showBlackKing( pieceType, piece, cell );
      }
    }
  }
});

//     if( pieceType === 'w_pawn'){
//       showWhitePawn( pieceType, piece, cell, moved );
//     } else if( pieceType === 'b_pawn'){
//       showBlackPawn( pieceType, piece, cell, moved );
//     }  else if (pieceType === 'w_knight') {
//       showWhiteKnight( pieceType, piece, cell );
//     } else if (pieceType === 'b_knight') {
//       showBlackKnight( pieceType, piece, cell );
//     } else if (pieceType === 'w_bishop') {
//       showWhiteBishop( pieceType, piece, cell );
//     } else if (pieceType === 'b_bishop') {
//       showBlackBishop( pieceType, piece, cell );
//     } else if (pieceType === 'w_rook') {
//       showWhiteRook( pieceType, piece, cell );
//     } else if (pieceType === 'b_rook') {
//       showBlackRook( pieceType, piece, cell );
//     } else if (pieceType === 'w_queen') {
//       showWhiteQueen( pieceType, piece, cell );
//     } else if (pieceType === 'b_queen') {
//       showBlackQueen( pieceType, piece, cell );
//     } else if (pieceType === 'w_king') {
//       showWhiteKing( pieceType, piece, cell );
//     } else if (pieceType === 'b_king') {
//       showBlackKing( pieceType, piece, cell );
//     }
//   }


function showWhitePawn( type, piece, cell, moved ){
  console.log('showing moves for WhitePawn: ', piece, cell);

  $(`#${pieceChosen}`).removeAttr( 'style', 'border: green  solid;');
  pieceChosen = cell;
  $(`#${pieceChosen}`).attr( 'style', 'border: green  solid;');

  enemies.forEach( function ( cell ){
    $(`#${cell}`).removeAttr( 'style', 'border: red  solid;');
    $(`#${cell}`).removeAttr('onclick');
  })
  enemies = [];

  openCell.forEach( function ( cell ){
    $(`#${cell}`).removeAttr( 'style', 'border: blue  solid;');
    $(`#${cell}`).removeAttr('onclick',);;
  })
  openCell = [];

  const row = Number(cell.charAt(0))
  const col = Number(cell.charAt(2));
  console.log(`column: ${col}, row: ${row}, moved: ${moved}`)

    let forwardMoves;
    let diagonalMoves;

    if( moved === false ){
      possibleMoves = [ `${row+1}_${col}`, `${row+1}_${col+1}`, `${row+1}_${col-1}`, `${row+1}_${col+2}` ];
      // checkingMoves = [ Number(`${row}${col+1}`), Number(`${row+1}${col+1}`), Number(`${row-1}${col+1}`), Number(`${row}${col+2}`) ];
      diagonalMoves = [Number(`${row+1}${col+1}`), Number(`${row+1}${col-1}`)]
      forwardMoves = [Number(`${row+1}${col}`), Number(`${row+2}${col}`)]

      console.log(` forward moves: ${forwardMoves}, diagonal moves: ${diagonalMoves}`)
    } else {
      possibleMoves = [ `${row+1}_${col}`, `${row+1}_${col+1}`, `${row+1}_${col-1}`];
      diagonalMoves = [Number(`${row+1}${col+1}`), Number(`${row+1}${col-1}`)]
      forwardMoves = [Number(`${row+1}${col}`),]

      console.log(` possible moves: ${possibleMoves}`)
    }

    diagonalMoves.forEach( function( move ){
      try{
        const string = String( move );
        const stringMove = `${string.charAt(0)}_${string.charAt(1)}`;
        
        const enemy = main.variables.cells[ move ].occupied.black;

        if ( enemy === true ){
          enemies.push( stringMove );
        }
      } catch( err ){
        console.log( 'invalid move');
      }
    })

    for( i=0 ; i<forwardMoves.length ; i++ ){
      try{
        const string = String( forwardMoves[i] );
        const stringMove = `${string.charAt(0)}_${string.charAt(1)}`;
        
        const occupied = main.variables.cells[ forwardMoves[i] ].occupied.status;

        if ( occupied === false ){
          openCell.push( stringMove );
        } else {
          console.log( 'piece in way');
          break;
        }
      } catch( err ){
        console.log( 'invalid move');
      }
    }

    console.log( 'enemies array', enemies, 'open cell array:', openCell );

    openCell.forEach( function ( newCell ){
      $(`#${newCell}`).attr( 'style', 'border: blue  solid;');
      $(`#${newCell}`).attr('onclick', `movePiece( ${newCell}, ${cell} )`);
    })
    enemies.forEach( function ( newCell ){
      $(`#${newCell}`).attr( 'style', 'border: red  solid;');
      $(`#${newCell}`).attr('onclick', `capturePiece( ${newCell}, ${cell} )`);
    })

    moveObj = {
      oldCell: cell,
      type: type,
      piece: piece,
      img: './assets/WhitePawn.png'
    }
}

function showBlackPawn( type, piece, cell, moved ){
  console.log('showing moves for BlackPawn: ', piece, cell);

  $(`#${pieceChosen}`).removeAttr( 'style', 'border: green  solid;');
  pieceChosen = cell;
  $(`#${pieceChosen}`).attr( 'style', 'border: green  solid;');

  enemies.forEach( function ( cell ){
    $(`#${cell}`).removeAttr( 'style', 'border: red  solid;');
    $(`#${cell}`).removeAttr('onclick');
  })
  enemies = [];

  openCell.forEach( function ( cell ){
    $(`#${cell}`).removeAttr( 'style', 'border: blue  solid;');
    $(`#${cell}`).removeAttr('onclick',);
  })
  openCell = [];

  const row = Number(cell.charAt(0))
  const col = Number(cell.charAt(2));
  console.log(`column: ${col}, row: ${row}, moved: ${moved}`)

    let forwardMoves;
    let diagonalMoves;

    if( moved === false ){
      possibleMoves = [ `${row-1}_${col}`, `${row-1}_${col+1}`, `${row-1}_${col-1}`, `${row-2}_${col}` ];
      // checkingMoves = [ Number(`${row}${col+1}`), Number(`${row+1}${col+1}`), Number(`${row-1}${col+1}`), Number(`${row}${col+2}`) ];
      diagonalMoves = [Number(`${row-1}${col+1}`), Number(`${row-1}${col-1}`)]
      forwardMoves = [Number(`${row-1}${col}`), Number(`${row-2}${col}`)]

      console.log(` forward moves: ${forwardMoves}, diagonal moves: ${diagonalMoves}`)
    } else {
      possibleMoves = [ `${row+1}_${col}`, `${row+1}_${col+1}`, `${row+1}_${col-1}`];
      diagonalMoves = [Number(`${row-1}${col+1}`), Number(`${row-1}${col-1}`)]
      forwardMoves = [Number(`${row-1}${col}`),]

      console.log(` possible moves: ${possibleMoves}`)
    }

    diagonalMoves.forEach( function( move ){
      try{
        const string = String( move );
        const stringMove = `${string.charAt(0)}_${string.charAt(1)}`;
        
        const enemy = main.variables.cells[ move ].occupied.white;

        if ( enemy === true ){
          enemies.push( stringMove );
        }
      } catch( err ){
        console.log( 'invalid move');
      }
    })

    for( i=0 ; i<forwardMoves.length ; i++ ){
      try{
        console.log( forwardMoves[i]);
        const string = String( forwardMoves[i] );
        const stringMove = `${string.charAt(0)}_${string.charAt(1)}`;
        
        const occupied = main.variables.cells[ forwardMoves[i] ].occupied.status;
        console.log(' occupied: ', occupied)

        if ( occupied === false ){
          openCell.push( stringMove );
        } else {
          console.log( 'piece in way');
          break;
        }
      } catch( err ){
        console.log( 'invalid move');
      }
    }

    console.log( 'enemies array', enemies, 'open cell array:', openCell );

    openCell.forEach( function ( newCell ){
      $(`#${newCell}`).attr( 'style', 'border: blue  solid;');
      $(`#${newCell}`).attr('onclick', `movePiece( ${newCell}, ${cell} )`);
    })
    enemies.forEach( function ( newCell ){
      $(`#${newCell}`).attr( 'style', 'border: red  solid;');
      $(`#${newCell}`).attr('onclick', `capturePiece( ${newCell}, ${cell} )`);
    })

    moveObj = {
      oldCell: cell,
      type: type,
      piece: piece,
      img: './assets/BlackPawn.png'
    }
}

function showWhiteKnight( type, piece, cell ){
  console.log('showing moves for White: ', piece, cell);

  $(`#${pieceChosen}`).removeAttr( 'style', 'border: green  solid;');
  pieceChosen = cell;
  $(`#${pieceChosen}`).attr( 'style', 'border: green  solid;');

  enemies.forEach( function ( cell ){
    $(`#${cell}`).removeAttr( 'style', 'border: red  solid;');
    $(`#${cell}`).removeAttr('onclick');
  })
  enemies = [];

  openCell.forEach( function ( cell ){
    $(`#${cell}`).removeAttr( 'style', 'border: blue  solid;');
    $(`#${cell}`).removeAttr('onclick',);
  })
  openCell = [];

  const row = Number(cell.charAt(0))
  const col = Number(cell.charAt(2));
  console.log(`column: ${col}, row: ${row}, `)

    let moves = [ Number(`${row-2}${col+1}`), Number(`${row-1}${col+2}`), Number(`${row+1}${col+2}`), Number(`${row+2}${col+1}`), Number(`${row+2}${col-1}`), Number(`${row+1}${col-2}`), Number(`${row-1}${col-2}`), Number(`${row-2}${col-1}`) ];
    
    moves.forEach( function ( move){
      try{
        const string = String( move );
        if ( string.length >= 3 ){
          console.log( 'move not on board');
        }
        const stringMove = `${string.charAt(0)}_${string.charAt(1)}`;
        const occupied = main.variables.cells[ move ].occupied.status;
        const enemy = main.variables.cells[ move ].occupied.black;

        if ( occupied === false ){
          openCell.push( stringMove );
        } else if( enemy === true){
          enemies.push( stringMove );
        } else {
          console.log( 'piece in way');
        }
      } catch( err ){
        console.log( 'invalid move', err );
      }
    })
    console.log( 'enemies array', enemies, 'open cell array:', openCell );

    openCell.forEach( function ( newCell ){
      $(`#${newCell}`).attr( 'style', 'border: blue  solid;');
      $(`#${newCell}`).attr('onclick', `movePiece( ${newCell}, ${cell} )`);
    })
    enemies.forEach( function ( newCell ){
      $(`#${newCell}`).attr( 'style', 'border: red  solid;');
      $(`#${newCell}`).attr('onclick', `capturePiece( ${newCell}, ${cell} )`);
    })

    moveObj = {
      oldCell: cell,
      type: type,
      piece: piece,
      img: './assets/WhiteKnight.png'
    }
}

function showBlackKnight( type, piece, cell ){
  console.log('showing moves for Black Knight: ', piece, cell);

  $(`#${pieceChosen}`).removeAttr( 'style', 'border: green  solid;');
  pieceChosen = cell;
  $(`#${pieceChosen}`).attr( 'style', 'border: green  solid;');

  enemies.forEach( function ( cell ){
    $(`#${cell}`).removeAttr( 'style', 'border: red  solid;');
    $(`#${cell}`).removeAttr('onclick');
  })
  enemies = [];

  openCell.forEach( function ( cell ){
    $(`#${cell}`).removeAttr( 'style', 'border: blue  solid;');
    $(`#${cell}`).removeAttr('onclick',);
  })
  openCell = [];

  const row = Number(cell.charAt(0))
  const col = Number(cell.charAt(2));
  console.log(`column: ${col}, row: ${row}, `)

    let moves = [ Number(`${row-2}${col+1}`), Number(`${row-1}${col+2}`), Number(`${row+1}${col+2}`), Number(`${row+2}${col+1}`), Number(`${row+2}${col-1}`), Number(`${row+1}${col-2}`), Number(`${row-1}${col-2}`), Number(`${row-2}${col-1}`) ];
    
    moves.forEach( function ( move){
      try{
        const string = String( move );
        if ( string.length >= 3 ){
          console.log( 'move not on board');
        }
        const stringMove = `${string.charAt(0)}_${string.charAt(1)}`;
        const occupied = main.variables.cells[ move ].occupied.status;
        const enemy = main.variables.cells[ move ].occupied.white;

        if ( occupied === false ){
          openCell.push( stringMove );
        } else if( enemy === true){
          enemies.push( stringMove );
        } else {
          console.log( 'piece in way');
        }
      } catch( err ){
        console.log( 'invalid move', err );
      }
    })
    console.log( 'enemies array', enemies, 'open cell array:', openCell );

    openCell.forEach( function ( newCell ){
      $(`#${newCell}`).attr( 'style', 'border: blue  solid;');
      $(`#${newCell}`).attr('onclick', `movePiece( ${newCell}, ${cell} )`);
    })
    enemies.forEach( function ( newCell ){
      $(`#${newCell}`).attr( 'style', 'border: red  solid;');
      $(`#${newCell}`).attr('onclick', `capturePiece( ${newCell}, ${cell} )`);
    })

    moveObj = {
      oldCell: cell,
      type: type,
      piece: piece,
      img: './assets/BlackKnight.png'
    }
}

function showWhiteBishop( type, piece, cell ){
  console.log('showing moves for White Bishop: ', piece, cell);

  $(`#${pieceChosen}`).removeAttr( 'style', 'border: green  solid;');
  pieceChosen = cell;
  $(`#${pieceChosen}`).attr( 'style', 'border: green  solid;');

  enemies.forEach( function ( cell ){
    $(`#${cell}`).removeAttr( 'style', 'border: red  solid;');
    $(`#${cell}`).removeAttr('onclick');
  })
  enemies = [];

  openCell.forEach( function ( cell ){
    $(`#${cell}`).removeAttr( 'style', 'border: blue  solid;');
    $(`#${cell}`).removeAttr('onclick',);
  })
  openCell = [];

  const row = Number(cell.charAt(0))
  const col = Number(cell.charAt(2));
  console.log(`column: ${col}, row: ${row}, `)

    let neMoves = [ Number(`${row-1}${col+1}`), Number(`${row-2}${col+2}`), Number(`${row-3}${col+3}`), Number(`${row-4}${col+4}`), Number(`${row-5}${col+5}`), Number(`${row-6}${col+6}`), Number(`${row-7}${col+7}`),  ]
    let seMoves = [ Number(`${row+1}${col+1}`), Number(`${row+2}${col+2}`), Number(`${row+3}${col+3}`), Number(`${row+4}${col+4}`), Number(`${row+5}${col+5}`), Number(`${row+6}${col+6}`), Number(`${row+7}${col+7}`),  ]
    let swMoves = [ Number(`${row-1}${col-1}`), Number(`${row-2}${col-2}`), Number(`${row-3}${col-3}`), Number(`${row-4}${col-4}`), Number(`${row-5}${col-5}`), Number(`${row-6}${col-6}`), Number(`${row-7}${col-7}`),  ]
    let nwMoves = [ Number(`${row+1}${col-1}`), Number(`${row+2}${col-2}`), Number(`${row+3}${col-3}`), Number(`${row+4}${col-4}`), Number(`${row+5}${col-5}`), Number(`${row+6}${col-6}`), Number(`${row+7}${col-7}`),  ]


    for( i=0 ; i<neMoves.length ; i++ ){
      try{
        console.log( neMoves[i], typeof(neMoves[i]) );
        const string = String( neMoves[i] );
        if ( string.length >= 3 ){
          console.log( 'move not on board');
          break;
        }
        const stringMove = `${string.charAt(0)}_${string.charAt(1)}`;

        console.log( 'string move', stringMove );
        
        const occupied = main.variables.cells[ neMoves[i] ].occupied.status;
        const enemy = main.variables.cells[ neMoves[i] ].occupied.black;

        console.log('loop', i,' occupied: ', occupied, 'enemeies', enemy );

        if ( occupied === false ){
          openCell.push( stringMove );
        } else if( enemy === true){
          enemies.push( stringMove );
          break;
        } else {
          console.log( 'piece in way');
          break;
        }
      } catch( err ){
        console.log( 'invalid move', err );
      }
    }
    for( i=0 ; i<seMoves.length ; i++ ){
      try{
        const string = String( seMoves[i] );
        if ( string.length >= 3 ){
          console.log( 'move not on board');
          break;
        }
        const stringMove = `${string.charAt(0)}_${string.charAt(1)}`;        
        const occupied = main.variables.cells[ seMoves[i] ].occupied.status;
        const enemy = main.variables.cells[ seMoves[i] ].occupied.black;

        console.log('loop', i,' occupied: ', occupied, 'enemeies', enemy );

        if ( occupied === false ){
          openCell.push( stringMove );
        } else if( enemy === true){
          enemies.push( stringMove );
          break;
        } else {
          console.log( 'piece in way');
          break;
        }
      } catch( err ){
        console.log( 'invalid move', err );
      }
    }
    for( i=0 ; i<swMoves.length ; i++ ){
      try{
        const string = String( swMoves[i] );
        if ( string.length >= 3 ){
          console.log( 'move not on board');
          break;
        }
        const stringMove = `${string.charAt(0)}_${string.charAt(1)}`;        
        const occupied = main.variables.cells[ swMoves[i] ].occupied.status;
        const enemy = main.variables.cells[ swMoves[i] ].occupied.black;

        console.log('loop', i,' occupied: ', occupied, 'enemeies', enemy );

        if ( occupied === false ){
          openCell.push( stringMove );
        } else if( enemy === true){
          enemies.push( stringMove );
          break;
        } else {
          console.log( 'piece in way');
          break;
        }
      } catch( err ){
        console.log( 'invalid move', err );
      }
    }
    for( i=0 ; i<nwMoves.length ; i++ ){
      try{
        const string = String( nwMoves[i] );
        if ( string.length >= 3 ){
          console.log( 'move not on board');
          break;
        }
        const stringMove = `${string.charAt(0)}_${string.charAt(1)}`;        
        const occupied = main.variables.cells[ nwMoves[i] ].occupied.status;
        const enemy = main.variables.cells[ nwMoves[i] ].occupied.black;

        console.log('loop', i,' occupied: ', occupied, 'enemeies', enemy );

        if ( occupied === false ){
          openCell.push( stringMove );
        } else if( enemy === true){
          enemies.push( stringMove );
          break;
        } else {
          console.log( 'piece in way');
          break;
        }
      } catch( err ){
        console.log( 'invalid move', err );
      }
    }
    console.log( 'enemies array', enemies, 'open cell array:', openCell );

    openCell.forEach( function ( newCell ){
      $(`#${newCell}`).attr( 'style', 'border: blue  solid;');
      $(`#${newCell}`).attr('onclick', `movePiece( ${newCell}, ${cell} )`);
    })
    enemies.forEach( function ( newCell ){
      $(`#${newCell}`).attr( 'style', 'border: red  solid;');
      $(`#${newCell}`).attr('onclick', `capturePiece( ${newCell}, ${cell} )`);
    })

    moveObj = {
      oldCell: cell,
      type: type,
      piece: piece,
      img: './assets/WhiteBishop.png'
    }
}

function showBlackBishop( type, piece, cell ){
  console.log('showing moves for Black Bishop: ', piece, cell);

  $(`#${pieceChosen}`).removeAttr( 'style', 'border: green  solid;');
  pieceChosen = cell;
  $(`#${pieceChosen}`).attr( 'style', 'border: green  solid;');

  enemies.forEach( function ( cell ){
    $(`#${cell}`).removeAttr( 'style', 'border: red  solid;');
    $(`#${cell}`).removeAttr('onclick');
  })
  enemies = [];

  openCell.forEach( function ( cell ){
    $(`#${cell}`).removeAttr( 'style', 'border: blue  solid;');
    $(`#${cell}`).removeAttr('onclick',);
  })
  openCell = [];

  const row = Number(cell.charAt(0))
  const col = Number(cell.charAt(2));
  console.log(`column: ${col}, row: ${row}, `)

    let neMoves;
    let seMoves;
    let swMoves;
    let nwMoves;

    neMoves = [ Number(`${row-1}${col+1}`), Number(`${row-2}${col+2}`), Number(`${row-3}${col+3}`), Number(`${row-4}${col+4}`), Number(`${row-5}${col+5}`), Number(`${row-6}${col+6}`), Number(`${row-7}${col+7}`),  ]
    seMoves = [ Number(`${row+1}${col+1}`), Number(`${row+2}${col+2}`), Number(`${row+3}${col+3}`), Number(`${row+4}${col+4}`), Number(`${row+5}${col+5}`), Number(`${row+6}${col+6}`), Number(`${row+7}${col+7}`),  ]
    swMoves = [ Number(`${row-1}${col-1}`), Number(`${row-2}${col-2}`), Number(`${row-3}${col-3}`), Number(`${row-4}${col-4}`), Number(`${row-5}${col-5}`), Number(`${row-6}${col-6}`), Number(`${row-7}${col-7}`),  ]
    nwMoves = [ Number(`${row+1}${col-1}`), Number(`${row+2}${col-2}`), Number(`${row+3}${col-3}`), Number(`${row+4}${col-4}`), Number(`${row+5}${col-5}`), Number(`${row+6}${col-6}`), Number(`${row+7}${col-7}`),  ]

    for( i=0 ; i<neMoves.length ; i++ ){
      try{
        console.log( neMoves[i], typeof(neMoves[i]) );
        const string = String( neMoves[i] );
        if ( string.length >= 3 ){
          console.log( 'move not on board');
          break;
        }
        const stringMove = `${string.charAt(0)}_${string.charAt(1)}`;

        console.log( 'string move', stringMove );
        
        const occupied = main.variables.cells[ neMoves[i] ].occupied.status;
        const enemy = main.variables.cells[ neMoves[i] ].occupied.white;

        console.log('loop', i,' occupied: ', occupied, 'enemeies', enemy );

        if ( occupied === false ){
          openCell.push( stringMove );
        } else if( enemy === true){
          enemies.push( stringMove );
          break;
        } else {
          console.log( 'piece in way');
          break;
        }
      } catch( err ){
        console.log( 'invalid move', err );
      }
    }
    for( i=0 ; i<seMoves.length ; i++ ){
      try{
        const string = String( seMoves[i] );
        if ( string.length >= 3 ){
          console.log( 'move not on board');
          break;
        }
        const stringMove = `${string.charAt(0)}_${string.charAt(1)}`;        
        const occupied = main.variables.cells[ seMoves[i] ].occupied.status;
        const enemy = main.variables.cells[ seMoves[i] ].occupied.white;

        console.log('loop', i,' occupied: ', occupied, 'enemeies', enemy );

        if ( occupied === false ){
          openCell.push( stringMove );
        } else if( enemy === true){
          enemies.push( stringMove );
          break;
        } else {
          console.log( 'piece in way');
          break;
        }
      } catch( err ){
        console.log( 'invalid move', err );
      }
    }
    for( i=0 ; i<swMoves.length ; i++ ){
      try{
        const string = String( swMoves[i] );
        if ( string.length >= 3 ){
          console.log( 'move not on board');
          break;
        }
        const stringMove = `${string.charAt(0)}_${string.charAt(1)}`;        
        const occupied = main.variables.cells[ swMoves[i] ].occupied.status;
        const enemy = main.variables.cells[ swMoves[i] ].occupied.white;

        console.log('loop', i,' occupied: ', occupied, 'enemeies', enemy );

        if ( occupied === false ){
          openCell.push( stringMove );
        } else if( enemy === true){
          enemies.push( stringMove );
          break;
        } else {
          console.log( 'piece in way');
          break;
        }
      } catch( err ){
        console.log( 'invalid move', err );
      }
    }
    for( i=0 ; i<nwMoves.length ; i++ ){
      try{
        const string = String( nwMoves[i] );
        if ( string.length >= 3 ){
          console.log( 'move not on board');
          break;
        }
        const stringMove = `${string.charAt(0)}_${string.charAt(1)}`;        
        const occupied = main.variables.cells[ nwMoves[i] ].occupied.status;
        const enemy = main.variables.cells[ nwMoves[i] ].occupied.white;

        console.log('loop', i,' occupied: ', occupied, 'enemeies', enemy );

        if ( occupied === false ){
          openCell.push( stringMove );
        } else if( enemy === true){
          enemies.push( stringMove );
          break;
        } else {
          console.log( 'piece in way');
          break;
        }
      } catch( err ){
        console.log( 'invalid move', err );
      }
    }
    console.log( 'enemies array', enemies, 'open cell array:', openCell );

    openCell.forEach( function ( newCell ){
      $(`#${newCell}`).attr( 'style', 'border: blue  solid;');
      $(`#${newCell}`).attr('onclick', `movePiece( ${newCell}, ${cell} )`);
    })
    enemies.forEach( function ( newCell ){
      $(`#${newCell}`).attr( 'style', 'border: red  solid;');
      $(`#${newCell}`).attr('onclick', `capturePiece( ${newCell}, ${cell} )`);
    })

    moveObj = {
      oldCell: cell,
      type: type,
      piece: piece,
      img: './assets/BlackBishop.png'
    }
}

function showWhiteRook( type, piece, cell ){
  console.log('showing moves for White Rook: ', piece, cell);

  $(`#${pieceChosen}`).removeAttr( 'style', 'border: green  solid;');
  pieceChosen = cell;
  $(`#${pieceChosen}`).attr( 'style', 'border: green  solid;');

  enemies.forEach( function ( cell ){
    $(`#${cell}`).removeAttr( 'style', 'border: red  solid;');
    $(`#${cell}`).removeAttr('onclick');
  })
  enemies = [];

  openCell.forEach( function ( cell ){
    $(`#${cell}`).removeAttr( 'style', 'border: blue  solid;');
    $(`#${cell}`).removeAttr('onclick',);
  })
  openCell = [];

  const row = Number(cell.charAt(0))
  const col = Number(cell.charAt(2));
  console.log(`column: ${col}, row: ${row}, `)

    let northMoves = [ Number(`${row-1}${col}`), Number(`${row-2}${col}`), Number(`${row-3}${col}`), Number(`${row-4}${col}`), Number(`${row-5}${col}`), Number(`${row-6}${col}`), Number(`${row-7}${col}`),  ]
    let eastMoves  = [ Number(`${row}${col+1}`), Number(`${row}${col+2}`), Number(`${row}${col+3}`), Number(`${row}${col+4}`), Number(`${row}${col+5}`), Number(`${row}${col+6}`), Number(`${row}${col+7}`),  ]
    let southMoves = [ Number(`${row+1}${col}`), Number(`${row+2}${col}`), Number(`${row+3}${col}`), Number(`${row+4}${col}`), Number(`${row+5}${col}`), Number(`${row+6}${col}`), Number(`${row+7}${col}`),  ]
    let westMoves  = [ Number(`${row}${col-1}`), Number(`${row}${col-2}`), Number(`${row}${col-3}`), Number(`${row}${col-4}`), Number(`${row}${col-5}`), Number(`${row}${col-6}`), Number(`${row}${col-7}`),  ]



    for( i=0 ; i<northMoves.length ; i++ ){
      try{
        console.log( northMoves[i], typeof(northMoves[i]) );
        const string = String( northMoves[i] );
        if ( string.length >= 3 ){
          console.log( 'move not on board');
          break;
        }
        const stringMove = `${string.charAt(0)}_${string.charAt(1)}`;

        console.log( 'string move', stringMove );
        
        const occupied = main.variables.cells[ northMoves[i] ].occupied.status;
        const enemy = main.variables.cells[ northMoves[i] ].occupied.black;

        console.log('loop', i,' occupied: ', occupied, 'enemeies', enemy );

        if ( occupied === false ){
          openCell.push( stringMove );
        } else if( enemy === true){
          enemies.push( stringMove );
          break;
        } else {
          console.log( 'piece in way');
          break;
        }
      } catch( err ){
        console.log( 'invalid move', err );
      }
    }
    for( i=0 ; i<eastMoves.length ; i++ ){
      try{
        const string = String( eastMoves[i] );
        if ( string.length >= 3 ){
          console.log( 'move not on board');
          break;
        }
        const stringMove = `${string.charAt(0)}_${string.charAt(1)}`;        
        const occupied = main.variables.cells[ eastMoves[i] ].occupied.status;
        const enemy = main.variables.cells[ eastMoves[i] ].occupied.black;

        console.log('loop', i,' occupied: ', occupied, 'enemeies', enemy );

        if ( occupied === false ){
          openCell.push( stringMove );
        } else if( enemy === true){
          enemies.push( stringMove );
          break;
        } else {
          console.log( 'piece in way');
          break;
        }
      } catch( err ){
        console.log( 'invalid move', err );
      }
    }
    for( i=0 ; i<southMoves.length ; i++ ){
      try{
        const string = String( southMoves[i] );
        if ( string.length >= 3 ){
          console.log( 'move not on board');
          break;
        }
        const stringMove = `${string.charAt(0)}_${string.charAt(1)}`;        
        const occupied = main.variables.cells[ southMoves[i] ].occupied.status;
        const enemy = main.variables.cells[ southMoves[i] ].occupied.black;

        console.log('loop', i,' occupied: ', occupied, 'enemeies', enemy );

        if ( occupied === false ){
          openCell.push( stringMove );
        } else if( enemy === true){
          enemies.push( stringMove );
          break;
        } else {
          console.log( 'piece in way');
          break;
        }
      } catch( err ){
        console.log( 'invalid move', err );
      }
    }
    for( i=0 ; i<westMoves.length ; i++ ){
      try{
        const string = String( westMoves[i] );
        if ( string.length >= 3 ){
          console.log( 'move not on board');
          break;
        }
        const stringMove = `${string.charAt(0)}_${string.charAt(1)}`;        
        const occupied = main.variables.cells[ westMoves[i] ].occupied.status;
        const enemy = main.variables.cells[ westMoves[i] ].occupied.black;

        console.log('loop', i,' occupied: ', occupied, 'enemeies', enemy );

        if ( occupied === false ){
          openCell.push( stringMove );
        } else if( enemy === true){
          enemies.push( stringMove );
          break;
        } else {
          console.log( 'piece in way');
          break;
        }
      } catch( err ){
        console.log( 'invalid move', err );
      }
    }
    console.log( 'enemies array', enemies, 'open cell array:', openCell );

    openCell.forEach( function ( newCell ){
      $(`#${newCell}`).attr( 'style', 'border: blue  solid;');
      $(`#${newCell}`).attr('onclick', `movePiece( ${newCell}, ${cell} )`);
    })
    enemies.forEach( function ( newCell ){
      $(`#${newCell}`).attr( 'style', 'border: red  solid;');
      $(`#${newCell}`).attr('onclick', `capturePiece( ${newCell}, ${cell} )`);
    })

    moveObj = {
      oldCell: cell,
      type: type,
      piece: piece,
      img: './assets/WhiteRook.png'
    }
}

function showBlackRook( type, piece, cell ){
  console.log('showing moves for White Black: ', piece, cell);

  $(`#${pieceChosen}`).removeAttr( 'style', 'border: green  solid;');
  pieceChosen = cell;
  $(`#${pieceChosen}`).attr( 'style', 'border: green  solid;');

  enemies.forEach( function ( cell ){
    $(`#${cell}`).removeAttr( 'style', 'border: red  solid;');
    $(`#${cell}`).removeAttr('onclick');
  })
  enemies = [];

  openCell.forEach( function ( cell ){
    $(`#${cell}`).removeAttr( 'style', 'border: blue  solid;');
    $(`#${cell}`).removeAttr('onclick',);
  })
  openCell = [];

  const row = Number(cell.charAt(0))
  const col = Number(cell.charAt(2));
  console.log(`column: ${col}, row: ${row}, `)

    let northMoves = [ Number(`${row-1}${col}`), Number(`${row-2}${col}`), Number(`${row-3}${col}`), Number(`${row-4}${col}`), Number(`${row-5}${col}`), Number(`${row-6}${col}`), Number(`${row-7}${col}`),  ]
    let eastMoves  = [ Number(`${row}${col+1}`), Number(`${row}${col+2}`), Number(`${row}${col+3}`), Number(`${row}${col+4}`), Number(`${row}${col+5}`), Number(`${row}${col+6}`), Number(`${row}${col+7}`),  ]
    let southMoves = [ Number(`${row+1}${col}`), Number(`${row+2}${col}`), Number(`${row+3}${col}`), Number(`${row+4}${col}`), Number(`${row+5}${col}`), Number(`${row+6}${col}`), Number(`${row+7}${col}`),  ]
    let westMoves  = [ Number(`${row}${col-1}`), Number(`${row}${col-2}`), Number(`${row}${col-3}`), Number(`${row}${col-4}`), Number(`${row}${col-5}`), Number(`${row}${col-6}`), Number(`${row}${col-7}`),  ]



    for( i=0 ; i<northMoves.length ; i++ ){
      try{
        console.log( northMoves[i], typeof(northMoves[i]) );
        const string = String( northMoves[i] );
        if ( string.length >= 3 ){
          console.log( 'move not on board');
          break;
        }
        const stringMove = `${string.charAt(0)}_${string.charAt(1)}`;

        console.log( 'string move', stringMove );
        
        const occupied = main.variables.cells[ northMoves[i] ].occupied.status;
        const enemy = main.variables.cells[ northMoves[i] ].occupied.white;

        console.log('loop', i,' occupied: ', occupied, 'enemeies', enemy );

        if ( occupied === false ){
          openCell.push( stringMove );
        } else if( enemy === true){
          enemies.push( stringMove );
          break;
        } else {
          console.log( 'piece in way');
          break;
        }
      } catch( err ){
        console.log( 'invalid move', err );
      }
    }
    for( i=0 ; i<eastMoves.length ; i++ ){
      try{
        const string = String( eastMoves[i] );
        if ( string.length >= 3 ){
          console.log( 'move not on board');
          break;
        }
        const stringMove = `${string.charAt(0)}_${string.charAt(1)}`;        
        const occupied = main.variables.cells[ eastMoves[i] ].occupied.status;
        const enemy = main.variables.cells[ eastMoves[i] ].occupied.white;

        console.log('loop', i,' occupied: ', occupied, 'enemeies', enemy );

        if ( occupied === false ){
          openCell.push( stringMove );
        } else if( enemy === true){
          enemies.push( stringMove );
          break;
        } else {
          console.log( 'piece in way');
          break;
        }
      } catch( err ){
        console.log( 'invalid move', err );
      }
    }
    for( i=0 ; i<southMoves.length ; i++ ){
      try{
        const string = String( southMoves[i] );
        if ( string.length >= 3 ){
          console.log( 'move not on board');
          break;
        }
        const stringMove = `${string.charAt(0)}_${string.charAt(1)}`;        
        const occupied = main.variables.cells[ southMoves[i] ].occupied.status;
        const enemy = main.variables.cells[ southMoves[i] ].occupied.white;

        console.log('loop', i,' occupied: ', occupied, 'enemeies', enemy );

        if ( occupied === false ){
          openCell.push( stringMove );
        } else if( enemy === true){
          enemies.push( stringMove );
          break;
        } else {
          console.log( 'piece in way');
          break;
        }
      } catch( err ){
        console.log( 'invalid move', err );
      }
    }
    for( i=0 ; i<westMoves.length ; i++ ){
      try{
        const string = String( westMoves[i] );
        if ( string.length >= 3 ){
          console.log( 'move not on board');
          break;
        }
        const stringMove = `${string.charAt(0)}_${string.charAt(1)}`;        
        const occupied = main.variables.cells[ westMoves[i] ].occupied.status;
        const enemy = main.variables.cells[ westMoves[i] ].occupied.white;

        console.log('loop', i,' occupied: ', occupied, 'enemeies', enemy );

        if ( occupied === false ){
          openCell.push( stringMove );
        } else if( enemy === true){
          enemies.push( stringMove );
          break;
        } else {
          console.log( 'piece in way');
          break;
        }
      } catch( err ){
        console.log( 'invalid move', err );
      }
    }
    console.log( 'enemies array', enemies, 'open cell array:', openCell );

    openCell.forEach( function ( newCell ){
      $(`#${newCell}`).attr( 'style', 'border: blue  solid;');
      $(`#${newCell}`).attr('onclick', `movePiece( ${newCell}, ${cell} )`);
    })
    enemies.forEach( function ( newCell ){
      $(`#${newCell}`).attr( 'style', 'border: red  solid;');
      $(`#${newCell}`).attr('onclick', `capturePiece( ${newCell}, ${cell} )`);
    })

    moveObj = {
      oldCell: cell,
      type: type,
      piece: piece,
      img: './assets/BlackRook.png'
    }
}

function showWhiteQueen( type, piece, cell ){
  console.log('showing moves for White Queen: ', piece, cell);

  $(`#${pieceChosen}`).removeAttr( 'style', 'border: green  solid;');
  pieceChosen = cell;
  $(`#${pieceChosen}`).attr( 'style', 'border: green  solid;');

  enemies.forEach( function ( cell ){
    $(`#${cell}`).removeAttr( 'style', 'border: red  solid;');
    $(`#${cell}`).removeAttr('onclick');
  })
  enemies = [];

  openCell.forEach( function ( cell ){
    $(`#${cell}`).removeAttr( 'style', 'border: blue  solid;');
    $(`#${cell}`).removeAttr('onclick',);
  })
  openCell = [];

  const row = Number(cell.charAt(0))
  const col = Number(cell.charAt(2));
  console.log(`column: ${col}, row: ${row}, `)

    let northMoves = [ Number(`${row-1}${col}`), Number(`${row-2}${col}`), Number(`${row-3}${col}`), Number(`${row-4}${col}`), Number(`${row-5}${col}`), Number(`${row-6}${col}`), Number(`${row-7}${col}`),  ]
    let eastMoves  = [ Number(`${row}${col+1}`), Number(`${row}${col+2}`), Number(`${row}${col+3}`), Number(`${row}${col+4}`), Number(`${row}${col+5}`), Number(`${row}${col+6}`), Number(`${row}${col+7}`),  ]
    let southMoves = [ Number(`${row+1}${col}`), Number(`${row+2}${col}`), Number(`${row+3}${col}`), Number(`${row+4}${col}`), Number(`${row+5}${col}`), Number(`${row+6}${col}`), Number(`${row+7}${col}`),  ]
    let westMoves  = [ Number(`${row}${col-1}`), Number(`${row}${col-2}`), Number(`${row}${col-3}`), Number(`${row}${col-4}`), Number(`${row}${col-5}`), Number(`${row}${col-6}`), Number(`${row}${col-7}`),  ]
    
    let neMoves = [ Number(`${row-1}${col+1}`), Number(`${row-2}${col+2}`), Number(`${row-3}${col+3}`), Number(`${row-4}${col+4}`), Number(`${row-5}${col+5}`), Number(`${row-6}${col+6}`), Number(`${row-7}${col+7}`),  ]
    let seMoves = [ Number(`${row+1}${col+1}`), Number(`${row+2}${col+2}`), Number(`${row+3}${col+3}`), Number(`${row+4}${col+4}`), Number(`${row+5}${col+5}`), Number(`${row+6}${col+6}`), Number(`${row+7}${col+7}`),  ]
    let swMoves = [ Number(`${row-1}${col-1}`), Number(`${row-2}${col-2}`), Number(`${row-3}${col-3}`), Number(`${row-4}${col-4}`), Number(`${row-5}${col-5}`), Number(`${row-6}${col-6}`), Number(`${row-7}${col-7}`),  ]
    let nwMoves = [ Number(`${row+1}${col-1}`), Number(`${row+2}${col-2}`), Number(`${row+3}${col-3}`), Number(`${row+4}${col-4}`), Number(`${row+5}${col-5}`), Number(`${row+6}${col-6}`), Number(`${row+7}${col-7}`),  ]



    for( i=0 ; i<northMoves.length ; i++ ){
      try{
        console.log( northMoves[i], typeof(northMoves[i]) );
        const string = String( northMoves[i] );
        if ( string.length >= 3 ){
          console.log( 'move not on board');
          break;
        }
        const stringMove = `${string.charAt(0)}_${string.charAt(1)}`;

        console.log( 'string move', stringMove );
        
        const occupied = main.variables.cells[ northMoves[i] ].occupied.status;
        const enemy = main.variables.cells[ northMoves[i] ].occupied.black;

        console.log('loop', i,' occupied: ', occupied, 'enemeies', enemy );

        if ( occupied === false ){
          openCell.push( stringMove );
        } else if( enemy === true){
          enemies.push( stringMove );
          break;
        } else {
          console.log( 'piece in way');
          break;
        }
      } catch( err ){
        console.log( 'invalid move', err );
      }
    }
    for( i=0 ; i<eastMoves.length ; i++ ){
      try{
        const string = String( eastMoves[i] );
        if ( string.length >= 3 ){
          console.log( 'move not on board');
          break;
        }
        const stringMove = `${string.charAt(0)}_${string.charAt(1)}`;        
        const occupied = main.variables.cells[ eastMoves[i] ].occupied.status;
        const enemy = main.variables.cells[ eastMoves[i] ].occupied.black;

        console.log('loop', i,' occupied: ', occupied, 'enemeies', enemy );

        if ( occupied === false ){
          openCell.push( stringMove );
        } else if( enemy === true){
          enemies.push( stringMove );
          break;
        } else {
          console.log( 'piece in way');
          break;
        }
      } catch( err ){
        console.log( 'invalid move', err );
      }
    }
    for( i=0 ; i<southMoves.length ; i++ ){
      try{
        const string = String( southMoves[i] );
        if ( string.length >= 3 ){
          console.log( 'move not on board');
          break;
        }
        const stringMove = `${string.charAt(0)}_${string.charAt(1)}`;        
        const occupied = main.variables.cells[ southMoves[i] ].occupied.status;
        const enemy = main.variables.cells[ southMoves[i] ].occupied.black;

        console.log('loop', i,' occupied: ', occupied, 'enemeies', enemy );

        if ( occupied === false ){
          openCell.push( stringMove );
        } else if( enemy === true){
          enemies.push( stringMove );
          break;
        } else {
          console.log( 'piece in way');
          break;
        }
      } catch( err ){
        console.log( 'invalid move', err );
      }
    }
    for( i=0 ; i<westMoves.length ; i++ ){
      try{
        const string = String( westMoves[i] );
        if ( string.length >= 3 ){
          console.log( 'move not on board');
          break;
        }
        const stringMove = `${string.charAt(0)}_${string.charAt(1)}`;        
        const occupied = main.variables.cells[ westMoves[i] ].occupied.status;
        const enemy = main.variables.cells[ westMoves[i] ].occupied.black;

        console.log('loop', i,' occupied: ', occupied, 'enemeies', enemy );

        if ( occupied === false ){
          openCell.push( stringMove );
        } else if( enemy === true){
          enemies.push( stringMove );
          break;
        } else {
          console.log( 'piece in way');
          break;
        }
      } catch( err ){
        console.log( 'invalid move', err );
      }
    }
    for( i=0 ; i<neMoves.length ; i++ ){
      try{
        console.log( neMoves[i], typeof(neMoves[i]) );
        const string = String( neMoves[i] );
        if ( string.length >= 3 ){
          console.log( 'move not on board');
          break;
        }
        const stringMove = `${string.charAt(0)}_${string.charAt(1)}`;

        console.log( 'string move', stringMove );
        
        const occupied = main.variables.cells[ neMoves[i] ].occupied.status;
        const enemy = main.variables.cells[ neMoves[i] ].occupied.black;

        console.log('loop', i,' occupied: ', occupied, 'enemeies', enemy );

        if ( occupied === false ){
          openCell.push( stringMove );
        } else if( enemy === true){
          enemies.push( stringMove );
          break;
        } else {
          console.log( 'piece in way');
          break;
        }
      } catch( err ){
        console.log( 'invalid move', err );
      }
    }
    for( i=0 ; i<seMoves.length ; i++ ){
      try{
        const string = String( seMoves[i] );
        if ( string.length >= 3 ){
          console.log( 'move not on board');
          break;
        }
        const stringMove = `${string.charAt(0)}_${string.charAt(1)}`;        
        const occupied = main.variables.cells[ seMoves[i] ].occupied.status;
        const enemy = main.variables.cells[ seMoves[i] ].occupied.black;

        console.log('loop', i,' occupied: ', occupied, 'enemeies', enemy );

        if ( occupied === false ){
          openCell.push( stringMove );
        } else if( enemy === true){
          enemies.push( stringMove );
          break;
        } else {
          console.log( 'piece in way');
          break;
        }
      } catch( err ){
        console.log( 'invalid move', err );
      }
    }
    for( i=0 ; i<swMoves.length ; i++ ){
      try{
        const string = String( swMoves[i] );
        if ( string.length >= 3 ){
          console.log( 'move not on board');
          break;
        }
        const stringMove = `${string.charAt(0)}_${string.charAt(1)}`;        
        const occupied = main.variables.cells[ swMoves[i] ].occupied.status;
        const enemy = main.variables.cells[ swMoves[i] ].occupied.black;

        console.log('loop', i,' occupied: ', occupied, 'enemeies', enemy );

        if ( occupied === false ){
          openCell.push( stringMove );
        } else if( enemy === true){
          enemies.push( stringMove );
          break;
        } else {
          console.log( 'piece in way');
          break;
        }
      } catch( err ){
        console.log( 'invalid move', err );
      }
    }
    for( i=0 ; i<nwMoves.length ; i++ ){
      try{
        const string = String( nwMoves[i] );
        if ( string.length >= 3 ){
          console.log( 'move not on board');
          break;
        }
        const stringMove = `${string.charAt(0)}_${string.charAt(1)}`;        
        const occupied = main.variables.cells[ nwMoves[i] ].occupied.status;
        const enemy = main.variables.cells[ nwMoves[i] ].occupied.black;

        console.log('loop', i,' occupied: ', occupied, 'enemeies', enemy );

        if ( occupied === false ){
          openCell.push( stringMove );
        } else if( enemy === true){
          enemies.push( stringMove );
          break;
        } else {
          console.log( 'piece in way');
          break;
        }
      } catch( err ){
        console.log( 'invalid move', err );
      }
    }
    console.log( 'enemies array', enemies, 'open cell array:', openCell );

    openCell.forEach( function ( newCell ){
      $(`#${newCell}`).attr( 'style', 'border: blue  solid;');
      $(`#${newCell}`).attr('onclick', `movePiece( ${newCell}, ${cell} )`);
    })
    enemies.forEach( function ( newCell ){
      $(`#${newCell}`).attr( 'style', 'border: red  solid;');
      $(`#${newCell}`).attr('onclick', `capturePiece( ${newCell}, ${cell} )`);
    })

    moveObj = {
      oldCell: cell,
      type: type,
      piece: piece,
      img: './assets/WhiteQueen.png'
    }
}

function showBlackQueen( type, piece, cell ){
  console.log('showing moves for Black Queen: ', piece, cell);

  $(`#${pieceChosen}`).removeAttr( 'style', 'border: green  solid;');
  pieceChosen = cell;
  $(`#${pieceChosen}`).attr( 'style', 'border: green  solid;');

  enemies.forEach( function ( cell ){
    $(`#${cell}`).removeAttr( 'style', 'border: red  solid;');
    $(`#${cell}`).removeAttr('onclick');
  })
  enemies = [];

  openCell.forEach( function ( cell ){
    $(`#${cell}`).removeAttr( 'style', 'border: blue  solid;');
    $(`#${cell}`).removeAttr('onclick',);
  })
  openCell = [];

  const row = Number(cell.charAt(0))
  const col = Number(cell.charAt(2));
  console.log(`column: ${col}, row: ${row}, `)

    let northMoves = [ Number(`${row-1}${col}`), Number(`${row-2}${col}`), Number(`${row-3}${col}`), Number(`${row-4}${col}`), Number(`${row-5}${col}`), Number(`${row-6}${col}`), Number(`${row-7}${col}`),  ]
    let eastMoves  = [ Number(`${row}${col+1}`), Number(`${row}${col+2}`), Number(`${row}${col+3}`), Number(`${row}${col+4}`), Number(`${row}${col+5}`), Number(`${row}${col+6}`), Number(`${row}${col+7}`),  ]
    let southMoves = [ Number(`${row+1}${col}`), Number(`${row+2}${col}`), Number(`${row+3}${col}`), Number(`${row+4}${col}`), Number(`${row+5}${col}`), Number(`${row+6}${col}`), Number(`${row+7}${col}`),  ]
    let westMoves  = [ Number(`${row}${col-1}`), Number(`${row}${col-2}`), Number(`${row}${col-3}`), Number(`${row}${col-4}`), Number(`${row}${col-5}`), Number(`${row}${col-6}`), Number(`${row}${col-7}`),  ]
    
    let neMoves = [ Number(`${row-1}${col+1}`), Number(`${row-2}${col+2}`), Number(`${row-3}${col+3}`), Number(`${row-4}${col+4}`), Number(`${row-5}${col+5}`), Number(`${row-6}${col+6}`), Number(`${row-7}${col+7}`),  ]
    let seMoves = [ Number(`${row+1}${col+1}`), Number(`${row+2}${col+2}`), Number(`${row+3}${col+3}`), Number(`${row+4}${col+4}`), Number(`${row+5}${col+5}`), Number(`${row+6}${col+6}`), Number(`${row+7}${col+7}`),  ]
    let swMoves = [ Number(`${row-1}${col-1}`), Number(`${row-2}${col-2}`), Number(`${row-3}${col-3}`), Number(`${row-4}${col-4}`), Number(`${row-5}${col-5}`), Number(`${row-6}${col-6}`), Number(`${row-7}${col-7}`),  ]
    let nwMoves = [ Number(`${row+1}${col-1}`), Number(`${row+2}${col-2}`), Number(`${row+3}${col-3}`), Number(`${row+4}${col-4}`), Number(`${row+5}${col-5}`), Number(`${row+6}${col-6}`), Number(`${row+7}${col-7}`),  ]



    for( i=0 ; i<northMoves.length ; i++ ){
      try{
        console.log( northMoves[i], typeof(northMoves[i]) );
        const string = String( northMoves[i] );
        if ( string.length >= 3 ){
          console.log( 'move not on board');
          break;
        }
        const stringMove = `${string.charAt(0)}_${string.charAt(1)}`;

        console.log( 'string move', stringMove );
        
        const occupied = main.variables.cells[ northMoves[i] ].occupied.status;
        const enemy = main.variables.cells[ northMoves[i] ].occupied.white;

        console.log('loop', i,' occupied: ', occupied, 'enemeies', enemy );

        if ( occupied === false ){
          openCell.push( stringMove );
        } else if( enemy === true){
          enemies.push( stringMove );
          break;
        } else {
          console.log( 'piece in way');
          break;
        }
      } catch( err ){
        console.log( 'invalid move', err );
      }
    }
    for( i=0 ; i<eastMoves.length ; i++ ){
      try{
        const string = String( eastMoves[i] );
        if ( string.length >= 3 ){
          console.log( 'move not on board');
          break;
        }
        const stringMove = `${string.charAt(0)}_${string.charAt(1)}`;        
        const occupied = main.variables.cells[ eastMoves[i] ].occupied.status;
        const enemy = main.variables.cells[ eastMoves[i] ].occupied.white;

        console.log('loop', i,' occupied: ', occupied, 'enemeies', enemy );

        if ( occupied === false ){
          openCell.push( stringMove );
        } else if( enemy === true){
          enemies.push( stringMove );
          break;
        } else {
          console.log( 'piece in way');
          break;
        }
      } catch( err ){
        console.log( 'invalid move', err );
      }
    }
    for( i=0 ; i<southMoves.length ; i++ ){
      try{
        const string = String( southMoves[i] );
        if ( string.length >= 3 ){
          console.log( 'move not on board');
          break;
        }
        const stringMove = `${string.charAt(0)}_${string.charAt(1)}`;        
        const occupied = main.variables.cells[ southMoves[i] ].occupied.status;
        const enemy = main.variables.cells[ southMoves[i] ].occupied.white;

        console.log('loop', i,' occupied: ', occupied, 'enemeies', enemy );

        if ( occupied === false ){
          openCell.push( stringMove );
        } else if( enemy === true){
          enemies.push( stringMove );
          break;
        } else {
          console.log( 'piece in way');
          break;
        }
      } catch( err ){
        console.log( 'invalid move', err );
      }
    }
    for( i=0 ; i<westMoves.length ; i++ ){
      try{
        const string = String( westMoves[i] );
        if ( string.length >= 3 ){
          console.log( 'move not on board');
          break;
        }
        const stringMove = `${string.charAt(0)}_${string.charAt(1)}`;        
        const occupied = main.variables.cells[ westMoves[i] ].occupied.status;
        const enemy = main.variables.cells[ westMoves[i] ].occupied.white;

        console.log('loop', i,' occupied: ', occupied, 'enemeies', enemy );

        if ( occupied === false ){
          openCell.push( stringMove );
        } else if( enemy === true){
          enemies.push( stringMove );
          break;
        } else {
          console.log( 'piece in way');
          break;
        }
      } catch( err ){
        console.log( 'invalid move', err );
      }
    }
    for( i=0 ; i<neMoves.length ; i++ ){
      try{
        console.log( neMoves[i], typeof(neMoves[i]) );
        const string = String( neMoves[i] );
        if ( string.length >= 3 ){
          console.log( 'move not on board');
          break;
        }
        const stringMove = `${string.charAt(0)}_${string.charAt(1)}`;

        console.log( 'string move', stringMove );
        
        const occupied = main.variables.cells[ neMoves[i] ].occupied.status;
        const enemy = main.variables.cells[ neMoves[i] ].occupied.white;

        console.log('loop', i,' occupied: ', occupied, 'enemeies', enemy );

        if ( occupied === false ){
          openCell.push( stringMove );
        } else if( enemy === true){
          enemies.push( stringMove );
          break;
        } else {
          console.log( 'piece in way');
          break;
        }
      } catch( err ){
        console.log( 'invalid move', err );
      }
    }
    for( i=0 ; i<seMoves.length ; i++ ){
      try{
        const string = String( seMoves[i] );
        if ( string.length >= 3 ){
          console.log( 'move not on board');
          break;
        }
        const stringMove = `${string.charAt(0)}_${string.charAt(1)}`;        
        const occupied = main.variables.cells[ seMoves[i] ].occupied.status;
        const enemy = main.variables.cells[ seMoves[i] ].occupied.white;

        console.log('loop', i,' occupied: ', occupied, 'enemeies', enemy );

        if ( occupied === false ){
          openCell.push( stringMove );
        } else if( enemy === true){
          enemies.push( stringMove );
          break;
        } else {
          console.log( 'piece in way');
          break;
        }
      } catch( err ){
        console.log( 'invalid move', err );
      }
    }
    for( i=0 ; i<swMoves.length ; i++ ){
      try{
        const string = String( swMoves[i] );
        if ( string.length >= 3 ){
          console.log( 'move not on board');
          break;
        }
        const stringMove = `${string.charAt(0)}_${string.charAt(1)}`;        
        const occupied = main.variables.cells[ swMoves[i] ].occupied.status;
        const enemy = main.variables.cells[ swMoves[i] ].occupied.white;

        console.log('loop', i,' occupied: ', occupied, 'enemeies', enemy );

        if ( occupied === false ){
          openCell.push( stringMove );
        } else if( enemy === true){
          enemies.push( stringMove );
          break;
        } else {
          console.log( 'piece in way');
          break;
        }
      } catch( err ){
        console.log( 'invalid move', err );
      }
    }
    for( i=0 ; i<nwMoves.length ; i++ ){
      try{
        const string = String( nwMoves[i] );
        if ( string.length >= 3 ){
          console.log( 'move not on board');
          break;
        }
        const stringMove = `${string.charAt(0)}_${string.charAt(1)}`;        
        const occupied = main.variables.cells[ nwMoves[i] ].occupied.status;
        const enemy = main.variables.cells[ nwMoves[i] ].occupied.white;

        console.log('loop', i,' occupied: ', occupied, 'enemeies', enemy );

        if ( occupied === false ){
          openCell.push( stringMove );
        } else if( enemy === true){
          enemies.push( stringMove );
          break;
        } else {
          console.log( 'piece in way');
          break;
        }
      } catch( err ){
        console.log( 'invalid move', err );
      }
    }
    console.log( 'enemies array', enemies, 'open cell array:', openCell );

    openCell.forEach( function ( newCell ){
      $(`#${newCell}`).attr( 'style', 'border: blue  solid;');
      $(`#${newCell}`).attr('onclick', `movePiece( ${newCell}, ${cell} )`);
    })
    enemies.forEach( function ( newCell ){
      $(`#${newCell}`).attr( 'style', 'border: red  solid;');
      $(`#${newCell}`).attr('onclick', `capturePiece( ${newCell}, ${cell} )`);
    })

    moveObj = {
      oldCell: cell,
      type: type,
      piece: piece,
      img: './assets/BlackQueen.png'
    }
}

function showWhiteKing( type, piece, cell ){
  console.log('showing moves for White King: ', piece, cell);

  $(`#${pieceChosen}`).removeAttr( 'style', 'border: green  solid;');
  pieceChosen = cell;
  $(`#${pieceChosen}`).attr( 'style', 'border: green  solid;');

  enemies.forEach( function ( cell ){
    $(`#${cell}`).removeAttr( 'style', 'border: red  solid;');
    $(`#${cell}`).removeAttr('onclick');
  })
  enemies = [];

  openCell.forEach( function ( cell ){
    $(`#${cell}`).removeAttr( 'style', 'border: blue  solid;');
    $(`#${cell}`).removeAttr('onclick',);;
  })
  openCell = [];

  const row = Number(cell.charAt(0))
  const col = Number(cell.charAt(2));
  console.log(`column: ${col}, row: ${row},`)

  const moves = [ Number(`${row-1}${col}`), Number(`${row-1}${col+1}`), Number(`${row}${col+1}`), Number(`${row+1}${col+1}`), Number(`${row+1}${col}`), Number(`${row+1}${col-1}`), Number(`${row}${col-1}`), Number(`${row-1}${col-1}`), ];

  moves.forEach( function ( move){
    try{
      const string = String( move );
      if ( string.length >= 3 ){
        console.log( 'move not on board');
      }
      const stringMove = `${string.charAt(0)}_${string.charAt(1)}`;
      const occupied = main.variables.cells[ move ].occupied.status;
      const enemy = main.variables.cells[ move ].occupied.black;

      if ( occupied === false ){
        openCell.push( stringMove );
      } else if( enemy === true){
        enemies.push( stringMove );
      } else {
        console.log( 'piece in way');
      }
    } catch( err ){
      console.log( 'invalid move', err );
    }
  })

    console.log( 'enemies array', enemies, 'open cell array:', openCell );

    openCell.forEach( function ( newCell ){
      $(`#${newCell}`).attr( 'style', 'border: blue  solid;');
      $(`#${newCell}`).attr('onclick', `movePiece( ${newCell}, ${cell} )`);
    })
    enemies.forEach( function ( newCell ){
      $(`#${newCell}`).attr( 'style', 'border: red  solid;');
      $(`#${newCell}`).attr('onclick', `capturePiece( ${newCell}, ${cell} )`);
    })

    moveObj = {
      oldCell: cell,
      type: type,
      piece: piece,
      img: './assets/WhiteKing.png'
    }
}

function showBlackKing( type, piece, cell ){
  console.log('showing moves for Black King: ', piece, cell);

  $(`#${pieceChosen}`).removeAttr( 'style', 'border: green  solid;');
  pieceChosen = cell;
  $(`#${pieceChosen}`).attr( 'style', 'border: green  solid;');

  enemies.forEach( function ( cell ){
    $(`#${cell}`).removeAttr( 'style', 'border: red  solid;');
    $(`#${cell}`).removeAttr('onclick');
  })
  enemies = [];

  openCell.forEach( function ( cell ){
    $(`#${cell}`).removeAttr( 'style', 'border: blue  solid;');
    $(`#${cell}`).removeAttr('onclick',);;
  })
  openCell = [];

  const row = Number(cell.charAt(0))
  const col = Number(cell.charAt(2));
  console.log(`column: ${col}, row: ${row},`)

  const moves = [ Number(`${row-1}${col}`), Number(`${row-1}${col+1}`), Number(`${row}${col+1}`), Number(`${row+1}${col+1}`), Number(`${row+1}${col}`), Number(`${row+1}${col-1}`), Number(`${row}${col-1}`), Number(`${row-1}${col-1}`), ];

  moves.forEach( function ( move){
    try{
      const string = String( move );
      if ( string.length >= 3 ){
        console.log( 'move not on board');
      }
      const stringMove = `${string.charAt(0)}_${string.charAt(1)}`;
      const occupied = main.variables.cells[ move ].occupied.status;
      const enemy = main.variables.cells[ move ].occupied.white;

      if ( occupied === false ){
        openCell.push( stringMove );
      } else if( enemy === true){
        enemies.push( stringMove );
      } else {
        console.log( 'piece in way');
      }
    } catch( err ){
      console.log( 'invalid move', err );
    }
  })

    console.log( 'enemies array', enemies, 'open cell array:', openCell );

    openCell.forEach( function ( newCell ){
      $(`#${newCell}`).attr( 'style', 'border: blue  solid;');
      $(`#${newCell}`).attr('onclick', `movePiece( ${newCell}, ${cell} )`);
    })
    enemies.forEach( function ( newCell ){
      $(`#${newCell}`).attr( 'style', 'border: red  solid;');
      $(`#${newCell}`).attr('onclick', `capturePiece( ${newCell}, ${cell} )`);
    })

    moveObj = {
      oldCell: cell,
      type: type,
      piece: piece,
      img: './assets/BlackKing.png'
    }
}

function movePiece( newCell, oldCell ){
  console.log( `moving piece from ${oldCell} to ${newCell}`);

  const string = String( newCell )
  const row = string.charAt( 0 );
  const col = string.charAt( 1 );
  const cellNew = `${row}_${col}`;


  console.log('piece:', moveObj.piece)

    if( moveObj.piece.charAt( 0 ) === 'w'){
          //update piece status
      main.variables.pieces[moveObj.piece].position = cellNew;
      main.variables.pieces[moveObj.piece].moved = true;
      //update cell status
      main.variables.cells[ oldCell ].piece = 'none';
      main.variables.cells[ oldCell ].occupied.status = false;
      main.variables.cells[ oldCell ].occupied.white = false
  
      main.variables.cells[ newCell ].piece = moveObj.piece;
      main.variables.cells[ newCell ].occupied.status = true;
      main.variables.cells[ newCell ].occupied.white = true;

    } else if ( moveObj.piece.charAt( 0 ) === 'b'){

      main.variables.pieces[moveObj.piece].position = cellNew;
      main.variables.pieces[moveObj.piece].moved = true;
      //update cell status
      main.variables.cells[ oldCell ].piece = 'none';
      main.variables.cells[ oldCell ].occupied.status = false;
      main.variables.cells[ oldCell ].occupied.black = false
  
      main.variables.cells[ newCell ].piece = moveObj.piece;
      main.variables.cells[ newCell ].occupied.status = true;
      main.variables.cells[ newCell ].occupied.black = true;
    }
    console.log( main.variables.pieces[moveObj.piece].position)
  $(`#${moveObj.oldCell}`).empty();
  $(`#${cellNew}`).append(` <img src='${moveObj.img}' class='piece'></img>`);

    //clear css
  $(`#${pieceChosen}`).removeAttr( 'style', 'border: green  solid;');

  enemies.forEach( function ( cell ){
    $(`#${cell}`).removeAttr( 'style', 'border: red  solid;');
    $(`#${cell}`).removeAttr('onclick');
  })
  // enemies = [];

  openCell.forEach( function ( cell ){
    $(`#${cell}`).removeAttr( 'style', 'border: blue  solid;');
    $(`#${cell}`).removeAttr('onclick',);
  })
  // openCell = [];
  turn = !turn;
  console.log( turn )
  showTurn();
}

function capturePiece( newCell, oldCell ){
  console.log( `moving piece from ${oldCell} to ${newCell}`);

  const string = String( newCell )
  const row = string.charAt( 0 );
  const col = string.charAt( 1 );
  const cellNew = `${row}_${col}`;

  const capturedPiece = main.variables.cells[newCell].piece;
  main.variables.pieces[capturedPiece].position = 'none';
  main.variables.pieces[capturedPiece].captured = true;

  const capturedImg = main.variables.pieces[ capturedPiece ].img;
  const capturedType = main.variables.pieces[ capturedPiece ].type;
  console.log(`image: ${capturedImg}, type: ${capturedType} `);

  if ( capturedType.charAt(0) === 'w'){
    if( capturedType === 'w_pawn'){
        $('#whitePawnGrave').append(` <div class='grave' id="${capturedType}"><img src='${capturedImg}' class='piece'></div>`)
    } else {
      $('#whiteRoyalGrave').append(` <div class='grave' id="${capturedType}"><img src='${capturedImg}' class='piece'></div>`)
    }
  } else {
    if ( capturedType === 'b_pawn'){
      $('#blackPawnGrave').append(` <div class='grave' id="${capturedType}"><img src='${capturedImg}' class='piece'></div>`)
    }else {
      $('#blackRoyalGrave').append(` <div class='grave' id="${capturedType}"><img src='${capturedImg}' class='piece'></div>`)
    }
  }

  console.log('piece:', moveObj.piece)

    if( moveObj.piece.charAt( 0 ) === 'w'){
          //update piece status
      main.variables.pieces[moveObj.piece].position = cellNew;
      main.variables.pieces[moveObj.piece].moved = true;
      //update cell status
      main.variables.cells[ oldCell ].piece = 'none';
      main.variables.cells[ oldCell ].occupied.status = false;
      main.variables.cells[ oldCell ].occupied.white = false
  
      main.variables.cells[ newCell ].piece = moveObj.piece;
      main.variables.cells[ newCell ].occupied.status = true;
      main.variables.cells[ newCell ].occupied.white = true;
      main.variables.cells[ newCell ].occupied.black = false;


    } else if ( moveObj.piece.charAt( 0 ) === 'b'){

      main.variables.pieces[moveObj.piece].position = cellNew;
      main.variables.pieces[moveObj.piece].moved = true;
      //update cell status
      main.variables.cells[ oldCell ].piece = 'none';
      main.variables.cells[ oldCell ].occupied.status = false;
      main.variables.cells[ oldCell ].occupied.black = false
  
      main.variables.cells[ newCell ].piece = moveObj.piece;
      main.variables.cells[ newCell ].occupied.status = true;
      main.variables.cells[ newCell ].occupied.black = true;
      main.variables.cells[ newCell ].occupied.white = false;

    }
    console.log( main.variables.pieces[moveObj.piece].position)
  $(`#${moveObj.oldCell}`).empty();
  $(`#${cellNew}`).empty();
  $(`#${cellNew}`).append(` <img src='${moveObj.img}' class='piece'></img>`);

    //clear css
  $(`#${pieceChosen}`).removeAttr( 'style', 'border: green  solid;');

  enemies.forEach( function ( cell ){
    $(`#${cell}`).removeAttr( 'style', 'border: red  solid;');
    $(`#${cell}`).removeAttr('onclick');
  })
  // enemies = [];

  openCell.forEach( function ( cell ){
    $(`#${cell}`).removeAttr( 'style', 'border: blue  solid;');
    $(`#${cell}`).removeAttr('onclick',);
  })
  // openCell = [];
  turn = !turn;
  console.log( turn )
  showTurn();
}