/*
1221. Split a String in Balanced Strings

https://leetcode.com/problems/split-a-string-in-balanced-strings/

Balanced strings are those that have an equal quantity of 'L' and 'R' characters.

Given a balanced string s, split it in the maximum amount of balanced strings.

Return the maximum amount of split balanced strings.


STEPS: 

1. 




*/


var balancedStringSplit = function(s) {
    
    let matches = 0;
	let balance = 0;

	for (let i = 0; i < s.length; i++) {

		if (s[i] === "R") {
			balance -= 1;
		} else if (s[i] === "L") {
			balance += 1;
		}

		if (balance === 0) {
			matches += 1;
		}
	}

	return matches;
};



//USING STACK
var balancedStringSplit = function(s) {
    
    let matches = 0;
	const stack = [];

	stack.push(s[0]);

	for (let i = 1; i < s.length; i++) {

		const top = stack[stack.length - 1];

		if (top !== undefined && top !== s[i]) {
			stack.pop()
		} else {
			stack.push(s[i]);
		}

		if (stack.length === 0) {
			matches += 1;
		}
	}

	return matches;
};


