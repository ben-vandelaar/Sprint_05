/*Looping a triangle
Write a loop that makes seven calls to console.log to output the following triangle:*/

for(var i = "#"; i.length < 8; i+= "#"){
    console.log(i);
}

/*FizzBuzz

Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
*/
for(i=1; i <= 100; i++){
  if(i % 3 === 0 && i % 5 === 0){
    console.log("FizzBuzz");
  }else if(i % 3 === 0){
    console.log("Fizz");
  }else if(i % 5 === 0){
    console.log("Buzz");
  }else{
	console.log(i);
	}
}



/*Chessboard
Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.*/

var board = " ";
var size = 8;
for (var y = 0; y < size; y++){
	for (var x = 0; x < size; x++){
		if((x+y) % 2 === 0){
      		board += " "; 
			}else{
		board += "#"; 
  		}
	}
  board += "\n";
}
console.log(board); 

/*Minimum
The previous chapter introduced the standard function Math.min that returns its smallest argument. We can build something like that now. Write a function min that takes two arguments and returns their minimum.*/

// Your code here.
let min = function (num1,num2){
	return Math.min(num1,num2);
}
console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

/*Recursion
We’ve seen that % (the remainder operator) can be used to test whether a number is even or odd by using % 2 to see whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd:

Zero is even.

One is odd.

For any other number N, its evenness is the same as N - 2.

Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean.*/

// Your code here.
function isEven(num) {
    if (num == 0) {
      return true;
    } else if (num == 1) {
      return false;
    } else {
      return isEven(Math.abs(num-2));
  }
}
console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??

//Counting Beans

function countChar(str, char) {
	var count = 0;
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) === char){
    count ++
    }
  }
return (count);	
 }

console.log(countChar("BBC","B"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4