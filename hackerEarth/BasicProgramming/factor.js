var arr = []
function factor(cur,n) {
	if(n === cur){
		console.log(arr);
		return true
	}
	console.log(n%cur)
	console.log(n,cur)
	if((n % cur) === 0){
		// console.log(cur);
		arr.push(cur);
	}
	factor(cur+1,n);

}

factor(1,8);

console.log(fourElement(arr,10))
function fourElement(arr,n) {
	var temp = n;
	var resArr = [];
	if(resArr.length === 4){
		return true
	}
	for(var i=arr.length-1;i>=0;i--){
		temp -= arr[i];
		console.log(arr[i])
		resArr.push(arr[i]);
		if(temp > arr[i]){
			resArr.push(arr[i]);
		}
	}
	return resArr
}