// // Vowel Recognition


function getSubString(string,subArr){
	for(let i=1;i<=string.length;i++){
		if(!subArr.includes(string.slice(0,i))){
			subArr.push(string.slice(0,i));
		}
	}
	return subArr
}

function countVowel(set,vowel) {
	let vowels = /[aeiou]/gi;
  	let result = set.match(vowels);
  	return (result)? result.length : 0;
	// let count = 0;
	// console.log(set);
	// [...set].forEach(s=>(vowel.includes(s))?count++:count)
	// return count;
}

function main(input) {
	const vowel = ['a','e','i','o','u','A','E','I','O','U']
	var result = []
	
	var inputArr = input.split('\n').splice(1);
    inputArr.forEach(string =>{
    	var subArr = []
    	string = string.toLowerCase().split(' ').join('');
    	for(let i=0;i<string.length;i++){
    		getSubString(string.slice(i),subArr);
    	}
    	let vowelCount = []
    	subArr.forEach(set=>{
    		vowelCount.push(countVowel(set,vowel));

    	})
    	result.push(vowelCount.reduce((a,c)=>a+c));
    })
    console.log(result.join('\n'))
}


const vowelCount = str => {
  let vowels = /[aeiou]/gi;
  let result = str.match(vowels);
  let count = result.length;

  console.log(count);
};

//vowelCount('I am sujit');

main("4\ni am sujIt");
