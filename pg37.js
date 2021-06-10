//--------------------LOOPING TRIANGLE--------------------//

for (let i = "#"; i.length < 8; i += "#")
  //console.log(i);
  //loop i starting at #; length can't exceed 8; every loop as one #.

  //--------------------FIZZ BUZZ--------------------//

  //program that prints 1 to 100.
  //if num is divisible by 3 === "Fizz"
  //if num is divisible by 5 === "Buzz"

  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      //console.log("Fizz & Buzz");
    } else if (i % 3 === 0) {
      //console.log("Fizz");
    } else if (i % 5 === 0) {
      //console.log("Buzz");
    } else {
      //console.log(i);
    }
  }
//--------------------CHESSBOARD--------------------//

//program writes a string that reps an 8x8 grid
//each char is a space or #

function grid(num) {
  let board = "";

  for (let i = 0; i < num; i++) {
    //out most loop "i" starts at 0 then adds one till i = num

    for (let y = 0; y < num; y++) {
      //inner most loop "y" 0 1 2 3... ect till === num (same as "i" loop)
      if ((i + y) % 2 === 0) {
        //if i plus y = even then add a space to board
        board += " ";
      } else {
        //if i plus y = odd add # to board
        board += "#";
      }
    }
    //outside both loops we add a ${\n} to start a new line
    //each loop that adds to board = one line.
    //example) line 0 begins at 0 aka even aka " "
    ///////////line 1 begins at 1 aka odd aka "#"
    board += "\n";
  }
  //returning board outside the loops shows board printing all the loops
  return board;
}
// console.log(grid(15));
