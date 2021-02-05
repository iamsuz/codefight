function isValidSubsequence(array, sequence) {
  	// Write your code here.
	let count = 0;
  	array.forEach((x,i)=>{
  		if(x === sequence[count]){
  			console.log(x,sequence[count])
  			count ++;
  		}
  	})
  	return (count === sequence.length)? true : false
}

console.log(isValidSubsequence([1,2,3,4],[1,4]));

// Do not edit the line below.
//exports.isValidSubsequence = isValidSubsequence;
