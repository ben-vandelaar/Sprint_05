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

