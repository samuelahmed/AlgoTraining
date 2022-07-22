/* 




*/ 




const countGoodSubstrings = (s) => {
    
	let answer = 0

	for (let i = 0; i < s.length - 2; i++) {
		let str = s.slice(i, i + 3)
		let set = new Set(str)
		if (set.size === 3) answer += 1
	}
    
	return answer
};