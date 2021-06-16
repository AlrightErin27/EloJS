///---------------------Q1 - Minimum---------------------///

//use Math.min
//make fxn that w/2 arguments
//returns their min

const min = (value1, value2) => Math.min(value1, value2);
//console.log(min(0, 10)); //0
//console.log(min(0, -10)); //-10

///---------------------Q2 - Recursion---------------------///

//make a recursive fxn
//it accepts on param (+ whole #)
//uses a boolean to check if is or isn't even

function isEven(num) {
  if (num === 0) {
    return true;
  } else if (num === 1) {
    return false;
  } else if (num < 0) {
    return isEven(-num);
  } else {
    return isEven(num - 2);
  }
  //return true if even
}
//**How this works: */
//num trickles down thru the if situations
//once it hits a descriptor that suits it
// it either is one or zero
//or it keeps trickling through the bottom conditions
//until it is reduced to a one or zero

//console.log(isEven(50)); // → true
//console.log(isEven(75)); // → false
//console.log(isEven(-1)); // → false

///---------------------Q2 - Bean Counting---------------------///

//you can get an Nth char or letter by writing a string "string[N]"
//returned val will be a string containing one char (example "b")
//first char = index 0, last char (string.length - 1)

//make fxn to count "b"'s
//takes a string as an argument
//returns a num that indicates how many upper case B's their are

//Part 1
function bCounter(str) {
  let amountBs = 0;
  //loop through
  for (let i = 0; i < str.length; i++) {
    // console.log(i);
    if (str[i] === "B") {
      amountBs += 1;
    }
  }
  //return amount of B's
  return amountBs;
}
//console.log(bCounter("BBC")); // → 2

//Part 2
//write a fxn called countChar the same as part one
// accept for w/ a 2nd argument that shows what char should be counted

function countChar(str, char) {
  counted = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      counted += 1;
    }
  }
  return counted;
}

//console.log(countChar("BbgggGTTTTLg", "g")); //4
