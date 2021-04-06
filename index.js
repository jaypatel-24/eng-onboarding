//this code prints the total terms in fibonacci series
// example say : input_number = 5,  output: 0 1 1 2 3

const prompt = require("prompt-sync")();

const input_number  = parseInt(prompt('Enter the number of terms in sequence: '));

let n1 = 0, n2 = 1, sum = 0 ;
let terms = 0;
while(terms < input_number) {
	console.log(sum+" ")

	n1 = n2;
	n2 = sum;
    sum = n1 + n2;

    terms++;
}