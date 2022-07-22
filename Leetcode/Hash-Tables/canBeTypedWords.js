





//pretty clean with helper function
const canBeTypedWords = (text, broken) =>
	text.split(' ').filter((word) => isValidWord(word, broken)).length;

const isValidWord = (word, broken) =>
	[...word].some((char) => broken.includes(char)) === true;