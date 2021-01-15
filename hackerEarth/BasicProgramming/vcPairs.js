// find the paid for consonents and followed by vowels
//like bazeci b->a is one pair z->e is 2nd and c->i is 3rd


function main(input) {
	let res = [];
	let inputArr = input.split('\n');
	inputArr.forEach(str=>{
		if(!/\d/.test(str)){ //checks if the string is integer and i made it reverse using not gate
			console.log(str);
			let count = 0;
			for(let i=0;i<str.length;i++){
				if(!'aeiou'.includes(str[i]) && 'aeiou'.includes(str[i+1])){
					count++
				}
			}
			res.push(count);
		}
	})
	return res;
}

console.log(main('4\n2\nbazeci\n5\nabu\n1\no'))