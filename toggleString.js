const main = (string) =>{
	let result = [];
	[...string].forEach(str=>{
		if(str === str.toUpperCase()){
			result.push(str.toLowerCase())
		}
		if(str === str.toLowerCase()){
			result.push(str.toUpperCase())
		}
	})
	return result.join('');
}


console.log(main('ASdsPsadD'));