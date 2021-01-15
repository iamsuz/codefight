// https://he-s3.s3.amazonaws.com/media/uploads/a2e0794.jpg
// seating arrangement


function main(input) {
	let inputArr = input.split('\n').splice(1)
	let result = [];
	inputArr.forEach(t=>{
		console.log(t);
		let temp = 0;
		switch(t%12){
			case 1:
				temp = (parseInt(t)+11).toString()+'WS';
				break
			case 2:
				temp = (parseInt(t)+9).toString()+'MS';
				break;
			case 3:
				temp = (parseInt(t)+7).toString()+'AS';
				break;
			case 4:
				temp = (parseInt(t)+5).toString()+'AS';
				break;
			case 5:
				temp = (parseInt(t)+ 3).toString()+'MS';
				break;
			case 6:
				temp = (parseInt(t)+1).toString()+'WS';
				break;
			case 7:
				temp = (parseInt(t) -1).toString()+'WS';
				break;
			case 8:
				temp = (parseInt(t) -3).toString()+'MS';
				break;
			case 9:
				temp = (parseInt(t) - 5).toString()+'AS';
				break;
			case 10:
				temp = (parseInt(t) -7).toString()+'AS';
				break;
			case 11:
				temp = (parseInt(t) - 9).toString()+'MS';
				break;
			case 0:
				temp = (parseInt(t) - 11).toString()+'WS';
				break;
		}
		result.push(temp);
	})
}

console.log(main('2\n14\n35'));